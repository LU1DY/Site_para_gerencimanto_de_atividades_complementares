import React from "react";

function Visaogeral({ setCurrentPage }) {
  return (
    <section className="container-visao-geral">
      <ul className="list-cards-dashboard">
        <li>
          <div className="card graph">
            <div className="card-description border-graph">
              <span className="card-hours">22h</span>
              <span className="card-title">de 120h</span>
            </div>
            <p>
              <span>
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
                  className="lucide lucide-trending-up h-4 w-4"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </span>
              18% concluído
            </p>
          </div>
        </li>
        <div className="grid-cards-dashboard">
          <li>
            <div className="card">
              <div className="icon-card horas-validadas">
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
                  className="lucide lucide-circle-check h-5 w-5 text-success"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="card-description">
                <span className="card-hours">22h</span>
                <span className="card-title">Horas Validadas</span>
              </div>
            </div>
          </li>
          <li>
            <div className="card">
              <div className="icon-card horas-restantes">
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
                  className="lucide lucide-circle-alert h-5 w-5 text-muted-foreground"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
                </svg>
              </div>
              <div className="card-description">
                <span className="card-hours">86h</span>
                <span className="card-title">Horas Restantes</span>
              </div>
            </div>
          </li>
          <li>
            <div className="card">
              <div className="icon-card certificados-enviados">
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
              <div className="card-description">
                <span className="card-hours">4</span>
                <span className="card-title">Certificados Enviados</span>
              </div>
            </div>
          </li>
          <li>
            <div className="card">
              <div className="icon-card horas-pendentes">
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
              <div className="card-description">
                <span className="card-hours">12h</span>
                <span className="card-title">Horas Pendentes</span>
              </div>
            </div>
          </li>
        </div>
      </ul>
      <div className="info-dashboard">
        <section className="card-dashboard">
          <header className="header-info-dashboard">
            <h2>Próximos Eventos</h2>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage("eventos");
              }}
            >
              Ver Todos
            </a>
          </header>
          <ul className="list-dashboard-eventos">
            <li>
              <div className="card-icon">
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
                  className="lucide lucide-calendar-days h-5 w-5 text-primary"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                  <path d="M8 14h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 18h.01"></path>
                  <path d="M12 18h.01"></path>
                  <path d="M16 18h.01"></path>
                </svg>
              </div>
              <div className="column">
                <h3>Seminário de Inteligência Artificial</h3>
                <p>
                  <time dateTime="2026-04-09">09/04/2026</time> - 4h -
                  presencial
                </p>
              </div>
            </li>
            <li>
              <div className="card-icon">
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
                  className="lucide lucide-calendar-days h-5 w-5 text-primary"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                  <path d="M8 14h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 18h.01"></path>
                  <path d="M12 18h.01"></path>
                  <path d="M16 18h.01"></path>
                </svg>
              </div>

              <div className="column">
                <h3>Workshop de Design Thinking</h3>
                <p>
                  <time dateTime="2026-04-14">14/04/2026</time> - 6h -
                  presencial
                </p>
              </div>
            </li>
            <li>
              <div className="card-icon">
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
                  className="lucide lucide-calendar-days h-5 w-5 text-primary"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                  <path d="M8 14h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 18h.01"></path>
                  <path d="M12 18h.01"></path>
                  <path d="M16 18h.01"></path>
                </svg>
              </div>
              <div className="column">
                <h3>Hackathon Sustentabilidade</h3>
                <p>
                  <time dateTime="2026-05-01">01/05/2026</time> - 20h - híbrido
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section className="card-dashboard">
          <header className="header-info-dashboard">
            <h2>Certificados Recentes</h2>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage("certificados");
              }}
            >
              Ver Todos
            </a>
          </header>

          <ul className="list-certificados">
            <li>
              <div className="card-icon">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7499 2.5H7.49994C6.8369 2.5 6.20101 2.76339 5.73217 3.23223C5.26333 3.70107 4.99994 4.33696 4.99994 5V25C4.99994 25.663 5.26333 26.2989 5.73217 26.7678C6.20101 27.2366 6.8369 27.5 7.49994 27.5H22.4999C23.163 27.5 23.7989 27.2366 24.2677 26.7678C24.7365 26.2989 24.9999 25.663 24.9999 25V8.75L18.7499 2.5Z"
                    stroke="inherit"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.4999 2.5V7.5C17.4999 8.16304 17.7633 8.79893 18.2322 9.26777C18.701 9.73661 19.3369 10 19.9999 10H24.9999"
                    stroke="inherit"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.0739 14.3906L12.2078 20.2568"
                    stroke="inherit"
                    strokeWidth="1.95539"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.2078 14.3906L18.0739 20.2568"
                    stroke="inherit"
                    strokeWidth="1.95539"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="column">
                <h3>Seminário de Biblioteconomia</h3>
                <p>
                  8h · <strong>Negado</strong>
                </p>
              </div>
            </li>

            <li>
              <div className="card-icon">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7499 2.5H7.49994C6.8369 2.5 6.20101 2.76339 5.73217 3.23223C5.26333 3.70107 4.99994 4.33696 4.99994 5V25C4.99994 25.663 5.26333 26.2989 5.73217 26.7678C6.20101 27.2366 6.8369 27.5 7.49994 27.5H22.4999C23.163 27.5 23.7989 27.2366 24.2677 26.7678C24.7365 26.2989 24.9999 25.663 24.9999 25V8.75L18.7499 2.5Z"
                    stroke="inherit"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.4999 2.5V7.5C17.4999 8.16304 17.7633 8.79893 18.2322 9.26777C18.701 9.73661 19.3369 10 19.9999 10H24.9999"
                    stroke="inherit"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.7678 20.5604C16.7339 20.5604 18.3278 18.9666 18.3278 17.0004C18.3278 15.0343 16.7339 13.4404 14.7678 13.4404C12.8016 13.4404 11.2078 15.0343 11.2078 17.0004C11.2078 18.9666 12.8016 20.5604 14.7678 20.5604Z"
                    stroke="inherit"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.7678 14.8643V17.0003L16.1918 17.7123"
                    stroke="inherit"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="column">
                <h3>Curso de Python Básico</h3>
                <p>
                  12h · <strong>Pendente</strong>
                </p>
              </div>
            </li>

            <li>
              <div className="card-icon">
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

              <div className="column">
                <h3>Curso de Python Básico</h3>
                <p>
                  12h - <strong>Pendente</strong>
                </p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Visaogeral;
