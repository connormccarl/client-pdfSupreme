import React from 'react';
import compressIcon from '../dist/images/compressSvg.svg'

const HeroCompress = () => {
    return (
        <section className="hero-wrap hero-wrap-2">
            <div className="overlay" />
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-9 pt-5 text-center">
                        <div className="d-flex align-items-center justify-content-center">
                            <img src={compressIcon} className='me-2' alt="" width={33} />
                            <h2 className="mb-0 bread">Compress PDF</h2>
                        </div>
                        <p className="breadcrumbs">
                            The easiest way to compress PDF Files
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroCompress