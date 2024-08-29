import React from 'react';
import PropTypes from 'prop-types';
import './ButtonJanelaComponent.scss';

function ButtonJanelaComponent({ descrição, botaoClicado }) {
  return (
    <div className="button-container">
      <button onClick={botaoClicado}>
        {descrição}
      </button>
    </div>
  );
}

ButtonJanelaComponent.propTypes = {
  descrição: PropTypes.string.isRequired,
  botaoClicado: PropTypes.func.isRequired,
};

export default ButtonJanelaComponent;
