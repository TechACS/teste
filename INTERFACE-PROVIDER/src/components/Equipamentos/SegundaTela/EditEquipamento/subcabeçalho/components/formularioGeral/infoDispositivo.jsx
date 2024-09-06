import React, { useState, useEffect } from 'react';
import './infoDispositivo.scss'; // Certifique-se de que o caminho está correto
import Dispositivos from './components/Dispositivos/Dispositivos';
import InformaçõesGerais from './components/InformaçõesGerais/InformaçõesGerais';

import Sinal from './components/Sinal/Sinal';

import GraficoWan from './components/GraficoWan/GraficoWan';


const infoDispositivo = () => {
 
  return (
    <div className="infoDispositivo">
      <InformaçõesGerais></InformaçõesGerais>
      <Dispositivos></Dispositivos>
      <Sinal />

      <GraficoWan></GraficoWan>

    </div>
  );
};

export default infoDispositivo;
