import React from "react";

function Modallogout({ setModal }) {
  return (
    <div class="modal">
      <div class="modal-content">
        <h2 class="modal-titulo" id="modal-titulo">
          Encerrar sessão
        </h2>
        <p class="modal-descricao">
          Clique em sair se deseja sair de sua conta
        </p>
      </div>
      <div class="modal-actions">
        <button
          class="btn-modal-cancelar"
          id="btn-cancelar-exclusao"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setModal(false);
          }}
        >
          Cancelar
        </button>
        <button
          class="btn-modal-excluir"
          id="btn-confirmar-exclusao"
          type="button"
        >
          Sair
        </button>
      </div>
    </div>
  );
}

export default Modallogout;
