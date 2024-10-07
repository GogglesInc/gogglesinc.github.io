import { useIsPresent, motion } from "framer-motion";
import Navigation from "../Components/Navigation";
import { useEffect } from "react";
export default function About() {
  const isPresent = useIsPresent();
  useEffect(() => {
    document.title = "About - Goggles Inc.";
  });
  return (
    <>
      <Navigation />
      About Page
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
