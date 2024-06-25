import React from "react";
import reactdom from "react-dom/client";
import YouTube from "./youtube";
import FlexBox from "./CSS-Basics/FlexBox/flexBox";

const root = reactdom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <FlexBox />
  </React.StrictMode>
);
