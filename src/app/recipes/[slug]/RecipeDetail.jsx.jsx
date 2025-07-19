// app/recipes/[slug]/RecipeDetail.jsx
import React from 'react';
import './page.css';

const RecipeDetail = ({ recipe }) => {
  return (
    <div className="recipe-detail-container">
      <h1 className="recipe-title">{recipe.title}</h1>
      <img src={recipe.imageUrl} alt={recipe.title} className="recipe-hero" />

      <section className="recipe-section">
        <h2>Description</h2>
        <p>{recipe.description}</p>
      </section>

      <section className="recipe-section">
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ing) => (
            <li key={ing.id}>
              {ing.quantity} {ing.size} {ing.name}
            </li>
          ))}
        </ul>
      </section>

      <section className="recipe-section">
        <h2>Instructions</h2>
        <ol>
          {recipe.instructions.map((step) => (
            <li key={step.id}>{step.stepContent}</li>
          ))}
        </ol>
      </section>

      {recipe.valuableInfo && (
        <section className="recipe-section">
          <h2>Preparation Info</h2>
          <p><strong>Duration:</strong> {recipe.valuableInfo.duration} min</p>
          <p><strong>Difficulty:</strong> {recipe.valuableInfo.difficulty}</p>
          <p><strong>Portions:</strong> {recipe.valuableInfo.portions}</p>
        </section>
      )}

      {recipe.nutritionalFacts?.length > 0 && (
        <section className="recipe-section">
          <h2>Nutritional Facts</h2>
          <ul>
            {recipe.nutritionalFacts.map((fact) => (
              <li key={fact.id}>
                {fact.name}: {fact.quantity} {fact.size}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default RecipeDetail;
