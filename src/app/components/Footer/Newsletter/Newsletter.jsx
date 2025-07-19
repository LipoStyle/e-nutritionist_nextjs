'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../../../context/LanguageContext'; // ✅ Adjusted for Next.js
import './Newsletter.css';
import translations from './newsletterTranslations.json';

const Newsletter = () => {
  const { selectedLanguage } = useLanguage();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const newsletterRef = useRef(null);

  const t = translations[selectedLanguage] || translations['en'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (newsletterRef.current) {
      observer.observe(newsletterRef.current);
    }

    return () => {
      if (newsletterRef.current) {
        observer.unobserve(newsletterRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (email) {
      try {
        const response = await fetch('/api/v1/subscribers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ subscriber: { email } }),
        });

        const data = await response.json();

        if (response.ok) {
          setMessage(t.successMessage);
          setEmail('');
        } else {
          setMessage(data.error || t.errorMessage);
        }
      } catch (error) {
        setMessage(t.generalErrorMessage);
      }
    } else {
      setMessage(t.invalidEmailMessage);
    }
  };

  return (
    <div ref={newsletterRef} className="newsletter lazy-load">
      <h2 className="newsletter-title">{t.title}</h2>
      <p className="newsletter-description">{t.description}</p>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          placeholder={t.placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="newsletter-input"
          required
          aria-label="Email Address"
        />
        <button type="submit" className="newsletter-button" aria-label="Subscribe">
          {t.subscribeButton}
        </button>
      </form>
      {message && <p className="newsletter-message">{message}</p>}
    </div>
  );
};

export default Newsletter;
