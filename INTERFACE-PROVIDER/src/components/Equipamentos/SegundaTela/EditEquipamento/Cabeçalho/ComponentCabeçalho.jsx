import React from 'react';
import './componentCabeçalho.scss';
import { BsRouter } from "react-icons/bs";

function ComponentCabeçalho() {
  return (
    <div className='ComponentCabeçalho-dispositivo'>
      
      <div className='ComponentCabeçalho-dispositivo-1'>

      <div id='iconrouter'>
      <BsRouter style={{width : '80px', height: '70px',  padding: '10px'}}/>
     
      </div>
   

      </div>
      
   
   

    <div className='ComponentCabeçalho-dispositivo-2'>
            <div >
                <h3>id equipamentos</h3>
            </div>
            
          <div>

            <h3>usuario</h3>

          </div>

          <div>

            <h3>serial</h3>

          </div>

          <div>

            <h3>modelo</h3>

          </div>
    </div>   
   
   
    </div>
  )
}

export default ComponentCabeçalho