import React from 'react';
import './FormButtons.scss';

const FormButtons = () => {
  return (
    <div className="form-buttons">
      <button type="submit" className="btn salvar">Salvar</button>
      <button type="button" className="btn sair">Sair</button>
    </div>
  );
}

export default FormButtons;
