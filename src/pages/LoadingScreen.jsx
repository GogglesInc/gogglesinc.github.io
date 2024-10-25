import { useEffect } from "react";

export default function LoadingScreen() {
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      let systemTheme =
        (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: light)").matches) === true
          ? "light"
          : "dark";
      document.documentElement.dataset.theme = systemTheme;
      localStorage.setItem("theme", systemTheme);
    } else {
      let savedTheme = localStorage.getItem("theme");
      document.documentElement.dataset.theme = savedTheme;
    }

    document.title = "Loading - Goggles Inc.";
  }, []);

  return (
    <div className="flex h-screen items-center justify-center gap-4 bg-background font-mono text-6xl text-text-900">
      <span className="h-16 w-16 animate-spin rounded-full border-[0.5rem] border-text-900 border-t-accent" />
      Loading{" "}
    </div>
  );
}
