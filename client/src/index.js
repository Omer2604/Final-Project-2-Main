import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./layout/header/NavBar/NavBar";
import React from "react";
import AccessibilityButton from "./components/AccessibilityButton";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <NavBar />
    <AccessibilityButton ariaLabel="Activate accessibility mode">
      Accessibility
    </AccessibilityButton>
    <App />
  </BrowserRouter>
);
