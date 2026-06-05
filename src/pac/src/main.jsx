import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../src/css/pages/container-main.css";

createRoot(document.getElementById("main-content")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
