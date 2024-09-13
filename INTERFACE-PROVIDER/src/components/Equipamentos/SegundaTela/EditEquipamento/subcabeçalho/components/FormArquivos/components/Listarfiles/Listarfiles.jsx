import React from 'react'
import './Listarfiles.scss';

import Cards from './Cards/Cards';
function Listarfiles() {
  return (
    <div className='FormAquivos-Listarfiles'>
        
       <div>
         <h2>
            Seus aquivos
         </h2>
       </div>

        <Cards></Cards>
    </div>
  )
}

export default Listarfiles