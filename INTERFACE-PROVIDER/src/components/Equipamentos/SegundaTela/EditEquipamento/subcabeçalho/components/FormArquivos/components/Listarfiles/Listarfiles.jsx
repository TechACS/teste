import React from 'react'
import './Listarfiles.scss';

import Cards from './Cards/Cards';
function Listarfiles() {
  return (
    <div className='FormAquivos-Listarfiles'>
        
       <div id='info-file'>
         <h2>
            Seus aquivos
         </h2>
       </div>

        <Cards></Cards>
        <Cards></Cards>
    </div>
  )
}

export default Listarfiles