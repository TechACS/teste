import React from 'react'
import './EquipamentoCabeçalho.scss';
import BackgroundComponente from '../../../../Background/Cabeçalho/BackgroundComponenteCabeçalho'
import ComponentCabeçalho from './components/ComponentCabeçalho';
import Button from './components/BOTÃO/Button';
function EquipamentoCabeçalho({chinldrem}) {
  return (
    <div>
            <BackgroundComponente>

              <div className='EquipamentoCabeçalho-2'>
              <ComponentCabeçalho></ComponentCabeçalho>
              <Button></Button>
              </div>
              
            </BackgroundComponente>
           
    </div>
  )
}

export default EquipamentoCabeçalho