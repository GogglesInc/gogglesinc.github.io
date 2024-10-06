import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing/Landing.jsx";
import About from "./pages/about/About.jsx";
import Blog from "./pages/blog/Blog.jsx";
import Pricing from "./pages/pricing/Pricing.jsx";
import Login from "./pages/login/Login.jsx";
import ErrorPage from "./pages/404.jsx";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <Landing />, errorElement: <ErrorPage /> },
  { path: "/about", element: <About /> },
  { path: "/blog", element: <Blog /> },
  { path: "/login", element: <Login /> },
  { path: "/pricing", element: <Pricing /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
