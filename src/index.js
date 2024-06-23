import React from "react";
import reactdom from "react-dom/client";
import YouTube from "./Youtube";
import Display from "./CSS-Basics/display/display";

const root = reactdom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <YouTube /> */}
    <Display />
  </React.StrictMode>
);
