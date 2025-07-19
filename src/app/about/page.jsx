'use client';

import Hero from "../components/shared/Hero/Hero";
import AboutJourney from "./aboutjourney/AboutJourney";
import AboutSection from "./aboutsection/AboutSection";
import "./about.css"
import AboutCTA from "./aboutcta/AboutCTA";
const About = () => {
  return (
    <>
      <Hero
        backgroundImage="/heroimages/services-hero.jpg"
        description="Empowering individuals to optimize their nutrition for improved health, performance, and overall well-being."
      />
      <AboutSection />
      <AboutJourney />
      <AboutCTA />
    </>
  );
};

export default About;
