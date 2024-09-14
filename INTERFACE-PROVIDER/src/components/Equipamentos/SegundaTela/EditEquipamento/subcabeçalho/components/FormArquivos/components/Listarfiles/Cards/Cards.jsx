import React from 'react'
import './Cards.scss';
import { FaRegFileAlt } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

import { CiTrash } from "react-icons/ci";
function Cards() {
  return (
    <div className='FormArquivos-card'>
        
        <div className='FormArquivos-card-1'>
            <div id='file-icon'>
            <FaRegFileAlt />
            </div>

            <div className='FormArquivos-card-2'>
                <span>
                    nome
                </span>
             
                
            </div>   
           
               <button>Enviar</button>       
               <button id='ComponentCabeçalho-Button-trash'> <FaTrashCan /> Apagar</button>
            
        </div>

       
        
        </div>
  )
}

export default Cards