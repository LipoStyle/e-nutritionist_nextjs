'use client';

import Link from "next/link";
import "./Hero.css";
import { useLanguage } from "../../../../context/LanguageContext";

const Hero = ({ backgroundImage = "/background.jpg", description, showCTA = true }) => {
  const { selectedLanguage } = useLanguage();

  const translations = {
    en: {
      ctaMessage: "Ready to take the next step?",
      ctaButton: "Book a Consultation",
    },
    es: {
      ctaMessage: "¿Listo para dar el siguiente paso?",
      ctaButton: "Reservar una consulta",
    },
    el: {
      ctaMessage: "Έτοιμος για το επόμενο βήμα;",
      ctaButton: "Κλείσε μία συνεδρία",
    },
  };

  const t = translations[selectedLanguage] || translations.en;

  return (
    <section className="page-hero with-description">
      <div
        className="page-hero-bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="overlay" />
      <div className="page-hero-content">
        {description && <p className="fade-in-left">{description}</p>}

        {showCTA && (
          <div className="cta-wrapper fade-in">
            <span className="cta-message">{t.ctaMessage}</span>
            <Link href="/book-consultation" className="cta-button">
              {t.ctaButton}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
