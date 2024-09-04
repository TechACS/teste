import React, { useState, useEffect } from 'react';
import './EquipamentoComponetCabeçalho.scss';
import BackgroundComponente from '../../Background/Cabeçalho/BackgroundComponenteCabeçalho';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'; // Não se esqueça de importar PropTypes
import { searchClients } from '../../../services/authService'; // Importe a função de API
import ExportToExcelButton from '../../ExportToExcelButton/ExportToExcelButton';
const ClienteComponetecabecalho = ({ newClient, botaoClicado }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Função para buscar clientes
  const searchClientsByQuery = async (term) => {
    setLoading(true);
    setError(null);

    const result = await searchClients(term);

    if (result.success) {
      setClients(result.data);
    } else {
      setError(result.error || 'Erro ao buscar equipamentos');
    }
    setLoading(false);
  };

  // Atualiza a busca quando o termo muda
  useEffect(() => {
    if (searchTerm.trim() !== '') {
      searchClientsByQuery(searchTerm);
    } else {
      setClients([]); // Limpa a lista de clientes se o termo de busca estiver vazio
    }
  }, [searchTerm]);

  return (
    <BackgroundComponente>
      <div className="header-content">
        <div   className="header-item add-client-container">
        <div  className={newClient === "clicado" ? "ativo" : ""}
            onClick={() => botaoClicado("clicado")} >
          <FontAwesomeIcon icon={faPlus} className="icon" />
          <span >
            Cadastrar Cliente
          </span>
        </div>

        </div>
       

        <div className="header-item search-container">
          <input 
            type="text" 
            placeholder="Buscar equipamentos..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {loading && <span className="loading-text">Carregando...</span>}
          {error && <span className="error-text">{error}</span>}
        </div>

        <div className="header-item export-container">
          <ExportToExcelButton></ExportToExcelButton>
        </div>
      </div>
    </BackgroundComponente>
  );
}

ClienteComponetecabecalho.propTypes = {
  newClient: PropTypes.bool.isRequired,
  botaoClicado: PropTypes.func.isRequired,
};

export default ClienteComponetecabecalho;
