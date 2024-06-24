import React from "react";
import reactdom from "react-dom/client";
import YouTube from "./youtube";

const root = reactdom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <YouTube />
  </React.StrictMode>
);
