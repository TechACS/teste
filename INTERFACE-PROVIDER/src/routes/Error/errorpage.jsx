import React from 'react';
import { Link } from 'react-router-dom'; // Para navegação
import './errorpage.scss';

function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oops! Página não encontrada.</p>
        <p className="error-description">
          A página que você está procurando pode ter sido movida ou excluída.
        </p>
        <Link to="/" className="error-link">Voltar para a página inicial</Link>
      </div>
    </div>
  );
}

export default ErrorPage;