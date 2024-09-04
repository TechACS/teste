import React, { useState, useEffect } from 'react';
import './EquipamentoComponetSubCabeçalho.scss';
import BackgroundComponenteSubcabeçalho from '../../Background/SubCabeçalho/BackgroundComponenteSubcabeçalho';
import EquipamentoList from '../EquipamentoList/EquipamentoList';
import CadastrarEquipamento from '../CadastrarEquipamento/CadastrarEquipamento';
import EquipamentoComponentecabecalho from '../Cabeçalho/EquipamentoComponetCabeçalho';
import Pagination from '../EquipamentoList/Pagination/Pagination';
import { fetchEquipamentos } from '../../../services/ListarEquipamentos'; // Ajuste o caminho conforme necessário

const EquipamentoComponetSubCabeçalho = () => {
  const [view, setView] = useState("list");
  const [Equipamentos, setEquipamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const loadEquipamentos = async () => {
      const result = await fetchEquipamentos();
      if (result.success) {
        setEquipamentos(result.data);
      } else {
        setError(result.error || 'Erro ao buscar Equipamentos');
      }
      setLoading(false);
    };

    loadEquipamentos();
  }, []);

  const handleCancel = () => {
    setView("list");
  };

  const handleAddEquipamento = () => {
    setView("form");
  };

  if (loading) return <div className="loading">Carregando...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <EquipamentoComponentecabecalho newEquipamento={view === "form"} botaoClicado={handleAddEquipamento} />
      <BackgroundComponenteSubcabeçalho>
        {view === "form" ? 
          <CadastrarEquipamento onCancel={handleCancel} /> 
          : <>
              <EquipamentoList 
                Equipamentos={Equipamentos} 
                currentPage={currentPage} 
                itemsPerPage={itemsPerPage} 
              />
              <Pagination 
                currentPage={currentPage} 
                totalItems={Equipamentos.length} 
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
