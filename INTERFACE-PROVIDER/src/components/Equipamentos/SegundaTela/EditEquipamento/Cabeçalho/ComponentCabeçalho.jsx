import React from 'react';
import './componentCabeçalho.scss';
import { BsRouter } from "react-icons/bs";

function ComponentCabeçalho() {
  return (
    <div className='ComponentCabeçalho-dispositivo'>
      
      <div id='iconrouter'>
      <BsRouter style={{width : '80px', height: '70px',  padding: '10px'}}/>
      </div>
   
    <div>
        <h1>scsdcd</h1>
    </div>
   
    </div>
  )
}

export default ComponentCabeçalho