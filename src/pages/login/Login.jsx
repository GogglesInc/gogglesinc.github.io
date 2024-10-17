import { useEffect } from "react";
import Navigation from "../Components/Navigation";
import { useIsPresent } from "framer-motion";
import TransitionScreen from "../Components/TransitionScreen";
import Footer from "../Components/Footer";
export default function Login() {
  const isPresent = useIsPresent();
  useEffect(() => {
    document.title = "Login - Goggles Inc.";
  });
  return (
    <>
      <Navigation />
      <div className="grid h-screen place-items-center bg-background font-mono text-4xl text-text-900">
        WIP: Login Page
      </div>
      <Footer />
      <TransitionScreen present={isPresent} />
    </>
  );
}
