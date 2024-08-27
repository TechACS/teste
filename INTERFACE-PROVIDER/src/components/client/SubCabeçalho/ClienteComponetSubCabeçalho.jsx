import React from 'react';
import './ClienteComponetSubCabeçalho.scss';
import BackgroundComponenteSubcabeçalho from '../../Background/SubCabeçalho/BackgroundComponenteSubcabeçalho';
import ClientList from '../ClienteList/ClientList';
function ClienteComponet() {
  return (
    <div>
      <BackgroundComponenteSubcabeçalho>
        <ClientList></ClientList>
       
      </BackgroundComponenteSubcabeçalho>
      
    </div>
  );
}

export default ClienteComponet;
