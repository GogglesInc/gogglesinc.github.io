import { useEffect } from "react";
import ThemeButton from "../Components/themeButton";

export default function LoadingScreen() {
  useEffect(() => {
    document.title = "Loading - Goggles Inc.";
  }, []);

  return (
    <div className="flex h-screen items-center justify-center gap-4 bg-background font-mono text-4xl text-text-900">
      Goggles Inc pages are loading...
      <ThemeButton className="hidden" />
    </div>
  );
}
