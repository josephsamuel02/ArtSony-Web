import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import store, { persistor } from "./Redux/store.ts";
import { Provider } from "react-redux";

import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { PrimeReactProvider } from "primereact/api";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PrimeReactProvider value={{ unstyled: true }}>
            <App />
          </PrimeReactProvider>
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>
);
