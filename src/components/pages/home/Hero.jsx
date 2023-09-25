import React from 'react'

const Hero = () => {
    return (
        <section className="hero-wrap">
            <div className="overlay" />
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-between align-items-stretch">
                    <div className="col-md-6 col-lg-5 text d-flex align-items-center">
                        <div>
                            <h1 className="">We make PDF easy.</h1>
                            <p>
                                All the tools you’ll need to be more productive and work smarter with documents.
                            </p>
                            <p className="d-flex hero-buttons">
                                <a href="/#" className="btn btn-primary d-flex align-items-center">
                                    <span>Start Free Trial <i className="fa-solid fa-arrow-right-long ms-1"></i></span>
                                </a>
                                <a href="/#" className="btn btn-secondary">
                                    <span className="call">Explore All PDF Tools <i className="fa-solid fa-arrow-right-long ms-1"></i></span>
                                </a>
                            </p>
                            <ul className="ftco-social">
                                <li>
                                    <a href="/#">
                                        <span className="fa fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        <span className="fa fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        <span className="fa fa-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        <span className="fa fa-google-plus" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-7 svg d-sm-none d-flex align-items-center">
                        <img src="https://s.smallpdf.com/static/8c3b329d85ca37b6aad3.svg" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero