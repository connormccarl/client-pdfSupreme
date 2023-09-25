import React from 'react';

const HeroUnlock = (props) => {
    const { heading_unlock, sub_heading_unlock } = props;
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
                                <rect x="7.5" y="14.5" width={13} height={10} stroke="white" />
                                <path
                                    d="M24.5 12C24.5 9.51472 22.4853 7.5 20 7.5C17.5147 7.5 15.5 9.51472 15.5 12"
                                    stroke="white"
                                />
                                <path d="M15.5 12V14.5" stroke="white" />
                                <path d="M24.5 12V14" stroke="white" />
                            </svg>
                            <h2 className="mb-0 bread">{heading_unlock}</h2>
                        </div>
                        <p className="breadcrumbs ms-4">
                            {sub_heading_unlock}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroUnlock