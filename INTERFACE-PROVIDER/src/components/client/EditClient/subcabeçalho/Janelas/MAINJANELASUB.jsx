import React, { useState } from 'react';
import './MAIN.scss';
import GeralComponent from './GERAL/GeralComponent';
import ObservaçõesComponent from './OBSERVAÇÃO/ObservaçõesComponents';
import DispositivosComponent from './DISPOSITIVOS/DispositivosComponets';
import ButtonJanelaComponent from '../components/janelasButton/ButtonJanelaComponent';

function MAINJANELA() {
  const [activeComponent, setActiveComponent] = useState(null);

  const showGeral = () => setActiveComponent(<GeralComponent />);
  const showObservações = () => setActiveComponent(<ObservaçõesComponent />);
  const showDispositivos = () => setActiveComponent(<DispositivosComponent />);

  return (
    <div className='mainjanela'>
      <div className='mainjanelasub-components'>
        <ButtonJanelaComponent
          descrição='Geral'
          botaoClicado={showGeral}
        />
        <ButtonJanelaComponent
          descrição='Observações'
          botaoClicado={showObservações}
        />
        <ButtonJanelaComponent
          descrição='Dispositivos'
          botaoClicado={showDispositivos}
        />
      </div>
      <div className='active-component'>
        {activeComponent}
      </div>
    </div>
  );
}

export default MAINJANELA;
