import React, { useState } from 'react';
import './FormArquivos.scss';
import FormButtons5 from '../../../../../../BUTTONS/FormButton';

const FormArquivos = ({ onCancel }) => {
  

  return (
    <div className='FormDispositivos'>
    



    <div className="form-actions">
        <FormButtons5 onCancel={onCancel} />
        </div>
        
    </div>
  );
}

export default FormArquivos;
