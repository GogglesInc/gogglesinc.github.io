import { useIsPresent } from "framer-motion";
import { useEffect } from "react";
import Hero from "./Components/Hero.jsx";
import Reputation from "./Components/Reputation.jsx";
import Features from "./Components/Features.jsx";
import Stats from "./Components/Stats.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import FAQ from "../../Components/FAQ.jsx";
import CTA from "./Components/CallToAction.jsx";
import TransitionScreen from "../../Components/TransitionScreen.jsx";

export default function Landing() {
  const isPresent = useIsPresent();
  useEffect(() => {
    document.title =
      "Goggles Inc. - Empowering Businesses with Cutting-Edge Technology.";
  });
  return (
    <>
      <Hero />
      <Reputation />
      <Features />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
      <TransitionScreen present={isPresent} />
    </>
  );
}
