import React, { useEffect, useState } from 'react';
import { fetchClients } from '../../../services/authService'; // Importe a função de API
import './ClientList.scss'; // Adicione seus estilos aqui

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadClients = async () => {
      const result = await fetchClients();
      if (result.success) {
        setClients(result.data);
      } else {
        setError(result.error || 'Erro ao buscar clientes');
      }
      setLoading(false);
    };

    loadClients();
  }, []);

  if (loading) return <div className="loading">Carregando...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="client-list">
      <div className="header">
        
        <div className="header-item">Nome</div>
        <div className="header-item">Email</div>
        <div className="header-item">CPF</div>
        <div className="header-item">TELEFONE</div>
      </div>
      {clients.map(client => (
        <div key={client._id} className="client-item">
          
          <div className="client-data">{client.name}</div>
          
          <div className="client-data">{client.email}</div>
          <div className="client-data">{client.cpf}</div>
          <div className="client-data">{client.phone}</div>
        </div>
      ))}
    </div>
  );
};

export default ClientList;
