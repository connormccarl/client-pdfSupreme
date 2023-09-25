import React from "react";

const HowtoProtect = () => {
    return (
        <>
            <section className="py-5">
                <div className="container-xl">
                    <div className="row g-xl-5 py-5">
                        <div
                            className="col-md-6 d-flex justify-content-center align-items-center"
                        >
                            <img
                                src="https://s.smallpdf.com/static/cms/f/102628/300x180/3865649eef/8bfe6e572c81ad5bdc63.svg"
                                className="img-fluid mb-sm-3"
                                alt=""
                            />
                        </div>
                        <div
                            className="col-md-6 heading-section"
                        >
                            <div>
                                <h4 className="ms-3">How to password protect a PDF document</h4>
                                <p style={{ lineHeight: "40px" }}>
                                    <ol>
                                        <li>Drag and drop your PDF to the toolbox above.</li>
                                        <li>
                                            Enter the password you'd like to set.
                                        </li>
                                        <li>Click 'Encrypt PDF' to add the password to the PDF.</li>
                                        <li>
                                            Download your encrypted PDF file!
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

export default HowtoProtect;
