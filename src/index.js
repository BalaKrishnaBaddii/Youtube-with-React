import React from "react";
import reactdom from "react-dom/client";
import YouTube from "./youtube";
import Grid from "./CSS-Basics/grid/gridbox";

const root = reactdom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Grid />
  </React.StrictMode>
);
