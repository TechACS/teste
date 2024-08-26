import React from 'react';
import './ClienteComponetSubCabeçalho.scss';
import BackgroundComponenteSubcabeçalho from '../../Background/SubCabeçalho/BackgroundComponenteSubcabeçalho';

function ClienteComponet() {
  return (
    <div>
      <BackgroundComponenteSubcabeçalho>
        <div className="sub-header-content">
          <div className="sub-header-item">ID</div>
          <div className="sub-header-item">Nome</div>
          <div className="sub-header-item">Email</div>
          <div className="sub-header-item">CPF</div>
        </div>
      </BackgroundComponenteSubcabeçalho>
    </div>
  );
}

export default ClienteComponet;
