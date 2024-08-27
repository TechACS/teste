import React, { useState } from 'react';
import './ClienteComponetSubCabeçalho.scss';
import BackgroundComponenteSubcabeçalho from '../../Background/SubCabeçalho/BackgroundComponenteSubcabeçalho';
import ClientList from '../ClienteList/ClientList';
import CadastrarClient from '../CadastrarClient/CadastrarClient';
import ClienteComponentecabecalho from '../Cabeçalho/ClienteComponetCabeçalho';

const ClienteComponet = () => {
  const [newClient, setNewClient] = useState("");

  const botaoClicado = (id) => {
    setNewClient(id);
  };

  return (
    <div>
      <ClienteComponentecabecalho newClient={newClient} botaoClicado={botaoClicado} />
      <BackgroundComponenteSubcabeçalho>
        {newClient === "clicado" ? <CadastrarClient/> : <ClientList/>}
      </BackgroundComponenteSubcabeçalho>
    </div>
  );
}

export default ClienteComponet;
