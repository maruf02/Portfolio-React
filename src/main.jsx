import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenuBar from "./Components/MenuBar/MenuBar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuBar></MenuBar>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
