import React from "react";

function Codigo() {
  return (
    <div className="page-qrcode">
      <div className="qrcode-header">
        <h2>Scanear QR Code</h2>
        <p>
          Permita o acesso à câmera e aponte para o QR Code exibido no local do
          evento.
        </p>
      </div>
      <div className="card-camera">
        <div className="qr-placeholder">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="qr-icon"
          >
            <rect width="5" height="5" x="3" y="3" rx="1" />
            <rect width="5" height="5" x="16" y="3" rx="1" />
            <rect width="5" height="5" x="3" y="16" rx="1" />
            <path d="M21 16h-3a2 2 0 0 0-2 2v3M21 21v.01M12 7v3a2 2 0 0 1-2 2H7M3 12h.01M12 3h.01M12 16v.01M16 12h1M21 12v.01M12 21v-1" />
          </svg>
          <span className="qr-placeholder-label">Câmera desligada</span>
        </div>
      </div>
      <button className="btn-confirmar" type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
        Ativar câmera
      </button>
    </div>
  );
}

export default Codigo;
