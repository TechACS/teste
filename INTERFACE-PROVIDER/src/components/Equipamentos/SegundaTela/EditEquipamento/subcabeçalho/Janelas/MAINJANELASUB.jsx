import React, { useState } from 'react';
import './MAIN.scss';
import GeralComponent from './GERAL/GeralComponent';
import ObservaçõesComponent from './OBSERVAÇÃO/ObservaçõesComponents';
import DispositivosComponent from './DISPOSITIVOS/DispositivosComponets';
import ButtonJanelaComponent from '../components/janelasButton/ButtonJanelaComponent';
import Gerenciamento from './Gerenciamento/Gerenciamento'
function MAINJANELA() {
  // Estado para o componente ativo
  const [activeComponent, setActiveComponent] = useState(<GeralComponent />);
  
  // Estado para o botão ativo
  const [activeButton, setActiveButton] = useState('Geral');
  
  const showGeral = () => {
    setActiveComponent(<GeralComponent />);
    setActiveButton('Geral');
  };
  const showGerenciamento = () => {
    setActiveComponent(<Gerenciamento />);
    setActiveButton('Gerenciamento');
  };
  
  
  const showObservações = () => {
    setActiveComponent(<ObservaçõesComponent />);
    setActiveButton('Observações');
  };
  
  const showDispositivos = () => {
    setActiveComponent(<DispositivosComponent />);
    setActiveButton('Dispositivos');
  };

  return (
    <div className='mainjanela'>
      <div className='mainjanelasub-components'>
        <ButtonJanelaComponent
          descrição='Geral'
          botaoClicado={showGeral}
          isActive={activeButton === 'Geral'}
        />
         <ButtonJanelaComponent
          descrição='Gerenciamento'
          botaoClicado={showGerenciamento}
          isActive={activeButton === 'Gerenciamento'}
        />
        <ButtonJanelaComponent
          descrição='Observações'
          botaoClicado={showObservações}
          isActive={activeButton === 'Observações'}
        />
        <ButtonJanelaComponent
          descrição='Dispositivos'
          botaoClicado={showDispositivos}
          isActive={activeButton === 'Dispositivos'}
        />
      </div>
      <div className='active-component'>
        {activeComponent}
      </div>
    </div>
  );
}

export default MAINJANELA;
