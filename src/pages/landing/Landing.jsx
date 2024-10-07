import Navigation from "../Components/Navigation.jsx";
import Hero from "../Components/Hero.jsx";
import Reputation from "../Components/Reputation.jsx";
import Features from "../Components/Features.jsx";
import Stats from "../Components/Stats.jsx";
import Testimonials from "../Components/Testimonials.jsx";
import { useIsPresent, motion } from "framer-motion";
import { useEffect } from "react";
import FAQ from "../Components/FAQ.jsx";

export default function Landing() {
  const isPresent = useIsPresent();
  useEffect(() => {
    document.title = "Goggles Inc.";
  });
  return (
    <>
      <Navigation />
      <Hero />
      <Reputation />
      <Features />
      <Stats />
      <Testimonials />
      <FAQ />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed inset-0 z-[99] bg-accent"
      />
    </>
  );
}
