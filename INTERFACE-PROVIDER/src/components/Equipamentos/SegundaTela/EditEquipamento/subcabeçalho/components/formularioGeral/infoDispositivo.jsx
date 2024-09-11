import React, { useState, useEffect } from 'react';
import './infoDispositivo.scss'; // Certifique-se de que o caminho está correto
import Dispositivos from './components/Dispositivos/Dispositivos';
import InformaçõesGerais from './components/InformaçõesGerais/InformaçõesGerais';

import Sinal from './components/Sinal/Sinal';
import Porta from './components/PORTA/Porta';
import GraficoWan from './components/GraficoWan/GraficoWan';
import Graficoevices from './components/Graficodevices/Graficodevices.jsx';

const infoDispositivo = () => {
 
  return (
        <div className="infoDispositivo">
          
          <div className='container-infoDispositivo'>
          <InformaçõesGerais></InformaçõesGerais>

          <div className='container-infoDispositivo-1'>
              <div id='sinal'>
              <Sinal />
              <Sinal />
              </div>
          

            <div className='porta'>

            <Porta></Porta>

            </div>
          
            </div>
            
            <Dispositivos></Dispositivos>

            </div>

          <div className='Grafico'>

          <GraficoWan></GraficoWan>
          <Graficoevices></Graficoevices>

          </div>
          

        </div>
  );
};

export default infoDispositivo;
