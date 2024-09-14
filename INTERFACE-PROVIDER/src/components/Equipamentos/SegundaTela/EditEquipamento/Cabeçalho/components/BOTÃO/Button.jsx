import React from 'react'
import './Button.scss';
function Button() {
  return (
    <div className='ComponentCabeçalho-Button'>
        <div className='ComponentCabeçalho-Button-1'>
           
            <button>Sincronizar</button>
            <button>Apagar</button>
        </div>

        <div className='ComponentCabeçalho-Button-2'>
            <button>Reiniciar</button>
            <button>Resetar</button>
        </div>
        
    </div>
  )
}

export default Button