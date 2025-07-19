'use client';

import React from 'react';
import Image from 'next/image';
import './AboutSection.css';
import { useLanguage } from '../../../context/LanguageContext';
import translations from './translations';

const AboutSection = () => {
  const { selectedLanguage } = useLanguage();
  const content = translations[selectedLanguage] || translations.en;

  return (
    <section className="about-intro">
      <div className="about-image">
        <Image
          src="/aboutimages/imageOfMe.png"
          alt="Portrait of Thymios Arvanitis"
          width={400}
          height={400}
          className="portrait-image"
        />
      </div>
      <div className="about-text">
        <h2>{content.name}</h2>
        <p>{content.intro}</p>
        <h3>{content.specialtiesTitle}</h3>
        <ul className="about-specialties">
          {content.specialties.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
