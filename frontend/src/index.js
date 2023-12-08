import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { HashRouter  } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';


import "./index.css";
import App from "./App";

library.add(fas);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter >
      <App />
    </HashRouter >
  </React.StrictMode>
);