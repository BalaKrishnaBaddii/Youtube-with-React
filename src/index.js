import React from "react";
import reactdom from "react-dom/client";
import YouTube from "./Youtube";

const root = reactdom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <YouTube />
  </React.StrictMode>
);
