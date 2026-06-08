import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../src/css/pages/container-main.css";
import "../src/css/pages/admin.css";
import "../src/css/pages/atividades.css";
import "../src/css/pages/cadastro.css";
import "../src/css/pages/certificado.css";
import "../src/css/pages/comprovacao.css";
import "../src/css/pages/eventos.css";
import "../src/css/pages/login.css";
import "../src/css/pages/notificacoes.css";
import "../src/css/components/modal-excluir.css";
import "../src/css/components/modal-analise.css";
import "../src/css/components/modal-analise-evento.css";
import "../src/css/components/modal-editar_criar-evento.css";
import "../src/css/components/modal-upload-certificados.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
