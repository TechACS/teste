import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JanelasBackground from '../../components/janelasBackground/janelasBackground';
import { searchClientByCpf,  updateClient } from '../../../../../../services/ListarClient'; 
//import { updateClient } from '../../../../../../services/EditClient'; // Importe a função de atualização
import './GeralComponents.scss';

const GeralComponent = () => {
  const { cpf } = useParams(); // Obtém o CPF da URL
  const [clientData, setClientData] = useState(null);
  const [error, setError] = useState(null);

  // Buscar dados do cliente quando o CPF mudar
  useEffect(() => {
    const fetchClientData = async () => {
      const result = await searchClientByCpf(cpf);

      if (result.success) {
        setClientData(result.data);
      } else {
        setError(result.error);
      }
    };

    fetchClientData();
  }, [cpf]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData({
      ...clientData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Atualizar cliente com base nos dados do formulário
    const result = await updateClient(cpf, clientData);

    if (result.success) {
      alert('Cliente atualizado com sucesso!');
    } else {
      alert(`Erro ao atualizar cliente: ${result.error}`);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='GeralComponent'>
      <JanelasBackground>
        <div className="edit-client">
          <h1>Editar Cliente</h1>
          {clientData ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={clientData.name || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={clientData.cpf || ''}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={clientData.email || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Telefone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={clientData.phone || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="rg">RG</label>
                <input
                  type="text"
                  id="rg"
                  name="rg"
                  value={clientData.rg || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cnpj">CNPJ</label>
                <input
                  type="text"
                  id="cnpj"
                  name="cnpj"
                  value={clientData.cnpj || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="dateNasc">Data de Nascimento</label>
                <input
                  type="date"
                  id="dateNasc"
                  name="dateNasc"
                  value={clientData.dateNasc || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bairro">Bairro</label>
                <input
                  type="text"
                  id="bairro"
                  name="bairro"
                  value={clientData.bairro || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="numbhome">Número da Residência</label>
                <input
                  type="text"
                  id="numbhome"
                  name="numbhome"
                  value={clientData.numbhome || ''}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Salvar</button>
            </form>
          ) : (
            <div>Carregando...</div>
          )}
        </div>
      </JanelasBackground>
    </div>
  );
};

export default GeralComponent;
