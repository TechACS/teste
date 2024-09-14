import React from 'react'
import './Cards.scss';
import { FaRegFileAlt } from "react-icons/fa";


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
                <span>
                   <CiTrash />
                </span>
                
            </div>   
           
               <button>Enviar</button>       
            
            
        </div>

       
        
        </div>
  )
}

export default Cards