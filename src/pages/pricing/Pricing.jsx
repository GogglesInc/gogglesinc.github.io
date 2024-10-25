import { useEffect } from "react";
import { useIsPresent } from "framer-motion";
import TransitionScreen from "../../Components/TransitionScreen";

export default function Pricing() {
  const isPresent = useIsPresent();
  useEffect(() => {
    document.title = "Pricing - Goggles Inc.";
  });
  return (
    <>
      <div className="grid h-screen place-items-center bg-background font-mono text-4xl text-text-900">
        WIP: Pricing Page
      </div>
      <TransitionScreen present={isPresent} />
    </>
  );
}
