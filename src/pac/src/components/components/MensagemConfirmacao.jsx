import React from "react";

function MensagemConfirmacao({ setMensagemConfirmacao }) {
  return (
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
      <button
        className="btn-fechar-banner"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setMensagemConfirmacao(false);
        }}
      >
        Fechar
      </button>
    </div>
  );
}

export default MensagemConfirmacao;
