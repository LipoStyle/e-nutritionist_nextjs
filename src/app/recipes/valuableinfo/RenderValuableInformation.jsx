'use client';

import React from 'react';
import './RenderValuableInformation.css';

import timeIcon from '../../../../public/images/recipesimages/time.svg';
import bowlIcon from '../../../../public/images/recipesimages/bown.svg';
import cookIcon from '../../../../public/images/recipesimages/cook.svg';

const RenderValuableInformation = ({ valuableInfo }) => {
  return (
    <div className="valuable-info-placeholder">
      <div className="info-pair">
        <img src={timeIcon.src} alt="Duration" />
        <p className="duration">
          {valuableInfo?.duration || '—'}
        </p>
      </div>
      <div className="info-pair">
        <img src={cookIcon.src} alt="Difficulty" />
        <p className="difficulty">
          {valuableInfo?.difficulty || '—'}
        </p>
      </div>
      <div className="info-pair">
        <img src={bowlIcon.src} alt="Portions" />
        <p className="quantity">
          {valuableInfo?.portions || '—'}
        </p>
      </div>
    </div>
  );
};

export default RenderValuableInformation;
