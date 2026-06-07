import React from "react";

function Validar() {
  return (
    <div className="tab-panel" id="painel-validar">
      <div className="secao-header">
        <h2>Certificados Pendentes</h2>
      </div>
      <ul className="lista-certificados">
        <li className="cert-row">
          <div className="cert-icon cert-icon-pendente">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-clock h-5 w-5 text-warning"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <div className="cert-info">
            <span className="cert-nome">Curso de Python Básico</span>
            <span className="cert-meta">
              Maria Clara Santos · 12h solicitadas · Enviado em 19/03/2026
            </span>
          </div>
          <div className="cert-acoes">
            <span className="badge-status badge-pendente">Pendente</span>
            <button className="btn-validar" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Analisar
            </button>
            <button
              className="btn-icone btn-excluir"
              type="button"
              aria-label="Excluir"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trash2 h-4 w-4"
              >
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                <line x1="10" x2="10" y1="11" y2="17"></line>
                <line x1="14" x2="14" y1="11" y2="17"></line>
              </svg>
            </button>
          </div>
        </li>
        <li className="cert-row">
          <div className="cert-icon cert-icon-aprovado">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-file-check h-5 w-5 text-primary"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="m9 15 2 2 4-4"></path>
            </svg>
          </div>
          <div className="cert-info">
            <span className="cert-nome">
              Palestra: Mercado de Trabalho em TI
            </span>
            <span className="cert-meta">
              Maria Clara Santos · 2h solicitadas · Enviado em 15/03/2026
            </span>
          </div>
          <div className="cert-acoes">
            <span className="badge-status badge-aprovado">Aprovado</span>
            <button className="btn-validar" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Analisar
            </button>
            <button
              className="btn-icone btn-excluir"
              type="button"
              aria-label="Excluir"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trash2 h-4 w-4"
              >
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                <line x1="10" x2="10" y1="11" y2="17"></line>
                <line x1="14" x2="14" y1="11" y2="17"></line>
              </svg>
            </button>
          </div>
        </li>
        <li className="cert-row">
          <div className="cert-icon cert-icon-negado">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7499 2.5H7.49994C6.8369 2.5 6.20101 2.76339 5.73217 3.23223C5.26333 3.70107 4.99994 4.33696 4.99994 5V25C4.99994 25.663 5.26333 26.2989 5.73217 26.7678C6.20101 27.2366 6.8369 27.5 7.49994 27.5H22.4999C23.163 27.5 23.7989 27.2366 24.2677 26.7678C24.7365 26.2989 24.9999 25.663 24.9999 25V8.75L18.7499 2.5Z"
                stroke="#F50D13"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.4999 2.5V7.5C17.4999 8.16304 17.7633 8.79893 18.2322 9.26777C18.701 9.73661 19.3369 10 19.9999 10H24.9999"
                stroke="#F50D13"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.0739 14.3906L12.2078 20.2568"
                stroke="#F50D13"
                strokeWidth="1.95539"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.2078 14.3906L18.0739 20.2568"
                stroke="#F50D13"
                strokeWidth="1.95539"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="cert-info">
            <span className="cert-nome">Seminário de Biblioteconomia</span>
            <span className="cert-meta">
              Maria Clara Santos · 8h solicitadas · Enviado em 10/03/2026
            </span>
          </div>
          <div className="cert-acoes">
            <span className="badge-status badge-negado">Negado</span>
            <button className="btn-validar" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Analisar
            </button>
            <button
              className="btn-icone btn-excluir"
              type="button"
              aria-label="Excluir"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trash2 h-4 w-4"
              >
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                <line x1="10" x2="10" y1="11" y2="17"></line>
                <line x1="14" x2="14" y1="11" y2="17"></line>
              </svg>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Validar;
