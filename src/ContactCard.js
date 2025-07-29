import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './ContactCard.css';

const ContactCard = ({imgSrc, title, desc, link}) => {

    function openLink(param) {
        if (param !== false) window.location.href = param;
    }

    return (
        <div onClick={() => openLink(link)} className="contact-card">
            

            <div id={title} className="card" style={{ cursor: link !== false ? 'pointer' : 'default' }}>
                <>
                <img
                    alt={title + " icon"}
                    src={imgSrc}
                        className="card-img-top contactIcon"
                />
                </>
                 <div className="custom-card-body card-body">
                    <div className="contact-title card-title project-card-title-new">{title}</div>
                    <p className={title === "Email" || title === "MS Teams" ? "shrink-email contact-text card-text" : "contact-text card-text"}>
                        {title === "Email" || title === "MS Teams" ? <>andras.bene1980<wbr></wbr>@gmail.com</> : desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;