import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import './Popup.css';

const Popup = ({ closeFunc, setAlertColor, setErrorOpen }) => {

    const emailRef = useRef();
    const nameRef = useRef();

    function clickedSubmit(event) {
        event.preventDefault();
        const email = emailRef.current.value;
        const name = nameRef.current.value;

        if (name === "") {
            setAlertColor('darkred')
            document.getElementById('alert-text').textContent = "Adja meg az ön vagy vállalkozásának nevét!"
            setErrorOpen(true)
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setAlertColor('darkred')
            document.getElementById('alert-text').textContent = "Adjon meg érvényes email címet!"
            setErrorOpen(true)
            return;
        }

        const templateParams = {
            erdeklodo_email: email,
            erdeklodo_nev: name
        };

        emailjs.send(
            'service_7l3wsqg',
            'template_66g2gcl',
            templateParams,
            'UZ2dqjLckiWjIBG_3'
        )
            .then((response) => {
                setAlertColor('darkgreen')
                document.getElementById('alert-text').textContent = "Adatok sikeresen elküldve."
                setErrorOpen(true)
                closeFunc()
            })
            .catch((error) => {
                setAlertColor('darkred')
                document.getElementById('alert-text').textContent = "Nem sikerült elküldeni az emailt. Nézze meg a konzolt hibaüzenetekért."
                setErrorOpen(true)
                console.error("EmailJS error:", error);
            });
    }



    return (
        <div className="popup-bg">
            <div className="popup-box">
                <div className="popup-x-row">
                    <div onClick={closeFunc} className="popup-x">X</div>
                </div>
                <div className="popup-content">
                    <div className="grad-text popup-title">A KÖVETKEZŐ 5 MEGRENDELŐNEK FÉLÁRON ADOM ÁT A MŰKÖDŐ TERMÉKET</div>

                    <form className="popup-form">
                        <div className="grad-text popup-description">Adja meg az e-mail címét most, hogy ne maradjon le az ünnepi akcióról!</div>
                        <div className="name-line input-group flex-nowrap">
                            <span className="symbol-width input-group-text" id="addon-wrapping">N</span>
                            <input
                                ref={nameRef}
                                type="text"
                                className="form-control"
                                placeholder="Név/Cég"
                                aria-label="Name"
                                aria-describedby="Az ön vagy vállalkozásának neve"
                            />
                        </div>
                        <div className="email-line input-group flex-nowrap">
                            <span className="symbol-width input-group-text" id="addon-wrapping">@</span>
                            <input
                                ref={emailRef}
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                aria-label="Email"
                                aria-describedby="Az ön email címe"
                            />
                        </div>

                        <input onClick={clickedSubmit} className="grad-btn btn btn-primary" type="submit" value="Küldés" />
                    </form>
                    <div className="popup-counter"></div>
                </div>
            </div>
        </div>
    );
}

export default Popup;
