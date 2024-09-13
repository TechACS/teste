import React from 'react'
import './Cards.scss';

import { CiTrash } from "react-icons/ci";
function Cards() {
  return (
    <div className='FormArquivos-card'>
        
        <div className='FormArquivos-card-1'>
            <div>
                icon
            </div>

            <div>
                <span>
                    nome
                </span>
                <span>
                   <CiTrash />
                </span>
            </div>
            
        </div>

       
        
        </div>
  )
}

export default Cards