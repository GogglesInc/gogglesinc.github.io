import { useIsPresent } from "framer-motion";
import Navigation from "../Components/Navigation";
import { useEffect } from "react";
import TransitionScreen from "../Components/TransitionScreen";
import Footer from "../Components/Footer";

export default function About() {
  const isPresent = useIsPresent();
  useEffect(() => {
    document.title = "About - Goggles Inc.";
  });
  return (
    <>
      <Navigation />
      <div className="grid h-screen place-items-center bg-background font-mono text-4xl text-text-900">
        WIP: About Page
      </div>
      <Footer />
      <TransitionScreen present={isPresent} />
    </>
  );
}
