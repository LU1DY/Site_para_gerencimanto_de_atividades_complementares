import React from "react";

function Notificacoes() {
  return (
    <section className="container-notificacoes">
      <div className="notificacoes-header">
        <h1>Notificações</h1>
        <p>Suas notificações recentes</p>
      </div>
      <div className="notificacoes-list">
        <ul>
          <li>
            <div className="row">
              <div className="notificacoes-list-icon alert">
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
                  className="lucide lucide-circle-alert h-5 w-5 text-muted-foreground"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
                </svg>
              </div>
              <div className="column">
                <h4>Certificado aprovado</h4>
                <p>
                  Seu certificado "Palestra: Mercado de Trabalho em TI" foi
                  aprovado. 2 horas adicionadas.
                </p>
              </div>
            </div>
            <span className="notificacoes-data">5 dias atrás</span>
          </li>
          <li>
            <div className="row">
              <div className="notificacoes-list-icon info">
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
                  className="lucide lucide-circle-alert h-5 w-5 text-muted-foreground"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
                </svg>
              </div>
              <div className="column">
                <h4>Certificado aprovado</h4>
                <p>
                  Seu certificado "Palestra: Mercado de Trabalho em TI" foi
                  aprovado. 2 horas adicionadas.
                </p>
              </div>
            </div>
            <span className="notificacoes-data">2 horas atrás</span>
          </li>
          <li>
            <div className="row">
              <div className="notificacoes-list-icon sucess">
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
                  className="lucide lucide-circle-check h-5 w-5 text-success"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="column">
                <h4>Certificado aprovado</h4>
                <p>
                  Seu certificado "Palestra: Mercado de Trabalho em TI" foi
                  aprovado. 2 horas adicionadas.
                </p>
              </div>
            </div>
            <span className="notificacoes-data">2 horas atrás</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Notificacoes;
