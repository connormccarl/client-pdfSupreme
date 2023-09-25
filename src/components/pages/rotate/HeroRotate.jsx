import React from 'react';

const HeroRotate = (props) => {
    const { heading, sub_heading } = props;
    return (
        <section className="hero-wrap hero-wrap-2">
            <div className="overlay" />
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-9 pt-5 text-center">
                        <div className="d-flex align-items-center justify-content-center">
                            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z"
                                />
                                <path
                                    d="M16.5 27C21.4706 27 25.5 22.7862 25.5 17.5882C25.5 15.0231 24.5187 12.6976 22.9273 11"
                                    stroke="white"
                                    strokeWidth="0.5"
                                    strokeDasharray="2 1"
                                />
                                <path
                                    d="M16.5 27C10.9772 27 6.5 22.7467 6.5 17.5C6.5 12.2533 10.9772 8 16.5 8"
                                    stroke="white"
                                />
                                <path d="M16 5L19 8L16 11V5Z" fill="white" />
                            </svg>
                            <h2 className="mb-0 bread">{heading}</h2>
                        </div>
                        <p className="breadcrumbs ms-4">
                            {sub_heading}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroRotate