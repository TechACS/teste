import React from 'react';
import './ClientList.scss';
import { Link } from 'react-router-dom';

const ClientList = ({ clients, currentPage, itemsPerPage }) => {
  // Calcular a página atual dos clientes
  const indexOfLastClient = currentPage * itemsPerPage;
  const indexOfFirstClient = indexOfLastClient - itemsPerPage;
  const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient);

  return (
    <div className="client-list">
      <div className="header">
        <div className="header-item">Nome</div>
        <div className="header-item">Email</div>
        <div className="header-item">CPF</div>
        <div className="header-item">Telefone</div>
      </div>
      
      {currentClients.map(client => (
        <Link 
          key={client._id} 
          to={`/EditClient/${client.cpf}`} 
          className="client-item-link"
        >
          <div className="client-item">
            <div className="client-data">{client.name}</div>
            <div className="client-data">{client.email}</div>
            <div className="client-data">{client.cpf}</div>
            <div className="client-data">{client.phone}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ClientList;
