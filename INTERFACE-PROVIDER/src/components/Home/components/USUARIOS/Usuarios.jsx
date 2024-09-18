import React from 'react'
import './Usuarios.scss';

import listarUsuario from './listarUsuario';
function Usuarios() {
  return (
    <div>

            <div className='UsuariosOnlineHOME-1'>
                <div id='UsuariosOnlineHOME-h1'>
                    <h1>Grafico Devices</h1>
                </div>
                <div className='UsuariosOnlineHOME-2'>
                    <listarUsuario usuario="teste"></listarUsuario>
                </div>
            </div>
    </div>
  )
}

export default Usuarios