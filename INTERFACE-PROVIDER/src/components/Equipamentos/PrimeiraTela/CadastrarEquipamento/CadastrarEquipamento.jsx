import React, { useState } from 'react';
import './CadastrarEquipamento.scss';
import FormButtons2 from '../../../BUTTONS/FormButton'; // Certifique-se de que o caminho está correto
import { cadastrarClient } from '../../../../services/cadastrarClient';

const CadastrarClient = ({ onCancel }) => {
  const [formData, setFormData] = useState({
    nome: '',
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enviar os dados conforme esperado pelo backend
    const result = await cadastrarClient(
      formData.nome,
      formData.cpf,
      formData.email,
      formData.celular,
      formData.rg,
      formData.cnpj,
      formData.dataNascimento,
      formData.residenciaNumero, // Assumido que é o bairro
      formData.residenciaNumero  // Assumido que é o numbhome
    );

    if (result.success) {
      alert(result.message);
      setFormData({
        nome: '',
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
      alert(result.error);
    }
  };

  return (
    <div className="cadastrar-client">
      <h1 className="title">dgb</h1>
      <form onSubmit={handleSubmit}>
        <div className="section geral">
          <h2 className="section-title">GERAL</h2>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
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
          </div>
          <div className="form-group input-group">
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
            <div className="input-group-item">
              <label htmlFor="emailObservacoes">Observações sobre o email</label>
              <input
                type="text"
                id="emailObservacoes"
                name="emailObservacoes"
                value={formData.observacoes}
                onChange={handleChange}
                placeholder="Observações sobre o email"
              />
            </div>
          </div>
          <div className="form-group input-group">
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

        <FormButtons2 onCancel={onCancel} /> {/* Passando a prop onCancel */}
      </form>
    </div>
  );
}

export default CadastrarClient;
