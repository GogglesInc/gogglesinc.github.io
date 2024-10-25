import { useEffect } from "react";
import { useIsPresent } from "framer-motion";
import TransitionScreen from "../../Components/TransitionScreen.jsx";

export default function Blog() {
  const isPresent = useIsPresent();
  useEffect(() => {
    document.title = "Blog - Goggles Inc.";
  });
  return (
    <>
      <div className="grid h-screen place-items-center bg-background font-mono text-4xl text-text-900">
        WIP: Blog Page
      </div>
      <TransitionScreen present={isPresent} />
    </>
  );
}
