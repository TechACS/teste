import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.scss';
import { FiLogOut } from 'react-icons/fi';

function Navbar() {
  const navigate = useNavigate(); // Hook para navegação programática

  const handleLogout = () => {
    // Remove o token de autenticação e o nome do usuário do localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    // Redireciona para a página de login
    navigate('/login');
  };

  // Recupera o nome do usuário do localStorage
  const userName = localStorage.getItem('userName');

  return (
    <div>
      <nav className='nav'>
        <Link to="/">
          <h1 className='icon'>gerencia provider</h1>
        </Link>
        <ul>
          <li>
            <a target="_blank" rel="noopener noreferrer">
              <h1>{userName ? `Seja bem-vindo, ${userName}` : 'Bem-vindo!'}</h1>
            </a>
          </li>
          <li className='active'>
            <a href="meuzap" target="_blank" rel="noopener noreferrer">
              <h1>Suporte</h1>
            </a>
          </li>
          <li className='logout-icon' onClick={handleLogout}>
            <FiLogOut />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
