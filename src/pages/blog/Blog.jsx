import { useEffect } from "react";
import Navigation from "../Components/Navigation.jsx";
import { useIsPresent, motion } from "framer-motion";

export default function Blog() {
  const isPresent = useIsPresent();
  useEffect(() => {
    document.title = "Blog - Goggles Inc.";
  });
  return (
    <>
      <Navigation />
      Blog Page
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
