import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TicTacToe from "./Componentes/TicTacToe";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TicTacToe />
  </StrictMode>
);