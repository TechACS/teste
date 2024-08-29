import React from 'react'
import PropTypes from 'prop-types';

function ButtonJanelaComponent({descrição}) {
  return (
    <div>
        <button>
            {descrição}
        </button>
    </div>
  )
}
ButtonJanelaComponent.propTypes = {
    descrição: PropTypes.string.isRequired,
    botaoClicado: PropTypes.func.isRequired,
  };
export default ButtonJanelaComponent