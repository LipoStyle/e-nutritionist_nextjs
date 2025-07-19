'use client';
import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import content from './translations';
import './AboutCTA.css';
import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons';

const AboutCTA = () => {
  const { selectedLanguage } = useLanguage();
  const data = content[selectedLanguage] || content.en;

  return (
    <section className="about-cta">
      <h2>{data.title}</h2>
      <div className="cta-buttons">
        <a className="cta-button" href="/contact">{data.contactButton}</a>
        <p>{data.followText}</p>
        <a className="cta-button" href="/book-consultation">{data.bookingButton}</a>
      </div>
      <div className="social-icons-container">
       <SocialMediaIcons />
      </div>
    </section>
  );
};

export default AboutCTA;
