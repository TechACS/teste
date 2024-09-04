import React from 'react'
import './EditEquipamento.scss';

import ClienteComponetCabeçalho from './Cabeçalho/ComponentCabeçalho';
import EditclientSubcabeçalho from './subcabeçalho/editclientSubcabeçalho';

function EditEquipamento({childrem}) {
  return (
    <div className='teste'>
    <ClienteComponetCabeçalho>{childrem}</ClienteComponetCabeçalho>
    <EditclientSubcabeçalho></EditclientSubcabeçalho>
      
    </div>
  )
}

export default EditEquipamento