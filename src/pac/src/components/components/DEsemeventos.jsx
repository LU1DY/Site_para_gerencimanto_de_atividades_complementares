import React from "react";

function DEsemeventos({ setCurrentPage }) {
  return (
    <div className="meus-eventos-vazio">
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
        className="lucide lucide-ticket h-10 w-10 mx-auto mb-3 opacity-40"
      >
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
        <path d="M13 5v2"></path>
        <path d="M13 17v2"></path>
        <path d="M13 11v2"></path>
      </svg>
      <p>Você ainda não se inscreveu em nenhum evento.</p>
      <button className="btn-explorar-eventos">
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage("eventos");
          }}
        >
          Ver eventos disponíveis
        </a>
      </button>
    </div>
  );
}

export default DEsemeventos;
