import React from 'react'
import './Button.scss';
import { FaTrashCan } from "react-icons/fa6";
import { MdSync } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";
import { LuTimerReset } from "react-icons/lu";
function Button() {
  return (
    <div className='ComponentCabeçalho-Button'>
        <div className='ComponentCabeçalho-Button-1'>
           
            <button className='ComponentCabeçalho-Button-style'> <MdSync />Sincronizar</button>

            <button id='ComponentCabeçalho-Button-trash'> <FaTrashCan /> Apagar</button>
        </div>

        <div className='ComponentCabeçalho-Button-2'>
            <button className='ComponentCabeçalho-Button-style'><VscDebugRestart /> Reiniciar</button>
            <button className='ComponentCabeçalho-Button-style'> <LuTimerReset /> Resetar</button>
        </div>
        
    </div>
  )
}

export default Button