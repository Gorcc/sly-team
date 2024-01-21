import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import global_en from "./translations/en/global.json";

import global_tr from "./translations/tr/globa.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Media from "./Pages/Media";
import { AnimatePresence } from "framer-motion";

const savedLanguage = sessionStorage.getItem("language") || "tr"; // Default to "tr" if not found
i18next.init({
  interpolaration: { escapeValue: true },
  lng: savedLanguage,
  resources: {
    en: {
      global: global_en,

    },
    tr: {
      global: global_tr,
 
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Router>
        <Routes>
          <Route path="/*" element={<App></App>} />
        </Routes>
      </Router>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
