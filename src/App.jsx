import "./index.css";
import Landing from "./pages/landing/Landing.jsx";
import About from "./pages/about/About.jsx";
import Blog from "./pages/blog/Blog.jsx";
import Pricing from "./pages/pricing/Pricing.jsx";
import Login from "./pages/login/Login.jsx";
import ErrorPage from "./pages/404.jsx";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";

export default function App() {
  const location = useLocation();

  const router = useRoutes([
    { path: "/", element: <Landing /> },
    { path: "/about", element: <About /> },
    { path: "/blog", element: <Blog /> },
    { path: "/login", element: <Login /> },
    { path: "/pricing", element: <Pricing /> },
  ]);

  if (!router) return <ErrorPage />;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {cloneElement(router, { key: location.pathname })}
    </AnimatePresence>
  );
}
