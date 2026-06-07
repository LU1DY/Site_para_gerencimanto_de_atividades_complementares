import { useState } from "react";
import Dashboard from "./components/pages/dashboard";
import Sidebar from "./components/components/sidebar";
import Navbar from "./components/components/navbar";
import Admin from "./components/pages/admin";
import Atividades from "./components/pages/atividades";
import Cadastro from "./components/pages/cadastro";
import Certificados from "./components/pages/certificados";
import Comprovacao from "./components/pages/comprovacao";
import Eventos from "./components/pages/eventos";
import Login from "./components/pages/login";
import Notificacoes from "./components/pages/notificacoes";
import React from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  return (
    <div className="container-main">
      <Sidebar setCurrentPage={setCurrentPage} />
      <div className="container">
        <Navbar />
        <div id="main">
          {currentPage === "comprovacao" && <Comprovacao />}
          {currentPage === "dashboard" && <Dashboard />}
          {currentPage === "eventos" && <Eventos />}
          {currentPage === "atividades" && <Atividades />}
          {currentPage === "certificados" && <Certificados />}
          {currentPage === "notificacoes" && <Notificacoes />}
          {currentPage === "admin" && <Admin />}
          {currentPage === "cadastro" && <Cadastro />}
          {currentPage === "login" && <Login />}
        </div>
      </div>
    </div>
  );
}

export default App;
