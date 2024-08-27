import React, { useState, useEffect } from 'react';
import './ClienteComponetCabeçalho.scss';
import BackgroundComponente from '../../Background/Cabeçalho/BackgroundComponenteCabeçalho';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { searchClients } from '../../../services/authService'; // Importe a função de API

function ClienteComponet() {
  const [searchTerm, setSearchTerm] = useState('');
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Função para buscar clientes
  const searchClientsByQuery = async (term) => {
    setLoading(true);
    setError(null);

    console.log('Buscando clientes com o termo:', term); // Verifique se o termo está correto

    const result = await searchClients(term);
    
    console.log('Resultado da busca:', result); // Verifique o resultado da busca

    if (result.success) {
      setClients(result.data);
    } else {
      setError(result.error || 'Erro ao buscar clientes');
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
    <div>
      <BackgroundComponente>
        <div className="header-content">
          <div className="header-item add-client-container">
            <FontAwesomeIcon icon={faPlus} className="icon" />
            <span className="text">Cadastrar Cliente</span>
          </div>

          <div className="header-item search-container">
            <input 
              type="text" 
              placeholder="Buscar clientes..." 
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {loading && <span className="loading-text">Carregando...</span>}
            {error && <span className="error-text">{error}</span>}
          </div>

          <div className="header-item export-container">
            <FontAwesomeIcon icon={faFileExcel} className="icon" />
            <span className="text">Exportar para Excel</span>
          </div>
        </div>
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
        {/* Renderize a lista de clientes ou outro conteúdo conforme necessário */}
      </BackgroundComponente>
    </div>
  );
}

export default ClienteComponet;
