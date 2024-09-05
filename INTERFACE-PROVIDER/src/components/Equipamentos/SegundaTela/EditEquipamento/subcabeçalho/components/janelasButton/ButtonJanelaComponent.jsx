import React from 'react';
import PropTypes from 'prop-types';
import './ButtonJanelaComponent.scss';

function ButtonJanelaComponent({ descrição, botaoClicado, isActive }) {
  return (
    <div className="button-container">
      <button 
        className={isActive ? 'active' : ''} 
        onClick={botaoClicado}
      >
        {descrição}
      </button>
    </div>
  );
}

ButtonJanelaComponent.propTypes = {
  descrição: PropTypes.string.isRequired,
  botaoClicado: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired, // Adiciona isActive como prop obrigatória
};

export default ButtonJanelaComponent;
