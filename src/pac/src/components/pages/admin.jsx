import React, { useState } from "react";
import Emitir from "../components/Emitir";
import Validar from "../components/Validar";
import Gerenciar from "../components/Gerenciar";

function Admin() {
  const [currentAba, setCurrentAba] = useState("gerenciar");
  return (
    <div className="page-admin">
      <header className="admin-header">
        <h1>Sessão administrativa</h1>
        <p>Cadastre novos eventos e valide novos eventos</p>
      </header>

      <div className="metricas-grid">
        <div className="metrica-card">
          <div className="metrica-icon icon-orange">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div className="metrica-info">
            <span className="metrica-valor">1</span>
            <span className="metrica-label">Certificados Pendentes</span>
          </div>
        </div>
        <div className="metrica-card">
          <div className="metrica-icon icon-green-light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M8 2v4M16 2v4M3 10h18" />
            </svg>
          </div>
          <div className="metrica-info">
            <span className="metrica-valor">4</span>
            <span className="metrica-label">Eventos Ativos</span>
          </div>
        </div>
        <div className="metrica-card">
          <div className="metrica-icon icon-teal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <div className="metrica-info">
            <span className="metrica-valor">6</span>
            <span className="metrica-label">Atividades Cadastradas</span>
          </div>
        </div>
        <div className="metrica-card">
          <div className="metrica-icon icon-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="m9 15 2 2 4-4" />
            </svg>
          </div>
          <div className="metrica-info">
            <span className="metrica-valor">4</span>
            <span className="metrica-label">Total Certificados</span>
          </div>
        </div>
      </div>

      <nav className="nav-abas">
        <ul>
          <li data-tab="validar">
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setCurrentAba("validar");
              }}
            >
              Validar Certificados
            </a>
          </li>
          <li data-tab="gerenciar" className="active-section">
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setCurrentAba("gerenciar");
              }}
            >
              Gerenciar Eventos
            </a>
          </li>
          <li data-tab="emitir">
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setCurrentAba("emitir");
              }}
            >
              Emitir Certificados
            </a>
          </li>
        </ul>
      </nav>
      {currentAba === "emitir" && <Emitir />}
      {currentAba === "gerenciar" && <Gerenciar />}
      {currentAba === "validar" && <Validar />}
    </div>
  );
}

export default Admin;
