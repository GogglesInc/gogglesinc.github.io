import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { cloneElement, Suspense, lazy } from "react";
import "./index.css";
import ErrorPage from "./pages/ErrorPage.jsx";
import LoadingScreen from "./pages/LoadingScreen.jsx";

const Navigation = lazy(() => import("./Components/Navigation.jsx"));
const Footer = lazy(() => import("./Components/Footer.jsx"));
const Landing = lazy(() => import("./pages/landing/Landing.jsx"));
const About = lazy(() => import("./pages/about/About.jsx"));
const Blog = lazy(() => import("./pages/blog/Blog.jsx"));
const Pricing = lazy(() => import("./pages/pricing/Pricing.jsx"));
const Login = lazy(() => import("./pages/login/Login.jsx"));

export default function App() {
  const location = useLocation();

  const router = useRoutes([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  if (!router) return <ErrorPage />;

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Navigation />
      <AnimatePresence mode="wait" initial={false}>
        {cloneElement(router, { key: location.pathname })}
      </AnimatePresence>
      <Footer />
    </Suspense>
  );
}
