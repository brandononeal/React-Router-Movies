import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./index.css";

// You'll need to wrap <App /> for routing to work
render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
