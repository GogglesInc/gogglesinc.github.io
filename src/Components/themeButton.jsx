import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import cn from "../utilities/cn";
import PropTypes from "prop-types";

export default function ThemeButton({ className }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      let systemTheme =
        (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: light)").matches) === true
          ? "light"
          : "dark";
      setTheme(systemTheme);
      document.documentElement.dataset.theme = systemTheme;
      localStorage.setItem("theme", systemTheme);
    } else {
      let savedTheme = localStorage.getItem("theme");
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
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
