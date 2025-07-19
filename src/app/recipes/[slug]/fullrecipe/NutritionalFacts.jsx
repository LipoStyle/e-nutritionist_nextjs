'use client';

import React from 'react';
import PropTypes from 'prop-types';

// Reference values for vitamins, minerals, macros, etc.
const FIXED_DAILY_VALUES = {
  'Vitamin A': 800,
  'Vitamin D': 5,
  'Vitamin E': 12,
  'Vitamin K': 75,
  'Vitamin C': 80,
  'Thiamin (B1)': 1.1,
  'Riboflavin (B2)': 1.4,
  'Niacin (B3)': 16,
  'Vitamin B6': 1.4,
  'Folic acid (B9)': 200,
  'Vitamin B12': 2.5,
  'Biotin (B7)': 50,
  'Pantothenic acid (B5)': 6,
  'Potassium': 2000,
  'Chloride': 800,
  'Calcium': 800,
  'Phosphorus': 700,
  'Magnesium': 375,
  'Iron': 14,
  'Zinc': 10,
  'Copper': 1,
  'Manganese': 2,
  'Fluoride': 3.5,
  'Selenium': 55,
  'Chromium': 40,
  'Molybdenum': 50,
  'Iodine': 150,
  'Saturated Fat': 20,
  'Saturates': 20,
};

// UI translations
const UI_LABELS = {
  en: {
    header: 'Nutritional Facts per portion',
    ofDV: 'of daily recommended value',
    noDV: '(No NRV available)',
  },
  es: {
    header: 'Información nutricional por ración',
    ofDV: 'del valor diario recomendado',
    noDV: '(sin VRN disponible)',
  },
  el: {
    header: 'Διατροφικές πληροφορίες ανά μερίδα',
    ofDV: 'της ημερήσιας συνιστώμενης πρόσληψης',
    noDV: '(χωρίς διαθέσιμο ΣΗΠ)',
  },
};

const tFactory = (locale) => (key) => UI_LABELS[locale]?.[key] ?? UI_LABELS.en[key] ?? key;

const NutritionalFacts = ({ nutritionalFacts, calories = 2000, locale = 'en' }) => {
  if (!Array.isArray(nutritionalFacts) || nutritionalFacts.length === 0) {
    return <p>No nutritional facts available.</p>;
  }

  const macroDVs = {
    Protein: (0.15 * calories) / 4,
    Fat: (0.30 * calories) / 9,
    Carbs: (0.55 * calories) / 4,
    Fiber: (calories / 1000) * 14,
  };

  const getDailyValue = (name) => macroDVs[name] ?? FIXED_DAILY_VALUES[name] ?? null;
  const t = tFactory(locale);

  return (
    <div className="nutritional-facts">
      <h2>{t('header')}</h2>
      <ul className="nutritional-facts-items">
        {nutritionalFacts.map(({ name, quantity, size }, index) => {
          const dv = getDailyValue(name);
          const percent = dv ? ((parseFloat(quantity) / dv) * 100).toFixed(1) : null;

          return (
            <li key={index} className="nutritional-facts-item">
              <div>
                <strong>{t(name)}</strong>
                <div className="quantity">
                  {quantity} {size}
                </div>
              </div>

              <div className="separator-line" />

              {percent ? (
                <span className="daily-value">
                  {percent}% {t('ofDV')}
                </span>
              ) : (
                <span className="daily-value">{t('noDV')}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

NutritionalFacts.propTypes = {
  nutritionalFacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      size: PropTypes.string,
    })
  ).isRequired,
  calories: PropTypes.number,
  locale: PropTypes.oneOf(['en', 'es', 'el']),
};

export default NutritionalFacts;
