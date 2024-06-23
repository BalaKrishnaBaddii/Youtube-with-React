import React from "react";
import reactdom from "react-dom/client";
import App from "./App";
import Buttons from "./CSS-Basics/Buttons/buttons";
import { TextStyle } from "./CSS-Basics/Text-Styles/textStyles";
import TextStylePractice from "./CSS-Basics/Text-Styles/practice/practiceText";

const root = reactdom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <TextStylePractice />
  </React.StrictMode>
);
