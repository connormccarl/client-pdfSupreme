import React from "react";

const CombinePdf = () => {
  return (
    <>
      <section className="py-5">
        <div className="container-xl how-to">
          <div className="row g-xl-5 py-5">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img
                src="https://s.smallpdf.com/static/cms/f/102628/300x180/6c4790add5/c6837c9995f83effac8b.svg"
                className="img-fluid mb-sm-3"
                alt=""
              />
            </div>
            <div className="col-md-6 heading-section">
              <div>
                <h4 className="ms-3">How to combine PDF files online:</h4>
                <p style={{ lineHeight: "40px" }}>
                  <ol>
                    <li>Drag and drop your PDFs into the PDF combiner.</li>
                    <li>
                      Rearrange individual pages or entire files in the desired
                      order.
                    </li>
                    <li>Add more files, rotate or delete files, if needed.</li>
                    <li>Click ‘Merge PDF!’ to combine and download your PDF.</li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CombinePdf;
