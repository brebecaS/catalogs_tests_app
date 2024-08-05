import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import Error from "./components/Error";

import { ErrorBoundary } from "react-error-boundary";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ErrorBoundary fallback={<Error />}>
    <App />
  </ErrorBoundary>
);
