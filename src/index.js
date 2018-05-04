import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppParent from "./AppParent";
import registerServiceWorker from "./registerServiceWorker";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

ReactDOM.render(<AppParent />, document.getElementById("root"));
registerServiceWorker();
