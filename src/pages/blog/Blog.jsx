import { useEffect } from "react";
import Navigation from "../Components/Navigation.jsx";
import { useIsPresent } from "framer-motion";
import TransitionScreen from "../Components/TransitionScreen.jsx";
import Footer from "../Components/Footer.jsx";

export default function Blog() {
  const isPresent = useIsPresent();
  useEffect(() => {
    document.title = "Blog - Goggles Inc.";
  });
  return (
    <>
      <Navigation />
      <div className="grid h-screen place-items-center bg-background font-mono text-4xl text-text-900">
        WIP: Blog Page
      </div>
      <Footer />
      <TransitionScreen present={isPresent} />
    </>
  );
}
