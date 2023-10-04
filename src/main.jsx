import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import i18next from "i18next";
import global_English from "./Components/Translations/English/global.json";
import global_Norwegian from "./Components/Translations/Norwegian/global.json";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: { global: global_English },
    no: { global: global_Norwegian },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
