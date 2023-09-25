import React from 'react';
import deleteIcon from '../dist/images/icons/delete.svg'

const HeroDelete = (props) => {
    const { heading, subHeading } = props;
    return (
        <section className="hero-wrap hero-wrap-2">
            <div className="overlay" />
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-9 pt-5 text-center">
                        <div className="d-flex align-items-center justify-content-center">
                            <img className='me-2 mb-2' src={deleteIcon} alt="" width={37} />
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

export default HeroDelete