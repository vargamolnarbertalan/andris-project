import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MyForm.css';

export default function ContactForm() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        emailOrPhone: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace this with your email sending logic (e.g. EmailJS)
        console.log('Form submitted:', formData);

        setSubmitted(true);
    };

    return (
        <div className="contact-form-container">
            <p id='connectTextP' className="lead-intro intro lead mobileJustify center-title">
                {t('connectText')}
            </p>
            {submitted ? (
                <p>{t('fSuccessMsg')}</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                                placeholder={t('fName')}
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            placeholder={t('fEmailPhone')}
                            type="text"
                            name="emailOrPhone"
                            id="emailOrPhone"
                            required
                            value={formData.emailOrPhone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                            
                        <textarea
                            placeholder={t('fMsg')}
                            name="message"
                            id="message"
                            rows="4"
                            required
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>

                        <button id="submitBtn" type="submit">{t('fSubmit')}</button>
                </form>
            )}
        </div>
    );
}