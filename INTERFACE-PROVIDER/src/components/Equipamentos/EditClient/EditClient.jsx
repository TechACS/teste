import React from 'react'
import './EditClient.scss';

import EditclientCabeçalho from './Cabeçalho/editclientCabeçalho';
import EditclientSubcabeçalho from './subcabeçalho/editclientSubcabeçalho';

function EditClient({childrem}) {
  return (
    <div className='teste'>
    <EditclientCabeçalho>{childrem}</EditclientCabeçalho>
    <EditclientSubcabeçalho></EditclientSubcabeçalho>
      
    </div>
  )
}

export default EditClient