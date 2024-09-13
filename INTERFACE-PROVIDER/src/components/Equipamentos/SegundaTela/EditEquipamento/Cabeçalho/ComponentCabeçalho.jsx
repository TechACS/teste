import React from 'react';
import './componentCabeçalho.scss';
import ModelViewer from './components/foto3D/ModelViewer';
function ComponentCabeçalho() {
  return (
    <div className='ComponentCabeçalho-dispositivo'>
    

    <div id='router'>
    <ModelViewer />
    </div>
     
    </div>
  )
}

export default ComponentCabeçalho