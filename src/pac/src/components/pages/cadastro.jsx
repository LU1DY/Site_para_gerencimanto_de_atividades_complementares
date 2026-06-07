import React from 'react'

function Cadastro() {
  return (
   <section className="container-cadastro">
    <header className="cadastro-header">
      <div className="cadastro-header-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" x2="19" y1="8" y2="14" />
          <line x1="22" x2="16" y1="11" y2="11" />
        </svg>
      </div>
      <div className="column">
        <h1>Criar Conta</h1>
        <p>Cadastre-se para acessar a plataforma</p>
      </div>
    </header>

    <div className="cadastro-card">
      <div className="cadastro-card-header">
        <h2>Criar conta</h2>
        <p>Cadastre-se para registrar suas horas complementares.</p>
      </div>

      <form className="cadastro-form">
        <div className="form-group">
          <label className="form-label" htmlFor="nome">Nome completo</label>
          <div className="input">
            <span className="input-icon">
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
                className="lucide lucide-user h-4 w-4 text-muted-foreground"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </span>
            <input
              className="form-input"
              type="text"
              id="nome"
              name="nome"
              placeholder="Seminário de Inteligência Artificial"
              autocomplete="name"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="matricula">Matrícula</label>
            <div className="input">
              <span className="input-icon">
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
                  className="lucide lucide-id-card absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                >
                  <path d="M16 10h2"></path>
                  <path d="M16 14h2"></path>
                  <path d="M6.17 15a3 3 0 0 1 5.66 0"></path>
                  <circle cx="9" cy="11" r="2"></circle>
                  <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                </svg>
              </span>
              <input
                className="form-input"
                type="text"
                id="matricula"
                name="matricula"
                placeholder="00000000"
                maxlength="8"
                inputmode="numeric"
                autocomplete="username"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="curso">Curso</label>
            <div className="select">
              <select className="form-select" id="curso" name="curso">
                <option value="" disabled selected>Selecione</option>
                <option value="cc">Ciência da Computação</option>
                <option value="si">Sistemas de Informação</option>
                <option value="eng">Engenharia de Software</option>
                <option value="ads">Análise e Desenvolvimento</option>
              </select>
              <svg
                className="select-arrow"
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
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">E-mail institucional</label>
          <div className="input">
            <span className="input-icon">
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
                className="lucide lucide-mail h-4 w-4 text-muted-foreground"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </span>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              placeholder="0000000@univ.edu.br"
              autocomplete="email"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="senha">Senha</label>
          <div className="input">
            <span className="input-icon">
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
                className="lucide lucide-lock absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <button
                className="input-action"
                type="button"
                id="toggle-senha"
                aria-label="Mostrar senha"
              >
                <svg
                  id="open-eye"
                  className=""
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
                <svg
                  className="display-none"
                  id="eye-close"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-eye-off h-4 w-4"
                >
                  <path
                    d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"
                  ></path>
                  <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path>
                  <path
                    d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"
                  ></path>
                  <path d="m2 2 20 20"></path>
                </svg>
              </button>
            </span>
            <input
              className="form-input"
              type="password"
              id="senha"
              name="senha"
              placeholder="Sua senha"
              autocomplete="new-password"
            />
          </div>
        </div>

        <label className="checkbox">
          <input type="checkbox" id="termos" name="termos" />
          <span className="checkbox-label">
            Concordo com os
            <a href="">Termos de Uso</a> e a
            <a href="">Política de Privacidade</a>.
          </span>
        </label>

        <button className="btn-primary" type="submit">
          Criar conta
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
            className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-0.5"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </form>

      <p className="cadastro-footer">
        Já possui uma conta?
        <a href="../pages/login.html">Entrar</a>
      </p>
    </div>
  </section>
  )
}

export default Cadastro
