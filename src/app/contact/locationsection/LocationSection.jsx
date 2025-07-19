'use client';
import React from 'react';
import './LocationSection.css';
import { usePathname } from 'next/navigation';
import translations from './translations';
import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons';

const LocationSection = () => {
  const pathname = usePathname();
  const lang = pathname.split('/')[1] || 'en';
  const t = translations[lang] || translations['en']; // Fallback to 'en' if undefined

  return (
    <div className="location-section-container">
      <div className="location-section">
        <h3>{t.locationTitle}</h3>
        <p>{t.locationDescription}</p>
        <div className="google-maps-wrapper">
          <iframe
            title="Location Map"
            src={t.mapEmbedUrl}
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            style={{ border: 'none', borderRadius: '10px' }}
          ></iframe>
        </div>

        <h3>{t.socialTitle}</h3>
        <section className="social-media-icons">
          <SocialMediaIcons />
        </section>
      </div>
    </div>
  );
};

export default LocationSection;
