import React from "react";

function Certificados() {
  return (
    <section className="container-certificados">
      <header className="header-certificados">
        <div className="header-title">
          <h2>Certificados</h2>
          <p>Confira todos os certificados válidos</p>
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#fff"
            className="bi bi-upload"
            viewBox="0 0 16 16"
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
          </svg>
          <span>Enviar Certificado</span>
        </button>
      </header>
      <ul>
        <li>
          <div className="description-certificado">
            <div className="card-icon">
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
              <h4>Palestra: Mercado de Trabalho em TI</h4>
              <p>2h · certificado_palestra_ti.pdf · Enviado em 18/03/2026</p>
            </div>
          </div>
          <span>Aprovado</span>
        </li>
      </ul>
    </section>
  );
}

export default Certificados;
