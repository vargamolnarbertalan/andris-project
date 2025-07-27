import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Navbar.css';

const Navbar = () =>{
    window.onscroll = function () { scrollUpdate() };

    function scrollUpdate() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        //console.log(scrolled)
        document.getElementById("myBar").style.width = scrolled + "%";
        if (scrolled === 0) {
            setIsVisible(false);
        }
        else{
            setIsVisible(true);
        }
    }

    const [isVisible, setIsVisible] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className={isVisible ? 'top-box9 container-fluid' : 'top-box4 container-fluid'}>
                
                <a className="navbar-brand" href="#">
                    vmb.codes
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
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#introSection">
                                Bemutatkozás
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#refSection">
                                Referenciák
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tvSection">
                                Közvetítés
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contactSection">
                                Kapcsolat
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={isVisible ? 'visible progress-container' : 'hidden progress-container'}>
                <div className="progress-bar" id="myBar"></div>
            </div>
        </nav>
    )
}

export default Navbar;