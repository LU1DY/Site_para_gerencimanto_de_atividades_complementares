import React from "react";

function ModalAnaliseCertificado({ setModalAnalisarCertificado }) {
  return (
    <div className="modal-analise">
      <header className="modal-analise-header">
        <div>
          <h2 className="modal-analise-titulo" id="modal-analise-titulo">
            Análise de Certificado
          </h2>
          <p className="modal-analise-subtitulo">
            Revise os dados do aluno e o comprovante enviado antes de decidir.
          </p>
        </div>
        <button
          className="modal-fechar"
          id="btn-fechar-analise"
          type="button"
          aria-label="Fechar"
          onClick={(e) => {
            e.preventDefault();
            setModalAnalisarCertificado(false);
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
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </header>

      <div className="modal-analise-body">
        <div className="analise-secao analise-aluno">
          <span className="analise-secao-label">ALUNO</span>
          <div className="aluno-grid">
            <span className="aluno-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              <span id="analise-curso">Ciência da Computação</span>
            </span>
            <span className="aluno-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              <span id="analise-semestre">5º semestre</span>
            </span>
            <span className="aluno-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span id="analise-nome">Maria Clara Santos</span>
            </span>
            <span className="aluno-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span id="analise-email">maria.santos@univ.edu.br</span>
            </span>
          </div>
        </div>
        <div className="analise-pedido">
          <div className="certificado-campo">
            <span className="campo-label">TÍTULO</span>
            <span className="campo-valor" id="analise-titulo-cert">
              Curso de Python Básico – Certificado de Conclusão
            </span>
          </div>
          <div className="certificado-campo">
            <span className="campo-label">DESCRIÇÃO</span>
            <span className="campo-valor" id="analise-descricao">
              Curso online de 12 horas abordando fundamentos de Python,
              estruturas de dados, funções e introdução a bibliotecas como NumPy
              e Pandas. Realizado entre 01/03/2026 e 15/03/2026.
            </span>
          </div>
          <div className="certificado-meta">
            <span className="meta-horas" id="analise-horas">
              12h solicitadas
            </span>
            <span className="meta-data" id="analise-envio">
              Enviado em 19/03/2026
            </span>
          </div>

          <div className="arquivo-preview">
            <div className="arquivo-icone">
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
                className="lucide lucide-file-text h-10 w-10 text-primary mb-2"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
            </div>
            <span className="arquivo-nome" id="analise-arquivo">
              certificado_python.pdf
            </span>
            <span className="arquivo-desc">
              Pré-visualização do comprovante enviado pelo aluno
            </span>
            <button className="btn-abrir-arquivo" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Abrir arquivo
            </button>
          </div>
        </div>

        <div className="analise-secao analise-recusa">
          <div className="recusa-label-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="8" y2="12" />
              <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
            <span>Justificativa da recusa</span>
          </div>
          <div className="recusa-textarea-wrapper">
            <textarea
              className="recusa-textarea"
              id="justificativa"
              maxlength="400"
              placeholder="Explique ao aluno o motivo da recusa (ex: certificado ilegível, atividade não elegível...)"
            ></textarea>
            <span className="recusa-contador">
              <span id="contador-chars">0</span>/400
            </span>
          </div>
        </div>
      </div>

      <footer className="modal-analise-footer-recusa">
        <button className="btn-voltar" id="btn-voltar-analise" type="button">
          Voltar
        </button>
        <button
          className="btn-confirmar-recusa"
          id="btn-confirmar-recusa"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6M9 9l6 6" />
          </svg>
          Confirmar recusa
        </button>
      </footer>
      <footer className="modal-analise-footer-aprovar">
        <button
          className="btn-voltar"
          id="btn-voltar-analise"
          type="button"
          
        >
          Recusar
        </button>
        <button className="btn-aprovar" id="btn-aprovar" type="button">
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
          Aprovar
        </button>
      </footer>
    </div>
  );
}

export default ModalAnaliseCertificado;
