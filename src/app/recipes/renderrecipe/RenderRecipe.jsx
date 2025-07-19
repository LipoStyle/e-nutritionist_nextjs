'use client';

import React from 'react';
import './RenderRecipe.css';
import RenderValuableInformation from '../valuableinfo/RenderValuableInformation';

const RenderRecipe = ({ recipe }) => {
  const { title, description, imageUrl, valuableInfo } = recipe;

  return (
    <div className="recipe-container">
      {/* Image */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="recipe-image"
          loading="lazy"
        />
      )}

      {/* Title */}
      <h2 className="recipe-title">{title}</h2>

      {/* Description */}
      <p className="recipe-description">
        {description?.slice(0, 100)}...
      </p>

      {/* Valuable Info */}
      <RenderValuableInformation valuableInfo={valuableInfo} />
    </div>
  );
};

export default RenderRecipe;
