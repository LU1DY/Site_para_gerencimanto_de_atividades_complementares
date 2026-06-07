import React from "react";

function Eventos() {
  return (
    <section className="page-eventos">
      <header className="column">
        <h1>Eventos</h1>
        <p>Envie e acompanhe seus comprovantes</p>
      </header>

      <div className="filtros">
        <div className="busca-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            className="busca-input"
            type="text"
            placeholder="Buscar eventos..."
          />
        </div>

        <div className="select-wrapper">
          <select className="filtro-select">
            <option>Todos</option>
            <option>Seminário</option>
            <option>Workshop</option>
            <option>Hackathon</option>
            <option>Palestra</option>
            <option>Curso</option>
            <option>Feira</option>
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

        <div className="select-wrapper">
          <select className="filtro-select">
            <option>Todas modalidades</option>
            <option>Presencial</option>
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

      <ul className="grid-eventos">
        <li className="card-evento">
          <div className="card-badges">
            <span className="badge badge-em-breve">Em breve</span>
            <span className="badge badge-tipo">Seminário</span>
          </div>
          <h3 className="card-titulo">Seminário de Inteligência Artificial</h3>
          <p className="card-descricao">
            Palestra sobre os avanços recentes em IA generativa.
          </p>
          <div className="card-meta">
            <span className="meta-item">
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
              9 de abril de 2026
            </span>
            <span className="meta-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Auditório Central · Presencial
            </span>
            <span className="meta-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              4 horas complementares
            </span>
          </div>
          <button className="btn-registrar">Registrar Participação</button>
        </li>

        <li className="card-evento">
          <div className="card-badges">
            <span className="badge badge-em-breve">Em breve</span>
            <span className="badge badge-tipo">Workshop</span>
          </div>
          <h3 className="card-titulo">Workshop de Design Thinking</h3>
          <p className="card-descricao">
            Aprenda metodologias de inovação e criatividade.
          </p>
          <div className="card-meta">
            <span className="meta-item">
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
              14 de abril de 2026
            </span>
            <span className="meta-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Sala 512 · Presencial
            </span>
            <span className="meta-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              6 horas complementares
            </span>
          </div>
          <button className="btn-inscrito">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Inscrito
          </button>
        </li>

        <li className="card-evento">
          <div className="card-badges">
            <span className="badge badge-em-breve">Em breve</span>
            <span className="badge badge-tipo">Hackathon</span>
          </div>
          <h3 className="card-titulo">Hackathon Sustentabilidade</h3>
          <p className="card-descricao">
            Palestra sobre os avanços recentes em IA generativa.
          </p>
          <div className="card-meta">
            <span className="meta-item">
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
              01 de maio de 2026
            </span>
            <span className="meta-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Campus + Online · Híbrido
            </span>
            <span className="meta-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              20 horas complementares
            </span>
          </div>
          <button className="btn-registrar">Registrar Participação</button>
        </li>

        <li className="card-evento">
          <div className="card-badges">
            <span className="badge badge-em-breve">Em breve</span>
            <span className="badge badge-tipo">Palestra</span>
          </div>
          <h3 className="card-titulo">Palestra: Mercado de Trabalho em TI</h3>
          <p className="card-descricao">
            Tendências e dicas para se posicionar no mercado.
          </p>
          <div className="card-meta">
            <span className="meta-item">
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
              16 de maio de 2026
            </span>
            <span className="meta-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Plataforma EAD · Online
            </span>
            <span className="meta-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              2 horas complementares
            </span>
          </div>
          <button className="btn-registrar">Registrar Participação</button>
        </li>

        <li className="card-evento">
          <div className="card-badges">
            <span className="badge badge-em-breve">Em breve</span>
            <span className="badge badge-tipo">Curso</span>
          </div>
          <h3 className="card-titulo">Curso de Excel Avançado</h3>
          <p className="card-descricao">
            Domine macros, tabelas dinâmicas e dashboards.
          </p>
          <div className="card-meta">
            <span className="meta-item">
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
              20 de maio de 2026
            </span>
            <span className="meta-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Plataforma EAD · Online
            </span>
            <span className="meta-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              10 horas complementares
            </span>
          </div>
          <button className="btn-registrar">Registrar Participação</button>
        </li>

        <li className="card-evento">
          <div className="card-badges">
            <span className="badge badge-em-breve">Em breve</span>
            <span className="badge badge-tipo">Feira</span>
          </div>
          <h3 className="card-titulo">Feira de Ciência e Tecnologia</h3>
          <p className="card-descricao">
            Exposição de projetos científicos e tecnológicos.
          </p>
          <div className="card-meta">
            <span className="meta-item">
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
              10 de março de 2026
            </span>
            <span className="meta-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Ginásio da Faculdade · Presencial
            </span>
            <span className="meta-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              6 horas complementares
            </span>
          </div>
          <button className="btn-registrar">Registrar Participação</button>
        </li>
      </ul>
    </section>
  );
}

export default Eventos;
