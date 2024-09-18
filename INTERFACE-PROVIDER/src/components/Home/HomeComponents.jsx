import React from 'react'
import AtalhosMain from './components/ATALHOS/AtalhosMain';

import MainGrafico from './components/GraficoDevice/MainGrafico';
import Usuarios from './components/USUARIOS/Usuarios';
function HomeComponents() {
  return (
    <div>
        <AtalhosMain></AtalhosMain>
        <MainGrafico></MainGrafico>
        <Usuarios></Usuarios>
    </div>
  )
}

export default HomeComponents