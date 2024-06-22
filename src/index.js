import React from "react";
import reactdom from "react-dom/client";
import App from "./App";
import { Subscribe, Join, Tweet } from "./CSS-Basics/buttons";

const root = reactdom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Subscribe />
    <Join />
    <Tweet />
  </React.StrictMode>
);
