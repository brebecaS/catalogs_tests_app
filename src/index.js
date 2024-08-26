import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import Error from "./components/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/NavBar";

import { ErrorBoundary } from "react-error-boundary";
import TestsPage from "./components/TestsPage";
import CatalogsPage from "./components/CatalogsPage";
import HomePage from "./components/Homepage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ErrorBoundary fallback={<Error />}>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tests" element={<TestsPage />} />
        <Route path="/catalogs" element={<CatalogsPage />} />
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
);
