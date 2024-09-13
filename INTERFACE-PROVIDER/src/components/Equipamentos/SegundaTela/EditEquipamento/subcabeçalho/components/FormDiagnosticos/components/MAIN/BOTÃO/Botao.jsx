import React from 'react'
import './Botao.scss';
function Botao() {
  return (
    <div className='Diagnosticos-Ping'>

        <div className='Diagnosticos-Ping-1'>
              <h3>Endereço de destino:</h3>
              <input type="number" name="" id="input-ip" />
        </div>

       <div  className='Diagnosticos-Ping-2'>
            <div>
                <h3>Repetições:</h3>
                <input type="number" name="" id="" />
            </div>


            <div>
                <h3>Timeout (ms):</h3>
                <input type="number" name="" id="" />
            </div>

            <span id='btn-ping'>
              
               <button >iniciar</button>
            </span>
            
     
       </div>
           
    
        
    </div>
  )
}

export default Botao