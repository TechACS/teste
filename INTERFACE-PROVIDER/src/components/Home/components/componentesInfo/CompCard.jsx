import React from 'react'
import './CompCard.scss';
function CompCard({info1,info2,info3,info4,info5, titulocomponente}) {
  return (
    <div className='CompcardHome-0'>
        
        
                <div id='CompcardHome-h1'>
                    <h1>{titulocomponente}</h1>
                </div>
                <div className='compcardh1'>
                    <h1>{info1}</h1>
                    <h1>{info2}</h1>
                    <h1>{info3}</h1>
                    <h1>{info4}</h1>
                    <h1>{info5}</h1>
                </div>
    </div>
  )
}

export default CompCard