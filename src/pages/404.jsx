import { useEffect } from "react";
import { Link, useRouteError } from "react-router-dom";
export default function ErrorPage() {
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
  }, []);

  const error = useRouteError();

  return (
    <>
      <main className="grid min-h-screen place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-text-600">
            {error.status}
          </p>
          <h1 className="mt-4 text-6xl font-bold tracking-tight text-text-900">
            {error.statusText}
          </h1>
          <p className="mt-6 text-lg leading-7 text-text-600">{error.data}</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-background-500 px-3.5 py-2.5 text-sm font-semibold text-text-50 shadow-sm hover:bg-background-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Go back
            </Link>
            <a
              href="https://github.com/gogglesgogs/"
              target="_blank"
              className="text-sm font-semibold text-text-900"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
