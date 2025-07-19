'use client';

import React, { useState } from 'react';

const Ingredients = ({ ingredients }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleClick = (index) => {
    setCheckedItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="ingredients-container">
      <h2>Ingredients</h2>

      <div className="ingredients-tip-section">
        <p className="tip-label">TIP</p>
        <p className="tip-description">
          Check off the ingredients you have used in the recipe, or mark the ones you already have and add the rest to your shopping list by clicking the button below.
        </p>
      </div>

      <ul className="ingredients-list">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="ingredient-item">
            <div
              className="ingredient-checkbox"
              onClick={() => handleClick(index)}
            >
              <div
                className={`checkbox-square ${
                  checkedItems.includes(index) ? 'checked' : ''
                }`}
              />
            </div>

            <div className="ingredient-text">
              <strong>
                {ingredient.quantity} {ingredient.size}
              </strong>{' '}
              {ingredient.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
