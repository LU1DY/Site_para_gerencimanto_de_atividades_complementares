import React from "react";

function Atividades() {
  return (
    <section className="container-atividades">
      <header className="atividades-header">
        <h1>Atividades Válidas</h1>
        <p>
          Confira quais atividades podem ser contabilizadas como horas
          complementares
        </p>
      </header>
      <ul className="grid-atividades" id="grid-atividades">
        <li className="card-atividade">
          <h3>Participação em Eventos Acadêmicos</h3>
          <span className="badge-categoria badge-ensino">Ensino</span>
          <p>Seminários, congressos, palestras e similares.</p>
          <span className="card-maximo">
            Máximo: <span>40h</span>
          </span>
        </li>

        <li className="card-atividade">
          <h3>Atividades de Extensão</h3>
          <span className="badge-categoria badge-extensao">Extensão</span>
          <p>Projetos comunitários, voluntariado, ações sociais.</p>
          <span className="card-maximo">
            Máximo: <span>30h</span>
          </span>
        </li>

        <li className="card-atividade">
          <h3>Cursos Extracurriculares</h3>
          <span className="badge-categoria badge-ensino">Ensino</span>
          <p>Cursos online ou presenciais fora da grade curricular.</p>
          <span className="card-maximo">
            Máximo: <span>60h</span>
          </span>
        </li>

        <li className="card-atividade">
          <h3>Iniciação Científica</h3>
          <span className="badge-categoria badge-pesquisa">Pesquisa</span>
          <p>Participação em projetos de pesquisa com orientador.</p>
          <span className="card-maximo">
            Máximo: <span>50h</span>
          </span>
        </li>

        <li className="card-atividade">
          <h3>Monitoria</h3>
          <span className="badge-categoria badge-ensino">Ensino</span>
          <p>Atuação como monitor em disciplinas da graduação.</p>
          <span className="card-maximo">
            Máximo: <span>40h</span>
          </span>
        </li>

        <li className="card-atividade">
          <h3>Hackathons e Competições</h3>
          <span className="badge-categoria badge-inovacao">Inovação</span>
          <p>Participação em maratonas de programação e competições.</p>
          <span className="card-maximo">
            Máximo: <span>20h</span>
          </span>
        </li>

        <li className="card-atividade">
          <h3>Experiência Profissional</h3>
          <span className="badge-categoria badge-estagio">Estágio</span>
          <p>
            Desenvolvimento de atividades práticas na área de formação com
            supervisão profissional.
          </p>
          <span className="card-maximo">
            Máximo: <span>200h</span>
          </span>
        </li>
      </ul>
    </section>
  );
}

export default Atividades;
