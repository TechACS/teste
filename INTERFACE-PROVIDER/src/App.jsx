import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import { FiLogOut } from 'react-icons/fi';
//import EquipamentosList from './components/equipamento/EquipamentosList';
import Navbar from './components/navbar/navbar';
function App() {
  const navigate = useNavigate(); // Hook para navegação

  // Função de logout
  const handleLogout = () => {
    // Limpa o token JWT do localStorage (ou cookies, dependendo da implementação)
    localStorage.removeItem('token');
    
    // Redireciona o usuário para a página de login
    navigate('/login'); // Certifique-se de que '/login' é a rota para a página de login
  };

  return (
    <div className="content">
      <Navbar></Navbar>
  

   
      <EquipamentosList></EquipamentosList>
      <Outlet />
    </div>
  );
}

export default App;
