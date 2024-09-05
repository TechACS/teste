import React from 'react'
import './EditEquipamento.scss';

import EditEquipamentoComponetCabeçalho from './Cabeçalho/ComponentCabeçalho';
import EditEquipamentoSubcabeçalho from './subcabeçalho/EditEquipamentoSubcabeçalho';

function EditEquipamento({childrem}) {
  return (
    <div className='teste'>
    <EditEquipamentoComponetCabeçalho>{childrem}</EditEquipamentoComponetCabeçalho>
    <EditEquipamentoSubcabeçalho></EditEquipamentoSubcabeçalho>
      
    </div>
  )
}

export default EditEquipamento