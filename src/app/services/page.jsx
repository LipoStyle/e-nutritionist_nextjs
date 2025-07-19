'use client';

import Hero from "../components/shared/Hero/Hero";
import ServicePlans from './serviceplans/ServicePlans'
const About = () => {
  return (
    <>
      <Hero
        backgroundImage="/heroimages/services-hero.jpg"
        description="Empowering individuals to optimize their nutrition for improved health, performance, and overall well-being."
      />
      <ServicePlans lang="en" />
    </>
  );
};

export default About;
