import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Navbar.css';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LangSwitcher from "./LangSwitcher";

const Navbar = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Function to close navbar on mobile when link is clicked
    const closeNavbar = () => {
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            // Simply remove the 'show' class to close the navbar
            navbarCollapse.classList.remove('show');
        }
    };

    // Function to handle section navigation
    const handleSectionClick = (e, sectionId) => {
        e.preventDefault();
        closeNavbar();
        
        // If we're already on the home page, scroll to section
        if (location.pathname === '/') {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Navigate to home page with hash
            navigate('/');
            // Set hash after a brief delay to ensure navigation completes
            setTimeout(() => {
                window.location.hash = sectionId;
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    window.onscroll = function () {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
        setIsVisible(scrolled > 0);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <div className={isVisible ? 'top-box9 container-fluid' : 'top-box4 container-fluid'}>
                <Link className="mynavbar-brand navbar-brand" to="/">
                    <img id="navLogo" className="navImage" src="/img/mainlogo.jpg" alt='logo'></img>
                </Link>
                {/* Right side container for hamburger menu and language switcher (mobile only) */}
                <div className="d-flex flex-row align-items-center gap-2 d-lg-none">
                    {/* Language switcher - visible on mobile only */}
                    <LangSwitcher />
                    
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="mynavbar-text nav-link" href="#aboutSection" onClick={(e) => handleSectionClick(e, 'aboutSection')}>{t('about')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="mynavbar-text nav-link" href="#missionSection" onClick={(e) => handleSectionClick(e, 'missionSection')}>{t('mission')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="mynavbar-text nav-link" href="#mediaSection" onClick={(e) => handleSectionClick(e, 'mediaSection')}>{t('media')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="mynavbar-text nav-link" href="#servicesSection" onClick={(e) => handleSectionClick(e, 'servicesSection')}>{t('services')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="mynavbar-text nav-link" href="#connectSection" onClick={(e) => handleSectionClick(e, 'connectSection')}>{t('connect')}</a>
                        </li>
                        <li className="nav-item">
                            <Link className="mynavbar-text nav-link" to="/blog" onClick={closeNavbar}>{t('blog')}</Link>
                        </li>
                    </ul>

                    {/* Language switcher - visible on desktop only, positioned on far right */}
                    <div className="d-none d-lg-flex align-items-center">
                        <LangSwitcher />
                    </div>
                </div>
            </div>

            <div className={isVisible ? 'visible progress-container' : 'hidden progress-container'}>
                <div className="progress-bar" id="myBar"></div>
            </div>
        </nav>
    );
};

export default Navbar;
