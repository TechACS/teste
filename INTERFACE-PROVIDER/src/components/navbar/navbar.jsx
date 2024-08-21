import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.scss';
import { FiLogOut } from 'react-icons/fi';

function Navbar() {
  const navigate = useNavigate(); // Hook para navegação programática

  const handleLogout = () => {
    // Remove o token de autenticação ou qualquer outro dado do localStorage
    localStorage.removeItem('token'); // Certifique-se de que esta chave é a correta para o seu caso
    // Redireciona para a página de login
    navigate('/login');
  };

  return (
    <div>
      <nav className='nav'>
        <Link to="/">
          <h1 className='icon'>Central client</h1>
        </Link>
        <ul>
        <li>
            <a  target="_blank" rel="noopener noreferrer">
              <h1>seja bem vindo @user</h1>
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