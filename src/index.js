import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  console.log("App: Hydrate");
  hydrate(<App />, rootElement);
} else {
  console.log("App: Render");
  render(<App />, rootElement);
}

reportWebVitals();
