'use client';

import React from 'react';
import './ContactSection.css';
import translations from './translations';
import { usePathname } from 'next/navigation';

const ContactSection = () => {
  const path = usePathname();
  const lang = path.includes('/es') ? 'es' : path.includes('/el') ? 'el' : 'en';
  const t = translations[lang];

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>{t.getInTouchTitle}</h2>
        <p>{t.getInTouchText}</p>
        <div className="contact-details">
          <div className="contact-item">
            <i className="fa fa-envelope icon"></i>
            <h4>{t.email}</h4>
          </div>
          <div className="contact-item">
            <i className="fab fa-whatsapp icon whatsapp"></i>
            <h4>{t.phone}</h4>
          </div>
          <div className="contact-item">
            <i className="fa fa-location-dot icon location"></i>
            <h4>{t.address}</h4>
          </div>
        </div>
      </div>

      <div className="contact-form-section">
        <form className="contact-form">
          <h2>{t.sendMessageTitle}</h2>
          <input type="text" name="name" placeholder={t.namePlaceholder} required />
          <input type="email" name="email" placeholder={t.emailPlaceholder} required />
          <textarea name="message" placeholder={t.messagePlaceholder} rows="5" required />
          <button type="submit" className="cta-button">{t.sendButton}</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
