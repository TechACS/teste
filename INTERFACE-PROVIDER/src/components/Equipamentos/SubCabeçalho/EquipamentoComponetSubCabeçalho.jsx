import React, { useState, useEffect } from 'react';
import './EquipamentoComponetSubCabeçalho.scss';
import BackgroundComponenteSubcabeçalho from '../../Background/SubCabeçalho/BackgroundComponenteSubcabeçalho';
import EquipamentoList from '../ClienteList/EquipamentoList';
import CadastrarEquipamento from '../CadastrarClient/CadastrarClient/';
import EquipamentoComponentecabecalho from '../Cabeçalho/EquipamentoComponetCabeçalho';
import Pagination from '../ClienteList/Pagination/Pagination';
import { fetchClients } from '../../../services/authService'; // Ajuste o caminho conforme necessário

const EquipamentoComponetSubCabeçalho = () => {
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
        setError(result.error || 'Erro ao buscar Equipamentos');
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
      <EquipamentoComponentecabecalho newClient={view === "form"} botaoClicado={handleAddClient} />
      <BackgroundComponenteSubcabeçalho>
        {view === "form" ? 
          <CadastrarEquipamento onCancel={handleCancel} /> 
          : <>
              <EquipamentoList 
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

export default EquipamentoComponetSubCabeçalho;
