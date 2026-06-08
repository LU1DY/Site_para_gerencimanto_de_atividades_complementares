import React from "react";

function DElistaeventos({ eventos }) {
  return (
    <ul className="lista-eventos-dashboard">
      {eventos.map((evento) => {
        return (
          <li key={evento.id} className="card-evento">
            <div className="card-evento-header">
              <h3>{evento.titulo}</h3>
              <span className="badge-status">{evento.status}</span>
            </div>
            <div className="card-evento-meta">
              <span className="meta-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_234_671)">
                    <path
                      d="M4.73914 1.27844V4.21152"
                      stroke="inherit"
                      strokeWidth="1.09602"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.62756 1.27844V4.21152"
                      stroke="inherit"
                      strokeWidth="1.09602"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.2347 3.23401H3.10956C2.38961 3.23401 1.80597 3.81765 1.80597 4.5376V13.6627C1.80597 14.3827 2.38961 14.9663 3.10956 14.9663H12.2347C12.9547 14.9663 13.5383 14.3827 13.5383 13.6627V4.5376C13.5383 3.81765 12.9547 3.23401 12.2347 3.23401Z"
                      stroke="inherit"
                      strokeWidth="1.09602"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.80597 7.14478H13.5383"
                      stroke="inherit"
                      strokeWidth="1.09602"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_234_671">
                      <rect width="15.3443" height="15.3443" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {evento.data}
              </span>
              <span className="meta-item">
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
                  className="lucide lucide-map-pin h-3.5 w-3.5"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {evento.local}
              </span>
              <span className="meta-item">
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
                {evento.horasComplementares} horas complemantares
              </span>
            </div>
            <button className="btn-cancelar">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_234_698)">
                  <path
                    d="M11.7324 22.487C17.132 22.487 21.5093 17.8909 21.5093 12.2212C21.5093 6.55159 17.132 1.95544 11.7324 1.95544C6.33273 1.95544 1.95544 6.55159 1.95544 12.2212C1.95544 17.8909 6.33273 22.487 11.7324 22.487Z"
                    stroke="inherit"
                    strokeWidth="1.95539"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.6655 8.79944L8.79932 14.6656"
                    stroke="inherit"
                    strokeWidth="1.95539"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.79932 8.79944L14.6655 14.6656"
                    stroke="inherit"
                    strokeWidth="1.95539"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_234_698">
                    <rect width="23.4646" height="23.4646" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Cancelar inscrição
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default DElistaeventos;
