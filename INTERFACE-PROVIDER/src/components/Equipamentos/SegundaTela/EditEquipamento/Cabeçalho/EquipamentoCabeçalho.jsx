import React from 'react'
import BackgroundComponente from '../../../../Background/Cabeçalho/BackgroundComponenteCabeçalho'
import ComponentCabeçalho from './ComponentCabeçalho';
import ModelViewer from './components/foto3D/ModelViewer';
function editclientCabeçalho({chinldrem}) {
  return (
    <div>
            <BackgroundComponente>

            <ModelViewer />
              <ComponentCabeçalho></ComponentCabeçalho>
            </BackgroundComponente>
           
    </div>
  )
}

export default editclientCabeçalho