import { useEffect } from "react";
import { useIsPresent } from "framer-motion";
import TransitionScreen from "../../Components/TransitionScreen";
export default function Login() {
  const isPresent = useIsPresent();
  useEffect(() => {
    document.title = "Login - Goggles Inc.";
  });
  return (
    <>
      <div className="grid h-screen place-items-center bg-background font-mono text-4xl text-text-900">
        WIP: Login Page
      </div>
      <TransitionScreen present={isPresent} />
    </>
  );
}
