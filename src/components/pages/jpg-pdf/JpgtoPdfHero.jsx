import React from 'react';
import jpgIcon from '../dist/images/icons/jpg.svg'

const JpgtoPdfHero = (props) => {
    const { heading, subHeading } = props;
    return (
        <section className="hero-wrap hero-wrap-2">
            <div className="overlay" />
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-9 pt-5 text-center">
                        <div className="d-flex align-items-center justify-content-center">
                            <img className='me-2' src={jpgIcon} alt="" width={38} />
                            <h2 className="mb-0 bread protect-h">{heading}</h2>
                        </div>
                        <p className="breadcrumbs ms-4">
                            {subHeading}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JpgtoPdfHero;