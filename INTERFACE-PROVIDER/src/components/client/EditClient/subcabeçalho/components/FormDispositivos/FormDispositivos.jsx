import React from 'react';
import './FormDispositivos.scss';

function FormDispositivos() {
  return (
    <div className='FormDispositivos'>
      <div className='FormDispositivos-1'>
        <div className='FormDispositivos-1-1'>
          <h1>CPF</h1>
          <input type="text" placeholder="Digite o CPF" />
        </div>
        
        <div className='FormDispositivos-1-1'>
          <h1>Serial</h1>
          <input type="text" placeholder="Digite o Serial" />
        </div>
      </div>

      <div className='FormDispositivos-2'>
        <div className='FormDispositivos-2-1'>
          <div className='FormDispositivos-2-2'>
            <h1>User PPPOE</h1>
            <input type="text" placeholder="Digite o User PPPOE" />
          </div>

          <div className='FormDispositivos-2-2'>
            <h1>Pass PPPOE</h1>
            <input type="text" placeholder="Digite a Senha PPPOE" />
          </div>
        </div>

        <div className='FormDispositivos-2-1'>
          <div className='FormDispositivos-2-2'>
            <h1>IP</h1>
            <input type="text" placeholder="Digite o IP" />
          </div>

          <div className='FormDispositivos-2-2'>
            <h1>DNS</h1>
            <input type="text" placeholder="Digite o DNS" />
          </div>
        </div>

        <div className='FormDispositivos-2-1'>
          <div className='FormDispositivos-2-2'>
            <h1>Modelo</h1>
            <input type="text" placeholder="Digite o Serial" />
          </div>
          
          <div className='FormDispositivos-2-2'>
            <h1>Fabricante</h1>
            <input type="text" placeholder="Digite o Serial" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormDispositivos;
