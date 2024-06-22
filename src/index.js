import React from "react";
import reactdom from "react-dom/client";
import App from "./App";
import Buttons from "./CSS-Basics/Buttons/buttons";

const root = reactdom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Buttons />
  </React.StrictMode>
);
