import React, { useState, useEffect } from 'react';
import './infoClient.scss'; // Certifique-se de que o caminho está correto
import FormButtons2 from '../../../../../BUTTONS/FormButton'; // Ajuste o caminho se necessário
import { searchClientByCpf } from '../../../../../../services/ListarClient';
import { updateClient } from '../../../../../../services/EditClient'; // Importe a função de atualização

const InfoClient = ({ cpf, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    rg: '',
    cnpj: '',
    dataNascimento: '',
    celular: '',
    email: '',
    observacoes: '',
    residenciaNumero: '',
    residenciaComplemento: '',
    residenciaObservacoes: '',
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const result = await searchClientByCpf(cpf);

        if (result.success) {
          setFormData({
            name: result.data.name || '',
            cpf: result.data.cpf || '',
            rg: result.data.rg || '',
            cnpj: result.data.cnpj || '',
            dataNascimento: result.data.dataNascimento || '',
            celular: result.data.celular || '',
            email: result.data.email || '',
            observacoes: result.data.observacoes || '',
            residenciaNumero: result.data.residenciaNumero || '',
            residenciaComplemento: result.data.residenciaComplemento || '',
            residenciaObservacoes: result.data.residenciaObservacoes || '',
          });
        } else {
          setError(result.error);
        }
      } catch (err) {
        setError('Error fetching client data');
      }
    };

    fetchClientData();
  }, [cpf]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await updateClient(cpf, formData);

      if (result.success) {
        alert('Cliente atualizado com sucesso!');
        setFormData({
          name: '',
          cpf: '',
          rg: '',
          cnpj: '',
          dataNascimento: '',
          celular: '',
          email: '',
          observacoes: '',
          residenciaNumero: '',
          residenciaComplemento: '',
          residenciaObservacoes: '',
        });
      } else {
        alert(`Erro ao atualizar cliente: ${result.error}`);
      }
    } catch (err) {
      alert('Erro ao atualizar cliente');
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="cadastrar-client">
      <form onSubmit={handleSubmit}>
        <div className="section geral">
          <h2 className="section-title">Informações</h2>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nome completo"
            />
          </div>
          <div className="form-group input-group">
            <div className="input-group-item">
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                placeholder="000.000.000-00"
                readOnly
              />
            </div>
            <div className="input-group-item">
              <label htmlFor="rg">RG</label>
              <input
                type="text"
                id="rg"
                name="rg"
                value={formData.rg}
                onChange={handleChange}
                placeholder="00.000.000-0"
              />
            </div>
            <div className="input-group-item">
              <label htmlFor="cnpj">CNPJ</label>
              <input
                type="text"
                id="cnpj"
                name="cnpj"
                value={formData.cnpj}
                onChange={handleChange}
                placeholder="00.000.000/0000-00"
              />
            </div>
            <div className="input-group-item">
              <label htmlFor="dataNascimento">Data de Nascimento</label>
              <input
                type="date"
                id="dataNascimento"
                name="dataNascimento"
                value={formData.dataNascimento}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="section-contatos">
          <h2 className="section-title">CONTATOS</h2>
          <div className="form-group input-group">
            <div className="input-group-item">
              <label htmlFor="celular">Celular</label>
              <input
                type="tel"
                id="celular"
                name="celular"
                value={formData.celular}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
              />
            </div>
            <div className="input-group-item">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@exemplo.com"
              />
            </div>
          </div>
          <div className="form-group input-group">
            <div className="input-group-item">
              <label htmlFor="observacoes">Observações</label>
              <input
                type="text"
                id="observacoes"
                name="observacoes"
                value={formData.observacoes}
                onChange={handleChange}
                placeholder="Observações adicionais"
              />
            </div>
            <div className="input-group-item">
              <label htmlFor="residenciaNumero">Residência - Número</label>
              <input
                type="text"
                id="residenciaNumero"
                name="residenciaNumero"
                value={formData.residenciaNumero}
                onChange={handleChange}
                placeholder="Número da residência"
              />
            </div>
            <div className="input-group-item">
              <label htmlFor="residenciaComplemento">Complemento</label>
              <input
                type="text"
                id="residenciaComplemento"
                name="residenciaComplemento"
                value={formData.residenciaComplemento}
                onChange={handleChange}
                placeholder="Complemento"
              />
            </div>
            <div className="input-group-item">
              <label htmlFor="residenciaObservacoes">Observações</label>
              <input
                type="text"
                id="residenciaObservacoes"
                name="residenciaObservacoes"
                value={formData.residenciaObservacoes}
                onChange={handleChange}
                placeholder="Observações sobre a residência"
              />
            </div>
          </div>
        </div>

        <div className="form-actions">
          <FormButtons2 onCancel={onCancel} />
        </div>
      </form>
    </div>
  );
};

export default InfoClient;
