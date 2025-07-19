'use client';

import React from 'react';
import PageHero from '../../../components/shared/Hero/Hero';
import RenderValuableInformation from '../RenderValuableInformation';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import NutritionalFacts from './NutritionalFacts';
import './FullRecipe.css';

const FullRecipe = ({ recipe }) => {
  const {
    title,
    imageUrl,
    description,
    ingredients,
    instructions,
    nutritionalFacts,
    valuableInfo,
  } = recipe;
  return (
    <div className="full-recipe-container">
      <PageHero title={title} backgroundImage={imageUrl} />

      <div className="recipe-info-container">
        <RenderValuableInformation valuableInfo={valuableInfo} />

        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="recipe-image-preview"
            loading="lazy"
          />
        )}

        <p className="description-of-recipe">{description}</p>

        <div className="steps-ingredients-container">
          <Ingredients ingredients={ingredients} />
          <Instructions instructions={instructions} />
        </div>

        <NutritionalFacts nutritionalFacts={nutritionalFacts} />
      </div>
    </div>
  );
};

export default FullRecipe;
