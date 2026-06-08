import React from "react";

function Emitir() {
  return (
    <div className="tab-panel" id="painel-emitir">
      <div>
        <div className="emitir-header">
          <div className="emitir-header-icon">
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
              className="lucide lucide-award h-5 w-5 text-primary"
            >
              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
              <circle cx="12" cy="8" r="6"></circle>
            </svg>
          </div>
          <div className="emitir-header-text">
            <h2>Emitir Certificados para Eventos Internos</h2>
            <p>
              Selecione o evento e envie os certificados aos alunos
              participantes. Eles os receberão diretamente no painel.
            </p>
          </div>
        </div>
      </div>

      <div className="emitir-painel">
        <div className="painel-card">
          <div className="form-group">
            <label className="form-label" htmlFor="evento-interno">
              Evento interno
            </label>
            <div className="select-wrapper">
              <select className="form-select" id="evento-interno">
                <option>Workshop de Design</option>
                <option>Seminário de IA</option>
                <option>Hackathon Sustentabilidade</option>
              </select>
              <svg
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="titulo-cert">
              Título do certificado
            </label>
            <input
              className="form-input"
              type="text"
              id="titulo-cert"
              value="Certificado de Participação - Workshop de Design"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="data-cert">
              Data
            </label>
            <div className="input-wrapper">
              <input
                className="form-input"
                type="text"
                id="data-cert"
                value="14/04/2026"
              />
              <span className="input-icon-right">
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
              </span>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="descricao-cert">
              Descrição
            </label>
            <div className="textarea-wrapper">
              <textarea
                className="form-textarea"
                id="descricao-cert"
                maxlength="500"
              >
                Certificamos a participação no evento "Workshop de Design"
                realizado em 14/04/2026 no Sala B12, com carga horária de 6
                horas.
              </textarea>
              <span className="textarea-contador">52/500</span>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="carga-cert">
              Carga horária (h)
            </label>
            <input
              className="form-input"
              type="number"
              id="carga-cert"
              value="6"
              min="1"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Modelo do certificado</label>
            <label className="upload-area">
              <input type="file" accept=".pdf,.jpg,.png" />
              <div className="upload-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" x2="12" y1="3" y2="15" />
                </svg>
              </div>
              <div className="upload-text">
                <strong>Anexar PDF/imagem do certificado</strong>
                <span>PDF, JPG ou PNG - até 5MB</span>
              </div>
            </label>
          </div>
        </div>

        <div className="painel-card">
          <div className="participantes-header">
            <h3>Alunos participantes</h3>
            <span className="participantes-count">1 selecionado(s)</span>
          </div>

          <div className="busca-participante">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input type="text" placeholder="Buscar por nome ou e-mail..." />
          </div>

          <label className="checkbox-todos">
            <input type="checkbox" />
            <span className="checkbox-todos-label">Selecionar todos (6)</span>
          </label>

          <ul className="participantes-lista">
            <li className="participante-item selecionado">
              <input type="checkbox" checked />
              <div className="participante-info">
                <span className="participante-nome">Maria Clara Santos</span>
                <span className="participante-meta">
                  maria.santos@univ.edu.br · Ciência da Computação · 5º semes...
                </span>
              </div>
            </li>
            <li className="participante-item">
              <input type="checkbox" />
              <div className="participante-info">
                <span className="participante-nome">Maria Clara Santos</span>
                <span className="participante-meta">
                  maria.santos@univ.edu.br · Ciência da Computação · 5º semes...
                </span>
              </div>
            </li>
            <li className="participante-item">
              <input type="checkbox" />
              <div className="participante-info">
                <span className="participante-nome">Maria Clara Santos</span>
                <span className="participante-meta">
                  maria.santos@univ.edu.br · Ciência da Computação · 5º semes...
                </span>
              </div>
            </li>
            <li className="participante-item">
              <input type="checkbox" />
              <div className="participante-info">
                <span className="participante-nome">Maria Clara Santos</span>
                <span className="participante-meta">
                  maria.santos@univ.edu.br · Ciência da Computação · 5º semes...
                </span>
              </div>
            </li>
            <li className="participante-item">
              <input type="checkbox" />
              <div className="participante-info">
                <span className="participante-nome">Maria Clara Santos</span>
                <span className="participante-meta">
                  maria.santos@univ.edu.br · Ciência da Computação · 5º semes...
                </span>
              </div>
            </li>
            <li className="participante-item">
              <input type="checkbox" />
              <div className="participante-info">
                <span className="participante-nome">Maria Clara Santos</span>
                <span className="participante-meta">
                  maria.santos@univ.edu.br · Ciência da Computação · 5º semes...
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="aba-footer">
        <button className="btn-fechar" type="button">
          Fechar
        </button>
        <button className="btn-acao-principal" type="button">
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
            class="lucide lucide-send h-4 w-4 mr-1"
          >
            <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
            <path d="m21.854 2.147-10.94 10.939"></path>
          </svg>
          Enviar
        </button>
      </div>
    </div>
  );
}

export default Emitir;
