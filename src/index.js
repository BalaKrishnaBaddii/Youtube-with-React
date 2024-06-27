import React from "react";
import reactdom from "react-dom/client";
import YouTube from "./youtube";
import Positions from "./CSS-Basics/positons/positions";

const root = reactdom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <YouTube /> */}
    <Positions />
  </React.StrictMode>
);
