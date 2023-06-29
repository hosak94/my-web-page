import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18next";

const loadingMarkUp = (
  <div>
    <h2>Loading..</h2>
  </div>
);

createRoot(document.getElementById("root")).render(
  <Suspense fallback={loadingMarkUp}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);
