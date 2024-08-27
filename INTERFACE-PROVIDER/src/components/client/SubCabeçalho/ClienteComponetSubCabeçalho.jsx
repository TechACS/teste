import React, { useState } from 'react';
import './ClienteComponetSubCabeçalho.scss';
import BackgroundComponenteSubcabeçalho from '../../Background/SubCabeçalho/BackgroundComponenteSubcabeçalho';
import ClientList from '../ClienteList/ClientList';
import CadastrarClient from '../CadastrarClient/CadastrarClient';
import ClienteComponentecabecalho from '../Cabeçalho/ClienteComponetCabeçalho';

const ClienteComponet = () => {
  const [view, setView] = useState("list");

  const handleCancel = () => {
    setView("list");
  };

  const handleAddClient = () => {
    setView("form");
  };

  return (
    <div>
      <ClienteComponentecabecalho newClient={view === "form"} botaoClicado={handleAddClient} />
      <BackgroundComponenteSubcabeçalho>
        {view === "form" ? 
          <CadastrarClient onCancel={handleCancel} /> 
          : <ClientList />
        }
      </BackgroundComponenteSubcabeçalho>
    </div>
  );
}

export default ClienteComponet;
