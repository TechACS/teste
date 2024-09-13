import React, { useState } from 'react';
import './FormArquivos.scss';
import FormButtons5 from '../../../../../../BUTTONS/FormButton';
import Upload from './components/Upload/Upload';
import Listarfiles from './components/Listarfiles/Listarfiles';
const FormArquivos = ({ onCancel }) => {
  

  return (
    <div className='FormArquivos-main'>
    
        <Upload></Upload>

        <Listarfiles></Listarfiles>

    
        
    </div>
  );
}

export default FormArquivos;
