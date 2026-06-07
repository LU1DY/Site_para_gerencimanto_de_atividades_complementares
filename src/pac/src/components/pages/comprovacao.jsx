import React, { useState } from "react";
import Codigo from "../components/codigo";
import Camera from "../components/Camera";

function Comprovacao() {
  const [currentAba, setCurrentAba] = useState("camera");
  return (
    <section className="page-comprovacao">
      <header className="comprovacao-header">
        <h1>Comprovação de Presença</h1>
        <p>
          Confirme sua participação em eventos escaneando o QR Code ou inserindo
          o código fornecido pelo organizador.
        </p>
      </header>

      <div className="banner-confirmado">
        <div className="banner-confirmado-left">
          <div className="box-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <div className="banner-confirmado-text">
            <strong>Presença confirmada</strong>
            <span>Workshop de Design Thinking · 6h · Código do evento</span>
            <p>22/03/2026, 09:32</p>
          </div>
        </div>
        <button className="btn-fechar-banner" type="button">
          Fechar
        </button>
      </div>

      <nav className="nav-abas">
        <ul>
          <li className={currentAba === "camera" && "active"}>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setCurrentAba("camera");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="5" height="5" x="3" y="3" rx="1" />
                <rect width="5" height="5" x="16" y="3" rx="1" />
                <rect width="5" height="5" x="3" y="16" rx="1" />
                <path d="M21 16h-3a2 2 0 0 0-2 2v3M21 21v.01M12 7v3a2 2 0 0 1-2 2H7M3 12h.01M12 3h.01M12 16v.01M16 12h1M21 12v.01M12 21v-1" />
              </svg>
              QR Code
            </a>
          </li>
          <li className={currentAba === "codigo" && "active"}>
            <a
              href=" "
              onClick={(e) => {
                e.preventDefault();
                setCurrentAba("codigo");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-key-round h-4 w-4"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </svg>
              Código
            </a>
          </li>
        </ul>
      </nav>

      {currentAba === "camera" && <Codigo />}
      {currentAba == "codigo" && <Camera />}
    </section>
  );
}

export default Comprovacao;
