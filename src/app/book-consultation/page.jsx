'use client';

import Hero from "../components/shared/Hero/Hero";
import BookingForm  from "./bookingform/BookingForm"

const About = () => {
  return (
    <>
      <Hero
        backgroundImage="/heroimages/home-hero.jpg"
        description="Empowering individuals to optimize their nutrition for improved health, performance, and overall well-being."
      />
      <BookingForm />
    </>
  );
};

export default About;
