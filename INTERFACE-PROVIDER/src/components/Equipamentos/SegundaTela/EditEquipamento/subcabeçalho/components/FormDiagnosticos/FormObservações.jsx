// FormObservações.jsx
import React, { useState } from 'react';
import './FormObservações.scss';
//import NewUpload from '../NewUpload/NewUpload'; // Verifique o caminho correto
import FormButtons2 from '../../../../../../BUTTONS/FormButton';
const FormObservações = ({ onCancel }) => {
  const [formData, setFormData] = useState({
    observacao: '',
    alerta: '',
    detalhes: '',
    prioridade: '',
    data: '',
    anexo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
  };

  return (
    <div className="observacoes">
      <h1 className="title">Observações</h1>

      <form onSubmit={handleSubmit}>
        {/* Campos do formulário */}
        <div  className='teste2'>

        <div className="form-group form-group-large">
          <label htmlFor="observacao">Observação</label>
          <textarea
            id="observacao"
            name="observacao"
            value={formData.observacao}
            onChange={handleChange}
            placeholder="Digite uma observação"
            rows="4"
          />
        </div>

        <div className="form-group form-group-small">
          <label htmlFor="detalhes">Detalhes</label>
          <textarea
            id="detalhes"
            name="detalhes"
            value={formData.detalhes}
            onChange={handleChange}
            placeholder="Digite detalhes adicionais"
            rows="4"
          />
        </div>

        </div>
       

        <div className="form-actions">
        <FormButtons2 onCancel={onCancel} />
        </div>
        
      </form>
    </div>
  );
};

export default FormObservações;
