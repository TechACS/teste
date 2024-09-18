import React from 'react'
import './Usuarios.scss';

import ListarUsuario from './ListarUsuario';
function Usuarios() {
  return (
    <div>

            <div className='UsuariosOnlineHOME-1'>
                <div id='UsuariosOnlineHOME-h1'>
                    <h1>Grafico Devices</h1>
                </div>
                <div className='UsuariosOnlineHOME-2'>
                   <ListarUsuario usuario="sdsfsfcsd" ></ListarUsuario>
                </div>
              
            </div>
    </div>
  )
}

export default Usuarios