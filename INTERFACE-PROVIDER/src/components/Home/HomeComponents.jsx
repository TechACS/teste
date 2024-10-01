import React from 'react'
import './HomeComponents.scss';
import AtalhosMain from './components/ATALHOS/AtalhosMain';
import BackGround from '../Background/SubCabeçalho/BackgroundComponenteSubcabeçalho';

import MainGrafico from './components/GraficoDevice/MainGrafico';
import MainServer from './components/GraficoServer/MainServer';

function HomeComponents() {
  return (
    <div>
     
          <AtalhosMain></AtalhosMain>

           <BackGround>
           
            <MainGrafico></MainGrafico>

            <div className='MainServerHome'> 
            <MainServer></MainServer> 
            </div>
            
              
        
                    
           </BackGround>
    </div>
  )
}

export default HomeComponents