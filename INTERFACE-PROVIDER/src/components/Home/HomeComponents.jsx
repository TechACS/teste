import React from 'react'
import './HomeComponents.scss';
import AtalhosMain from './components/ATALHOS/AtalhosMain';
import BackGround from '../Background/SubCabeçalho/BackgroundComponenteSubcabeçalho';

import MainGrafico from './components/GraficoDevice/MainGrafico';
import Usuarios from './components/USUARIOS/Usuarios';
function HomeComponents() {
  return (
    <div>
     
          <AtalhosMain></AtalhosMain>

           <BackGround>
           
            <MainGrafico></MainGrafico>
              
              
        
                    
           </BackGround>
    </div>
  )
}

export default HomeComponents