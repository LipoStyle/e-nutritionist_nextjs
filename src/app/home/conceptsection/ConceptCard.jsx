'use client';

import React from 'react';
import Image from 'next/image';
import './ConceptCard.css';

const ConceptCard = ({ title, description, image }) => (
  <div className="concept-slide">
    <div className="concept-card">
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="concept-image"
      />
      <h3 className="concept-title">{title}</h3>
      <p className="concept-description">{description}</p>
    </div>
  </div>
);

export default ConceptCard;
