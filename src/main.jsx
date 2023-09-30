import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Root from "./Components/Root/Root";
import AboutPage from "./Components/AboutPage/AboutPage";
import SkillsPage from "./Components/SkillsPage/SkillsPage";
import ServicesPage from "./Components/ServicesPage/ServicesPage";
import ProjectPage from "./Components/ProjectPage/ProjectPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
// import Header from "./Components/Header/Header";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/About",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/Skills",
        element: <SkillsPage></SkillsPage>,
      },
      {
        path: "/Services",
        element: <ServicesPage></ServicesPage>,
      },
      {
        path: "/Projects",
        element: <ProjectPage></ProjectPage>,
      },
      {
        path: "/Contact",
        element: <ContactPage></ContactPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
