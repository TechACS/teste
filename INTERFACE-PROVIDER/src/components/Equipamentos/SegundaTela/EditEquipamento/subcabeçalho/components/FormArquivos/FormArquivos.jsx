import React, { useState } from 'react';
import './FormArquivos.scss';
import FormButtons2 from '../../../../../../BUTTONS/FormButton';
import Upload from './components/Upload/Upload';
import Listarfiles from './components/Listarfiles/Listarfiles';
const FormArquivos = ({ onCancel }) => {
  

  return (
    <div >
        <div className='FormArquivos-main'> 


        <Upload></Upload>

        <Listarfiles></Listarfiles>

        </div>
       
    
        <div className="form-actions">
        <FormButtons2 onCancel={onCancel} />
        </div>
    </div>
  );
}

export default FormArquivos;
