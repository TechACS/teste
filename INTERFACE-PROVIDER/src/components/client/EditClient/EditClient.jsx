import React from 'react'
import './EditClient.scss';

import EditclientCabeçalho from './Cabeçalho/editclientCabeçalho';
import EditclientSubcabeçalho from './subcabeçalho/editclientSubcabeçalho';

function EditClient() {
  return (
    <div className='teste'>
    <EditclientCabeçalho></EditclientCabeçalho>
    <EditclientSubcabeçalho></EditclientSubcabeçalho>
      
    </div>
  )
}

export default EditClient