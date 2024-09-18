import React from 'react'
import './MainGrafico.scss';


import Online from './ONLINE/Online';
import QTDEquipamentos from './QTDEquipamentos/QTDEquipamentos';
import Sinal from './Sinal/Sinal';
function MainGrafico() {
  return (
    <div className=''>
       
        
         
            <div className='MainGraficoDevide-1'>
                <div id='MainGraficoDevide-h1'>
                    <h1>Grafico Devices</h1>
                </div>
                <div className='MainGraficoDevide-2'>
                    <Online></Online>
                    <QTDEquipamentos></QTDEquipamentos>
                    <Sinal></Sinal>
                </div>
            </div>
           

            
          
    </div>
  )
}

export default MainGrafico