import { useEffect } from "react";
import Navigation from "../Components/Navigation";
import { motion, useIsPresent } from "framer-motion";

export default function Pricing() {
  const isPresent = useIsPresent();
  useEffect(() => {
    document.title = "Pricing - Goggles Inc.";
  });
  return (
    <>
      <Navigation />
      Pricing Page
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
