import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import Route from "./Routes/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={Route}></RouterProvider>
  </React.StrictMode>
);
