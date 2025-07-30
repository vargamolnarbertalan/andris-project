import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MyForm.css';
import emailjs from '@emailjs/browser';


export default function ContactForm() {
    const { t } = useTranslation();

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        const form = e.target;
        e.preventDefault();

        emailjs.send('service_481ylkv', 'template_jbgg7i5', {
            erdeklodo_nev: form.name.value,
            erdeklodo_email: form.emailOrPhone.value,
            erdeklodo_uzenet: form.message.value,
        }, 'UZ2dqjLckiWjIBG_3');

        setSubmitted(true);
    };

    return (
        <div className="contact-form-container">
            <p id='connectTextP' className="lead-intro intro lead mobileJustify center-title">
                {t('connectText')}
            </p>
            {submitted ? (
                <p id="success-msg">{t('fSuccessMsg')}</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                                placeholder={t('fName')}
                            type="text"
                            name="name"
                            id="name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            placeholder={t('fEmailPhone')}
                            type="text"
                            name="emailOrPhone"
                            id="emailOrPhone"
                            required
                        />
                    </div>

                    <div className="form-group">
                            
                        <textarea
                            placeholder={t('fMsg')}
                            name="message"
                            id="message"
                            rows="4"
                            required
                        />
                    </div>

                        <button id="submitBtn" type="submit">{t('fSubmit')}</button>
                </form>
            )}
        </div>
    );
}