import React, { useEffect } from 'react';
import downloadIcon from '../dist/images/icons/download.svg'
import gobackIcon from '../dist/images/icons/goback.svg'
import tickmarkIcon from '../dist/images/icons/tickmark.svg'
import deleteIcon from '../dist/images/icons/delete.svg'
import viewIcon from '../dist/images/icons/view.svg'
import { Link } from 'react-router-dom';

const DownloadProtect = () => {
    useEffect(() => {
        const tooltipTriggerList = [].slice.call(
            document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );

        const tooltipInstances = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new window.bootstrap.Tooltip(tooltipTriggerEl);
        });

        // Clean up tooltips when unmounting or leaving the component
        return () => {
            tooltipInstances.forEach(tooltipInstance => {
                tooltipInstance.dispose();
            });
        };
    }, []);
    return (
        <>
            <section className="hero-wrap hero-wrap-2">
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 pt-5 text-center">
                            <div className="d-flex align-items-center justify-content-center">
                                <img className='me-2' src={tickmarkIcon} alt="" width={37} />
                                <h2 className="mb-0 bread protect-h">Protected Successfuly</h2>
                            </div>
                            <p className="breadcrumbs ms-4">
                                Click on below button to download Protected PDF
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='download-box'>
                <div className="inner-box">
                    <div className='d-flex justify-contents-center align-items-center'>
                        <Link to='/protect'>
                            <button type="button" class="btn btn-sm me-3 back" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Back to Protect PDF">
                                <img src={gobackIcon} alt="" />
                            </button>
                        </Link>
                        <button type="button" class="btn downloader btn-lg">
                            <img src={downloadIcon} className='mb-1 me-1' width={22} alt="" />
                            Download Protected PDF
                        </button>
                    </div>
                </div>
                <div className="inner-box d-block ms-2">
                    <button type="button" class="btn back-icon btn-sm me-3 d-block" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View Protected PDF">
                        <img src={viewIcon} alt="" />
                    </button>
                    <Link to='/protect'>
                        <button type="button" class="btn back-icon btn-sm me-3 mt-2" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Delete it now">
                            <img src={deleteIcon} alt="" />
                        </button>
                    </Link>
                </div>
            </section>
        </>

    )
}

export default DownloadProtect;