import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Navbar.css';
import { useTranslation } from 'react-i18next';
import LangSwitcher from "./LangSwitcher";

const Navbar = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

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
                <a className="mynavbar-brand navbar-brand" href="#">
                    <img id="navLogo" className="navImage" src="/img/mainlogo.jpg" alt='logo'></img>
                </a>
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

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="mynavbar-text nav-link" href="#aboutSection">{t('about')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="mynavbar-text nav-link" href="#missionSection">{t('mission')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="mynavbar-text nav-link" href="#mediaSection">{t('media')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="mynavbar-text nav-link" href="#servicesSection">{t('services')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="mynavbar-text nav-link" href="#connectSection">{t('connect')}</a>
                        </li>
                    </ul>

                    {/* Insert LangSwitcher here, aligned right */}
                    <div className={'d-flex align-items-left'}>
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
