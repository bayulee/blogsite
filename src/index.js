import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AboutContextProvider from "./context/AboutContext";

ReactDOM.render(
  <React.StrictMode>
    <AboutContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AboutContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

