import React from "react";

function Camera() {
  return (
    <div className="card-comprovacao">
      <div className="card-comprovacao-header">
        <h2>Inserir código do evento</h2>
        <p>Digite o código de presença divulgado pelo organizador.</p>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="codigo-evento">
          Código do evento
        </label>
        <input
          className="form-input"
          type="text"
          id="codigo-evento"
          placeholder="Ex: EVT-2026-001"
        />
      </div>
      <button className="btn-confirmar" type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
        Confirmar presença
      </button>
    </div>
  );
}

export default Camera;
