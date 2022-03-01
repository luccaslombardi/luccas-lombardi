import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./contents/App.jsx";
import Header from "./components/header/Header.jsx";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
