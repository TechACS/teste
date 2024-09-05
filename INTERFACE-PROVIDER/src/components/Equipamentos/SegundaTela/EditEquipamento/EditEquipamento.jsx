import React from 'react'
import './EditEquipamento.scss';

import EditEquipamentoComponetCabeçalho from './Cabeçalho/EquipamentoCabeçalho';
import EditEquipamentoSubcabeçalho from './subcabeçalho/EditEquipamentoSubcabeçalho';

function EditEquipamento({childrem}) {
  return (
    <div className='teste'>
    <EditEquipamentoComponetCabeçalho></EditEquipamentoComponetCabeçalho>
    <EditEquipamentoSubcabeçalho></EditEquipamentoSubcabeçalho>
      
    </div>
  )
}

export default EditEquipamento