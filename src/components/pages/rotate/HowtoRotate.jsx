import React from "react";

const HowtoRotate = () => {
    return (
        <>
            <section className="py-5">
                <div className="container-xl how-to">
                    <div className="row g-xl-5 py-5">
                        <div
                            className="col-md-6 d-flex justify-content-center align-items-center"              
                        >
                            <img
                                src="https://s.smallpdf.com/static/cms/f/102628/300x180/7224b8be83/186604ddfd2697e3bce2.svg"
                                className="img-fluid mb-sm-3"
                                alt=""
                            />
                        </div>
                        <div className="col-md-6 heading-section">
                            <div>
                                <h4 className="ms-3">How to rotate a PDF file online:</h4>
                                <p style={{ lineHeight: "40px" }}>
                                    <ol>
                                        <li>Drag and drop your PDF into the toolbox.</li>
                                        <li>
                                            Rotate specific pages or all pages at once.
                                        </li>
                                        <li>You can also add more files, delete or rearrange pages within this tool.</li>
                                        <li>
                                            Once finished, click 'Apply Changes' and download your PDF.
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

export default HowtoRotate;
