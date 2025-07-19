'use client';

import React from 'react';
import Slider from 'react-slick';
import ConceptCard from './ConceptCard';
import conceptsData from './conceptsData';
import conceptSectionTranslations from './translations';
import { useLanguage } from '../../../context/LanguageContext';
import './ConceptsSection.css';

const ConceptsSection = () => {
  const { selectedLanguage } = useLanguage();
  const sectionTitle =
    conceptSectionTranslations[selectedLanguage]?.sectionTitle ||
    conceptSectionTranslations.en.sectionTitle;

  const data = conceptsData[selectedLanguage] || conceptsData.en;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="concepts-section">
      <h2 className="section-title fade-in-up">{sectionTitle}</h2>
      <div className="slider-container fade-in-up">
        <Slider {...sliderSettings} className="concepts-carousel">
          {data.map((concept, index) => (
            <ConceptCard
              key={index}
              title={concept.title}
              description={concept.description}
              image={concept.image}
            />
          ))}
        </Slider>

      </div>
    </section>
  );
};

export default ConceptsSection;
