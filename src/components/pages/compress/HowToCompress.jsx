import React from "react";

const HowToCompress = () => {
    return (
        <>
            <section className="py-5" style={{ marginTop: "100px" }}>
                <div className="container-xl" style={{ backgroundColor: "#f2f6ff" }}>
                    <div className="row g-xl-5 align-items-center">
                        <div
                            className="col-md-6"
                        >
                            <img
                                src="https://s.smallpdf.com/static/cms/f/102628/x/3153718e1e/220902_howtopdfie.svg"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div
                            className="col-md-6 heading-section"
                        >
                            <div>
                                <h4 className="ms-3">How To Compress PDF Online for Free</h4>
                                <p style={{ lineHeight: "40px" }}>
                                    <ol>
                                        <li>Upload your file by dropping it onto this page</li>
                                        <li>
                                            Select your desired compression level
                                        </li>
                                        <li>Continue to edit the PDF with our other tools if needed</li>
                                        <li>
                                            Click “Download” to save your compressed PDF
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

export default HowToCompress;
