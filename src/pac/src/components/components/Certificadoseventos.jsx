import React from "react";
import DElistaeventos from "./DElistaeventos";
import DEsemeventos from "./DEsemeventos";

function Certificadoseventos({ setCurrentPage }) {
  const eventos = [
    {
      id: 1,
      titulo: "Seminário de Inteligência Artificial",
      status: "Em breve",
      data: "9 de abril de 2026",
      local: "Auditório Central",
      modalidade: "Presencial",
      horasComplementares: 4,
      acao: "Cancelar inscrição",
    },
    {
      id: 2,
      titulo: "Seminário de Inteligência Artificial",
      status: "Em breve",
      data: "9 de abril de 2026",
      local: "Auditório Central",
      modalidade: "Presencial",
      horasComplementares: 4,
    },
  ];
  return (
    <section className="container-meus-eventos">
      <header className="header-meus-eventos">
        <div className="titulo-bloco">
          <h2>Meus Eventos</h2>
          <p>Eventos nos quais você está inscrito</p>
        </div>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage("eventos");
          }}
        >
          Explorar eventos
        </a>
      </header>
      {eventos.length > 0 ? (
        <DElistaeventos eventos={eventos} />
      ) : (
        <DEsemeventos setCurrentPage={setCurrentPage} />
      )}
    </section>
  );
}

export default Certificadoseventos;
