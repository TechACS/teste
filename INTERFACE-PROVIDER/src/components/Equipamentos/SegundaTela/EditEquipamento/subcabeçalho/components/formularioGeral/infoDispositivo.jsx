import React, { useState, useEffect } from 'react';
import './infoDispositivo.scss'; // Certifique-se de que o caminho está correto
import Dispositivos from './components/Dispositivos/Dispositivos';
import InformaçõesGerais from './components/InformaçõesGerais/InformaçõesGerais';

import Sinal from './components/Sinal/Sinal';
import Porta from './components/PORTA/Porta';
import GraficoWan from './components/GraficoWan/GraficoWan';


const infoDispositivo = () => {
 
  return (
    <div className="infoDispositivo">
      
      <div className='container-infoDispositivo'>
      <InformaçõesGerais></InformaçõesGerais>

      <div className='container-infoDispositivo-1'>
      <Sinal />
      <Sinal />

      <div id='porta'>
      <Porta></Porta>
      </div>
      
      </div>
      
      <Dispositivos></Dispositivos>

      </div>
      
      

      <GraficoWan></GraficoWan>

    </div>
  );
};

export default infoDispositivo;
