'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import PageHero from '../components/shared/Hero/Hero';
import RenderRecipe from './renderrecipe/RenderRecipe';
import './RecipesPage.css'; // Uses your improved responsive and animated layout

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { selectedLanguage } = useLanguage();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        setError('');
        const res = await fetch(`/api/recipes?language=${selectedLanguage}`);
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        const data = await res.json();
        setRecipes(data);
      } catch (err) {
        console.error('❌ Fetch error:', err);
        setError('❌ Unable to load recipes. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [selectedLanguage]);

  return (
    <div className="recipes-container">
      <PageHero
        backgroundImage="/heroimages/recipes-hero.jpg"
        description="Explore a variety of easy, balanced, and goal-oriented recipes designed to fuel your body and satisfy your taste buds. Whether you're eating for performance, weight management, or simply wellness, you'll find meals that are as nourishing as they are delicious."
      />

      <div className="container-of-recipes">
        {loading ? (
          <p className="loading">Loading recipes...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <Link
              key={recipe.slug}
              href={`/recipes/${recipe.slug}`}
              className="recipe-link"
            >
              <div className="fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <RenderRecipe recipe={recipe} />
              </div>
            </Link>
          ))
        ) : (
          <p className="no-recipes">No recipes available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default RecipesPage;
