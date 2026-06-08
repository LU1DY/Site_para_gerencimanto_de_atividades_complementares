import React from "react";

function Modalexcluir({ setModalExcluir }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="modal-titulo" id="modal-titulo">
          Excluir evento?
        </h2>
        <p className="modal-descricao">
          Esta ação não pode ser desfeita. O evento "
          <strong id="modal-nome-evento">
            Seminário de Inteligência Artificial
          </strong>
          " será removido permanentemente.
        </p>
      </div>
      <div className="modal-actions">
        <button
          className="btn-modal-cancelar"
          id="btn-cancelar-exclusao"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setModalExcluir(false);
          }}
        >
          Cancelar
        </button>
        <button
          className="btn-modal-excluir"
          id="btn-confirmar-exclusao"
          type="button"
        >
          Excluir
        </button>
      </div>
    </div>
  );
}

export default Modalexcluir;
