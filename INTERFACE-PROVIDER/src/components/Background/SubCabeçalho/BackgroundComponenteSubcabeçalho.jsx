import React from 'react'
import './BackgroundComponenteSubcabeçalho.scss';
function BackgroundComponenteSubcabeçalho( {children} ) {
  return (
    <div>
          <div className='subcabecalho'>
          {children}
         </div>
    </div>
  )
}

export default BackgroundComponenteSubcabeçalho