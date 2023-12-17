import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DarkModeProvider from "./contexts/DarkModeContext.jsx";
import { ExercisesContextProvider } from "./contexts/ExercisesContext.jsx";
import { ModalContextProvider } from "./contexts/ModalContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkModeProvider>
    <ModalContextProvider>
      <ExercisesContextProvider>
        <App />
      </ExercisesContextProvider>
    </ModalContextProvider>
  </DarkModeProvider>,
);
