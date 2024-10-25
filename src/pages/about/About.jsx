import { useIsPresent } from "framer-motion";
import { useEffect } from "react";
import TransitionScreen from "../../Components/TransitionScreen";

export default function About() {
  const isPresent = useIsPresent();
  useEffect(() => {
    document.title = "About - Goggles Inc.";
  });
  return (
    <>
      <div className="grid h-screen place-items-center bg-background font-mono text-4xl text-text-900">
        WIP: About Page
      </div>
      <TransitionScreen present={isPresent} />
    </>
  );
}
