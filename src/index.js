import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
