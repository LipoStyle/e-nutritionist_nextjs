'use client';

import Hero from "../components/shared/Hero/Hero";
import "./Contact.css"
import ContactSection from "./contactsection/ContactSection";
import LocationSection from "./locationsection/LocationSection";
const About = () => {
  return (
    <>
      <Hero
        backgroundImage="/heroimages/home-hero.jpg"
        description="Empowering individuals to optimize their nutrition for improved health, performance, and overall well-being."
      />
      <ContactSection />
      <LocationSection />
    </>
  );
};

export default About;
