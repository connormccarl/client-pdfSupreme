import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Document, Page, pdfjs } from "react-pdf";
import { useNavigate } from "react-router";
import axios from "axios";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const MergDrop = () => {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [pdfs, setPdfs] = useState([]);
  const [uploadedFileNames, setUploadedFileNames] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [completedURL, setCompletedURL] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPdfIndex, setSelectedPdfIndex] = useState(null);
  const [errorMessage, setErrorMessage] = useState({
    formatError: "",
    sizeError: "",
  });

  const [mergeComplete, setMergeComplete] = useState(false);
  const navigate = useNavigate();

  const clearError = () => {
    setErrorMessage({ formatError: "", sizeError: "" });
  };

  useEffect(() => {
    const timer = setTimeout(clearError, 3000);
    return () => clearTimeout(timer);
  }, [errorMessage]);

  const onDrop = async (acceptedFiles) => {
    setLoading(true);
    const files = acceptedFiles.filter(
      (file) => file.type === "application/pdf" && file.size <= 10 * 1024 * 1024
    );

    if (files.length === 0) {
      setLoading(false);
      const isInvalidFormat = acceptedFiles.some(
        (file) => file.type !== "application/pdf"
      );
      const isSizeExceeded = acceptedFiles.some(
        (file) => file.size > 10 * 1024 * 1024
      );

      if (isInvalidFormat && isSizeExceeded) {
        setErrorMessage({
          formatError: "Error: Invalid file format. Please upload PDF files.",
          sizeError: "Error: File size exceeds the maximum limit of 10MB.",
        });
      } else if (isInvalidFormat) {
        setErrorMessage({
          formatError: "Error: Invalid file format. Please upload PDF files.",
          sizeError: "",
        });
      } else if (isSizeExceeded) {
        setErrorMessage({
          formatError: "",
          sizeError: "Error: File size exceeds the maximum limit of 10MB.",
        });
      }
      return;
    }

    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const arrayBuffer = reader.result;
          const typedArray = new Uint8Array(arrayBuffer);
          const pdfData = new Blob([typedArray], { type: "application/pdf" });
          resolve({
            pdf: URL.createObjectURL(pdfData),
            name: file.name,
            file: pdfData,
          });
        };
        reader.onerror = () => {
          reject(new Error("Failed to load the PDF file."));
        };
        reader.readAsArrayBuffer(file);
      });
    });

    try {
      const results = await Promise.all(promises);
      setPdfs((prevPdfs) => [
        ...prevPdfs,
        ...results.map((result) => result.pdf),
      ]);
      setUploadedFileNames((prevNames) => [
        ...prevNames,
        ...results.map((result) => result.name),
      ]);
      setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setErrorMessage({
        formatError: "",
        sizeError: "Error: Failed to load some PDF files. Please try again.",
      });
    }

    setLoading(false);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleDeleteAll = () => {
    setPdfs([]);
    setUploadedFileNames([]);
    setUploadedFiles([]);
    setCompletedURL(null);
  };
  const handleUploadAgain = () => {
    setPdfs([]);
    setUploadedFileNames([]);
    setUploadedFiles([]);
    setCompletedURL(null);
  };
  const handleDeleteFile = (index) => {
    setPdfs((prevPdfs) => {
      const updatedPdfs = [...prevPdfs];
      updatedPdfs.splice(index, 1);
      return updatedPdfs;
    });

    setUploadedFileNames((prevNames) => {
      const updatedNames = [...prevNames];
      updatedNames.splice(index, 1);
      return updatedNames;
    });

    setUploadedFiles((prevUploadedFiles) => {
      const updatedUploadedFiles = [...prevUploadedFiles];
      updatedUploadedFiles.splice(index, 1);
      return updatedUploadedFiles;
    });

    setCompletedURL(null);
  };

  const handleViewPDF = (index) => {
    setSelectedPdfIndex(index);
    setCurrentPage(1);

    setTimeout(() => {
      const modal = new window.bootstrap.Modal(
        document.getElementById("exampleModal")
      );
      modal.show();
    }, 0);
  };

  const handleMerge = async () => {
    setLoading2(true);
    // CALL API: /merge-pdf
    console.log("Calling /merge-pdf");

    const apiURL = "https://pdfapi-zdtz.onrender.com";

    // load all files in formData object
    const form = new FormData();
    for (const file of uploadedFiles) {
      form.append("files", file);
    }
    
    // make api call
    let finishedURL = await fetch(apiURL + "/merge-pdf", {
      method: "POST",
      body: form,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
      });

    // complete merge
    setCompletedURL(finishedURL);
    setLoading2(false);
    setMergeComplete(true);
  };

  useEffect(() => {
    if (mergeComplete) {
      navigate("/merged_pdf", { state: { downloadURL: completedURL } });
    }
  });

  const nextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <div className="drop-wrapper">
        {errorMessage.formatError && (
          <div className="error">{errorMessage.formatError}</div>
        )}

        {errorMessage.sizeError && (
          <div className="error">{errorMessage.sizeError}</div>
        )}
        <div className="dropzone">
          {loading ? (
            <div className="loading text-white d-flex">
              Uploading <div className="spinner-border  ms-4"></div>
            </div>
          ) : (
            <div className="content">
              {pdfs.length > 0 ? (
                <div className="pdf-preview" style={{ overflow: "scroll" }}>
                  {pdfs.map((pdf, index) => (
                    <div
                      key={index}
                      style={{ color: "black", margin: "0 10px" }}
                    >
                      <Document file={pdf}>
                        <Page
                          pageNumber={1}
                          width={60}
                          renderTextLayer={false}
                          renderAnnotationLayer={false}
                        />
                      </Document>
                      <p className="uploadedFileName d-sm-none-name">
                        {uploadedFileNames[index]}
                      </p>
                      <div className="d-flex">
                        <button
                          onClick={() => handleViewPDF(index)}
                          data-bs-target="#exampleModal"
                          data-bs-backdrop="static"
                          className="pdf-btn"
                        >
                          <i className="fa-solid fa-magnifying-glass-plus me-2"></i>
                        </button>
                        <button
                          onClick={() => handleDeleteFile(index)}
                          className="pdf-btn"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="uploaded-buttons">
                    {loading2 ? (
                      <div className="loading-div">
                        <div className="loading loading-div d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100">
                          Merging PDFs{" "}
                          <div className="spinner-border ms-4"></div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <button onClick={handleDeleteAll}>
                          <i className="fa-solid fa-trash me-2"></i>Delete All
                        </button>
                        <button onClick={handleDeleteAll}>
                          <i className="fa-solid fa-upload me-2"></i>Upload
                          again
                        </button>
                        <button onClick={handleMerge}>
                          Merge PDFs{" "}
                          <i className="fa-solid fa-arrow-right ms-2"></i>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div {...getRootProps()} className="upload">
                  <input {...getInputProps()} />
                  <div className="upload-button">
                    <button className="btn btn-drop">Choose File</button>
                  </div>
                  <p className="text-center">
                    OR <br /> drop PDFs here
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {/* Drop buttons for small devices */}
      <div className="uploaded-buttons d-none d-sm-content">
        <div className="btn-group dropdown">
          <button
            type="button"
            className="btn dropdown-toggle text-white"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Options
          </button>
          <ul className="dropdown-menu dropdown-menu-drop">
            <li>
              <button
                className="dropdown-item dropdown-item-drop"
                onClick={handleUploadAgain}
              >
                <i className="fa-solid fa-upload me-2"></i>Upload again
              </button>
            </li>
            <li>
              <button
                className="dropdown-item dropdown-item-drop"
                onClick={handleDeleteAll}
              >
                <i className="fa-solid fa-trash me-2"></i>Delete All
              </button>
            </li>
            <li>
              <button className="dropdown-item dropdown-item-drop">
                Merge<i className="fa-solid fa-arrow-right ms-2"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <>
        {/* Modal */}
        {selectedPdfIndex !== null && (
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
              style={{ maxWidth: "fit-content", backgroundColor: "tranparent" }}
              data-bs-config={{ backdrop: "true" }}
            >
              <div
                className="modal-content"
                style={{
                  backgroundColor: "transparent",
                  borderRadius: "0",
                  border: "none",
                }}
              >
                <div className="modal-body py-0 my-0">
                  <div
                    className="pdf-modal-preview"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "0",
                    }}
                  >
                    <Document
                      file={pdfs[selectedPdfIndex]}
                      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                    >
                      <Page
                        pageNumber={currentPage}
                        width={
                          window.innerWidth > 768 ? null : window.innerWidth
                        }
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </Document>
                  </div>
                </div>
                <div className="modal-footer border-0 d-flex justify-content-center align-items-center mb-0 pb-0">
                  <span className="pdf-next-pre">
                    <button
                      type="button"
                      className="btn"
                      onClick={previousPage}
                      disabled={currentPage === 1}
                    >
                      <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button
                      type="button"
                      className="btn"
                      onClick={nextPage}
                      disabled={currentPage === numPages}
                    >
                      <i className="fa-solid fa-chevron-right"></i>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default MergDrop;
