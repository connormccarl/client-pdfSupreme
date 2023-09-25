import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../pages/dist/images/logo.png';

const Navbar = () => {
    const location = useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            const scrolled = window.scrollY > 0;

            if (scrolled) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDropdownItemClick = () => {
        setIsDropdownOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg  ftco-navbar-light">
            <div className="container-xl">
                <Link className="navbar-brand" to="/">
                    <img src={logo} style={{ width: '60px' }} alt="" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={handleDropdownToggle}
                >
                    <span className="fa fa-bars" /> Menu
                </button>
                <div
                    className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`}
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                to="/"
                                onClick={handleDropdownItemClick}
                            >
                                Home
                            </Link>
                        </li>
                        <li class="nav-item dropdown" >
                            <a class="nav-link b-none dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Tools
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <Link
                                        className={`dropdown-item ${location.pathname === '/reverse' ? 'active' : ''}`}
                                        to="/reverse"
                                        onClick={handleDropdownItemClick}
                                    >
                                        Reverse
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`dropdown-item ${location.pathname === '/delete' ? 'active' : ''}`}
                                        to="/delete"
                                        onClick={handleDropdownItemClick}
                                    >
                                        Delete
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`dropdown-item ${location.pathname === '/extract' ? 'active' : ''}`}
                                        to="/extract"
                                        onClick={handleDropdownItemClick}
                                    >
                                        Extract
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`dropdown-item ${location.pathname === '/jpg_to_pdf' ? 'active' : ''}`}
                                        to="/jpg_to_pdf"
                                        onClick={handleDropdownItemClick}
                                    >
                                        Jpg - Pdf
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`dropdown-item ${location.pathname === '/pdf_to_jpg' ? 'active' : ''}`}
                                        to="/pdf_to_jpg"
                                        onClick={handleDropdownItemClick}
                                    >
                                        Pdf - Jpg
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`dropdown-item ${location.pathname === '/page_number' ? 'active' : ''}`}
                                        to="/page_number"
                                        onClick={handleDropdownItemClick}
                                    >
                                        Page Number - Pdf
                                    </Link>
                                </li>
                            </ul>
                        </li>  
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === '/merge' ? 'active' : ''}`}
                                to="/merge"
                                onClick={handleDropdownItemClick}
                            >
                                Merge
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === '/compress' ? 'active' : ''}`}
                                to="/compress"
                                onClick={handleDropdownItemClick}
                            >
                                Compress
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === '/Rotate' ? 'active' : ''}`}
                                to="/Rotate"
                                onClick={handleDropdownItemClick}
                            >
                                Rotate
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === '/unlock' ? 'active' : ''}`}
                                to="/unlock"
                                onClick={handleDropdownItemClick}
                            >
                                Unlock
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === '/protect' ? 'active' : ''}`}
                                to="/protect"
                                onClick={handleDropdownItemClick}
                            >
                                Protect
                            </Link>
                        </li>                                                              
                        <li className="nav-item ms-2">
                            <Link to="/"
                                className="btn bg-white mt-2 nav-btn"
                                onClick={handleDropdownItemClick}
                            >
                                <span>Free Trial</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar