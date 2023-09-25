import React from "react";

const HowtoUnlock = () => {
    return (
        <>
            <section className="py-5">
                <div className="container-xl">
                    <div className="row g-xl-5 py-5">
                        <div
                            className="col-md-6 d-flex justify-content-center align-items-center"
                        >
                            <img
                                src="https://s.smallpdf.com/static/cms/f/102628/300x180/eeec56b7db/02ac3c88aa3a073e9d47.svg"
                                className="img-fluid mb-sm-3"
                                alt=""
                            />
                        </div>
                        <div
                            className="col-md-6 heading-section"
                        >
                            <div>
                                <h4 className="ms-3">How to remove password from PDF files:</h4>
                                <p style={{ lineHeight: "40px" }}>
                                    <ol>
                                        <li>Drag and drop your PDF into the toolbox.</li>
                                        <li>Confirm that you have the right to the file and click ‘Unlock PDF!’.</li>
                                        <li>
                                            The decryption process should start right away.
                                        </li>
                                        <li>
                                            Modify your PDF further, or click ‘Download File’ to save the unlocked PDF.
                                        </li>
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

export default HowtoUnlock;
