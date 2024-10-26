import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import cn from "../utilities/cn";
import PropTypes from "prop-types";

export default function ThemeButton({ className }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    const systemTheme = window.matchMedia("(prefers-color-scheme: light)")
      .matches
      ? "light"
      : "dark";
    localStorage.setItem("theme", systemTheme);
    return systemTheme;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");

    const handleThemeChange = () => {
      const newTheme = mediaQuery.matches ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);
    };

    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn("size-6", className)}
    >
      {theme === "light" ? (
        <SunIcon className="size-full fill-text" />
      ) : (
        <MoonIcon className="size-full fill-text" />
      )}
    </button>
  );
}

ThemeButton.propTypes = {
  className: PropTypes.string,
};
