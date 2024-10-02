import React from 'react'
import './InformaçõesGerais.scss';

import CardsGeral from './components/cardsGeral/CardsGeral';
import ContainerGeral from './components/Container/ContainerGeral';
function InformaçõesGerais() {
  return (
    <div className='InformaçõesGerais'>
      <div className='InformaçõesGerais-1'>
        <h1>
        Informações Gerais
        </h1>
      </div>
      <CardsGeral></CardsGeral>
       <ContainerGeral></ContainerGeral>
        </div>
  )
}

export default InformaçõesGerais