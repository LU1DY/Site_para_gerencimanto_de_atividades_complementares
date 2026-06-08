import React from "react";

function ModalCriarEvento({ setModalCriarEvento }) {
  return (
    <div className="modal">
      <header className="modal-header">
        <div>
          <h2>Novo Evento</h2>
          <p>Atualize as informações do evento.</p>
        </div>
        <button className="btn-fechar" type="button" aria-label="Fechar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </header>

      <div className="modal-body">
        <div className="form-group">
          <label className="form-label" for="titulo">
            Título do evento
          </label>
          <input
            className="form-input"
            type="text"
            id="titulo"
            value="Seminário de Inteligência Artificial"
          />
        </div>

        <div className="form-row form-row-2">
          <div className="form-group">
            <label className="form-label" for="tipo">
              Tipo
            </label>
            <input
              className="form-input"
              type="text"
              id="tipo"
              value="Seminário"
            />
          </div>
          <div className="form-group">
            <label className="form-label" for="situacao">
              Situação
            </label>
            <div className="select-wrapper">
              <select className="form-select" id="situacao">
                <option selected>Aberto</option>
                <option>Encerrado</option>
                <option>Cancelado</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        <div className="form-row form-row-3">
          <div className="form-group">
            <label className="form-label" for="data">
              Data
            </label>
            <div className="input-wrapper">
              <input
                className="form-input"
                type="text"
                id="data"
                value="10/04/2026"
              />
              <span className="input-icon-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M8 2v4M16 2v4M3 10h18" />
                </svg>
              </span>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label" for="carga">
              Carga (h)
            </label>
            <input
              className="form-input"
              type="number"
              id="carga"
              value="4"
              min="1"
            />
          </div>
          <div className="form-group">
            <label className="form-label" for="modalidade">
              Modalidade
            </label>
            <div className="select-wrapper">
              <select className="form-select" id="modalidade">
                <option selected>Presencial</option>
                <option>Online</option>
                <option>Híbrido</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" for="local">
            Local
          </label>
          <input
            className="form-input"
            type="text"
            id="local"
            value="Auditório Central"
          />
        </div>

        <div className="form-group">
          <label className="form-label" for="descricao">
            Descrição
          </label>
          <div className="textarea-wrapper">
            <textarea className="form-textarea" id="descricao" maxlength="500">
              Palestra sobre os avanços recentes em IA generativa.
            </textarea>
            <span className="textarea-contador" id="contador">
              52/500
            </span>
          </div>
        </div>
      </div>

      <footer className="modal-footer">
        <button
          className="btn-fechar-footer"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setModalCriarEvento(false);
          }}
        >
          Fechar
        </button>
        <button className="btn-salvar" type="button">
          Cadastrar evento
        </button>
      </footer>
    </div>
  );
}

export default ModalCriarEvento;
