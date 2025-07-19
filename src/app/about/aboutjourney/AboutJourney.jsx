'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../../context/LanguageContext';
import journeyTranslations from './translations';
import './AboutJourney.css';

const AboutJourney = () => {
  const { selectedLanguage } = useLanguage();
  const content = journeyTranslations[selectedLanguage] || journeyTranslations.en;

  return (
    <section className="about-journey">
      {content.map((step, index) => (
        <div key={index} className="journey-step">
          <Image
            src={step.image}
            alt={step.alt}
            width={600}
            height={400}
            className="journey-image"
          />
          <div className="journey-text">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutJourney;
