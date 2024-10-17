import { useEffect } from "react";
import Navigation from "../Components/Navigation";
import { useIsPresent } from "framer-motion";
import TransitionScreen from "../Components/TransitionScreen";
import Footer from "../Components/Footer";

export default function Pricing() {
  const isPresent = useIsPresent();
  useEffect(() => {
    document.title = "Pricing - Goggles Inc.";
  });
  return (
    <>
      <Navigation />
      <div className="grid h-screen place-items-center bg-background font-mono text-4xl text-text-900">
        WIP: Pricing Page
      </div>
      <Footer />
      <TransitionScreen present={isPresent} />
    </>
  );
}
