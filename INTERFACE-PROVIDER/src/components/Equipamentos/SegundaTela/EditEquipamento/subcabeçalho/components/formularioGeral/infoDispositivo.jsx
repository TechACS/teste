import React, { useState, useEffect } from 'react';
import './infoDispositivo.scss'; // Certifique-se de que o caminho está correto
import Dispositivos from './components/Dispositivos/Dispositivos';
import InformaçõesGerais from './components/InformaçõesGerais/InformaçõesGerais';

import Sinal from './components/Sinal/Sinal';
import Porta from './components/PORTA/Porta';
import GraficoWan from './components/GraficoWan/GraficoWan';
import Graficoevices from './components/Graficodevices/Graficodevices.jsx';

import FormButtons from '../../../../../../BUTTONS/FormButton.jsx';
const infoDispositivo = ( {onCancel} ) => {
 
  return (
        <div className="infoDispositivo">
          
          <div className='container-device' id='container-infoDispositivo'>
                <InformaçõesGerais></InformaçõesGerais>

                      <div id='container-infoDispositivo-1'>

                              <div className='container-device' id='sinal'>
                                  <Sinal />
                                  <Sinal />
                              </div>
                          

                            <div className='container-device' id='porta'>
                                  <Porta></Porta>
                            </div>
                      
                      </div>
                  
                
                  <Dispositivos></Dispositivos>
            
          </div>

          <div className='container-device' id='Grafico'>

          <GraficoWan></GraficoWan>
          <Graficoevices></Graficoevices>

          </div>
          

          <div>
          <FormButtons onCancel={onCancel} />
        </div>

        </div>
  );
};

export default infoDispositivo;
