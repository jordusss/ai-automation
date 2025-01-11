import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

const Index = () => {
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we have a scrollTo state from navigation
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const targetRef = state.scrollTo === 'services' ? servicesRef : contactRef;
      if (targetRef.current) {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
};

export default Index;