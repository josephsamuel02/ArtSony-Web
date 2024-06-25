import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import store from "./Redux/store.ts";
import { Provider } from "react-redux";

import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";


ReactDOM.createRoot(document.getElementById("root")!).render(
  
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
