import React from 'react'

const HeroMerg = () => {
    return (
        <section className="hero-wrap hero-wrap-2">
            <div className="overlay" />
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-9 pt-5 text-center">
                        <div className="d-flex align-items-center justify-content-center">
                            <svg className=""
                                viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z"
                                    fill=""
                                />
                                <path d="M13 21H8V7H19V11" stroke="white" />
                                <rect x="13.5" y="11.5" width={11} height={13} stroke="white" />
                                <path d="M19 15V21" stroke="white" />
                                <path d="M16 18H22" stroke="white" />
                            </svg>
                            <h2 className="mb-0 bread">Merge PDF</h2>
                        </div>
                        <p className="breadcrumbs ms-2">
                            The easiest way to combine PDF Files
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroMerg