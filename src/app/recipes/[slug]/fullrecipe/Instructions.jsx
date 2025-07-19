'use client';

import React, { useState } from 'react';

const Instructions = ({ instructions }) => {
  const [checkedSteps, setCheckedSteps] = useState([]);

  const handleClick = (index) => {
    setCheckedSteps((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="instructions-container">
      <h2>Instructions</h2>

      <ul className="instructions">
        {instructions.map((instruction, index) => (
          <li key={index} className="instruction-item">
            <div
              className="instruction-checkbox"
              onClick={() => handleClick(index)}
            >
              <div
                className={`checkbox-square ${
                  checkedSteps.includes(index) ? 'checked' : ''
                }`}
              />
            </div>

            <div className="instruction-text">
              <strong>Step {instruction.stepNumber} ➝ </strong>
              {instruction.stepContent}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Instructions;
