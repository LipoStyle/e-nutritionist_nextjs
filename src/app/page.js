import Hero from "./components/shared/Hero/Hero";
import ConceptsSection from "./home/conceptsection/ConceptsSection";
import ServicePlanCarousel from "./home/servicecarousel/Servicecarousel";
import ObserverSection from "./components/testobserver/ObserverSection";
import TestObserver  from "./TestObserver"

export default function HomePage() {
  return (
    
    <main>
      <Hero
        backgroundImage="/heroimages/home-hero.jpg"
        description="Empowering individuals to optimize their nutrition for improved health, performance, and overall well-being."
      />
      <ConceptsSection />
      <ServicePlanCarousel />
    </main>
  );
}
