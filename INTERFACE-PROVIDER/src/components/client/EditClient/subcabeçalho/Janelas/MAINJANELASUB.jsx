import React from 'react';
import './MAIN.scss';
import Geral from './GERAL/Geral';
import Observações from './OBSERVAÇÃO/Observações';
import Dispositivos from './DISPOSITIVOS/Dispositivos';
import GeralComponent from './GERAL/GeralComponent';

function MAINJANELA() {
  return (
    <div className='mainjanela'>
      <div className='mainjanelasub-components'>
        <div className='component-container'>
          <Geral />
        </div>
        <div className='component-container'>
          <Observações />
        </div>
        <div className='component-container'>
          <Dispositivos />
        </div>
      </div>
      <GeralComponent></GeralComponent>
    </div>
  );
}

export default MAINJANELA;
