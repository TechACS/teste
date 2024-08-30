import React from 'react'
import ButtonJanelaComponent from '../../components/janelasButton/ButtonJanelaComponent.jsx';
import { searchClientByCpf } from '../../../../../../services/ListarClient.js';
function Geral() {
  return (
    <div>
       <ButtonJanelaComponent
       descrição='Geral'
       ></ButtonJanelaComponent>
       
    </div>
  )
}

export default Geral