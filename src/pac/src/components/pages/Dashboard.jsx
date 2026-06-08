import React, { useState } from "react";
import Visaogeral from "../components/Visaogeral";
import Certificadoseventos from "../components/Certificadoseventos";

function Dashboard({ setCurrentPage }) {
  const [currentAba, setCurrentAba] = useState("visao-geral");
  return (
    <div className="container-main-dashboard">
      <header className="header-dashboard">
        <div className="column">
          <h2>
            Olá, Maria <span>👋</span>
          </h2>
          <p>Ciência da Computação · 8º semestre</p>
        </div>
        <nav className="nav-dashboard">
          <ul>
            <li className={currentAba === "visao-geral" && "active"}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentAba("visao-geral");
                }}
              >
                Visão Geral
              </a>
            </li>
            <li className={currentAba === "certificados-eventos" && "active"}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentAba("certificados-eventos");
                }}
              >
                Meus Eventos
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {currentAba === "visao-geral" && (
        <Visaogeral setCurrentPage={setCurrentPage} />
      )}
      {currentAba === "certificados-eventos" && (
        <Certificadoseventos setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}

export default Dashboard;
