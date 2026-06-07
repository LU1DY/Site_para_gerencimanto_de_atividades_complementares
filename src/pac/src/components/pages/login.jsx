import React from "react";

function Login() {
  return (
    <section className="container-login">
      <header className="login-header">
        <div className="login-header-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" x2="3" y1="12" y2="12" />
          </svg>
        </div>
        <div className="column">
          <h1>Entrar na plataforma</h1>
          <p>Acesse sua conta para continuar.</p>
        </div>
      </header>

      <div className="login-card">
        <div className="login-card-header">
          <h2>Entrar</h2>
          <p>Use sua matrícula com 8 dígitos.</p>
        </div>

        <form className="login-form">
          <div className="form-group">
            <label className="form-label" for="matricula">
              Matrícula
            </label>
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
            <div className="form-group-row">
              <label className="form-label" for="senha">
                Senha
              </label>
              <a className="form-link" href="">
                Esqueceu sua senha?
              </a>
            </div>
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
                  <rect
                    width="18"
                    height="11"
                    x="3"
                    y="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </span>
              <input
                className="form-input"
                type="password"
                id="senha"
                name="senha"
                placeholder="Sua senha"
                autocomplete="current-password"
              />
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
                  <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path>
                  <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path>
                  <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path>
                  <path d="m2 2 20 20"></path>
                </svg>
              </button>
            </div>
          </div>

          <label className="checkbox">
            <input
              type="checkbox"
              id="manter-conectado"
              name="manter-conectado"
            />
            <span className="checkbox-label">Manter conectado</span>
          </label>

          <button className="btn-primary" type="submit">
            Entrar
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </form>

        <p className="login-footer">
          Ainda não tem conta?
          <a href="../pages/cadastro.html">Criar conta</a>
        </p>
      </div>
    </section>
  );
}

export default Login;
