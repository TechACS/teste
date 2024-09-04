import React, { useState, useEffect } from 'react';
import './ClienteComponetSubCabeçalho.scss';
import BackgroundComponenteSubcabeçalho from '../../Background/SubCabeçalho/BackgroundComponenteSubcabeçalho';
import ClientList from '../ClienteList/ClientList';
import CadastrarClient from '../CadastrarClient/CadastrarClient';
import ClienteComponentecabecalho from '../Cabeçalho/ClienteComponetCabeçalho';
import Pagination from '../ClienteList/Pagination/Pagination';
import { fetchClients } from '../../../services/authService'; // Ajuste o caminho conforme necessário

const ClienteComponet = () => {
  const [view, setView] = useState("list");
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

  const handleCancel = () => {
    setView("list");
  };

  const handleAddClient = () => {
    setView("form");
  };

  if (loading) return <div className="loading">Carregando...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <ClienteComponentecabecalho newClient={view === "form"} botaoClicado={handleAddClient} />
      <BackgroundComponenteSubcabeçalho>
        {view === "form" ? 
          <CadastrarClient onCancel={handleCancel} /> 
          : <>
              <ClientList 
                clients={clients} 
                currentPage={currentPage} 
                itemsPerPage={itemsPerPage} 
              />
              <Pagination 
                currentPage={currentPage} 
                totalItems={clients.length} 
                itemsPerPage={itemsPerPage} 
                onPageChange={setCurrentPage} 
              />
            </>
        }
      </BackgroundComponenteSubcabeçalho>
    </div>
  );
}

export default ClienteComponet;
