// FormObservações.jsx
import React, { useState } from 'react';
import './Diagnosticos.scss';

import FormButtons2 from '../../../../../../BUTTONS/FormButton';

import Side from './components/SIDE/Side';
import Main from './components/MAIN/Main';

const Diagnosticos = ({ onCancel }) => {
 

  return (
    <div className="Diagnosticos-0">
      
      <div className='Diagnosticos-form'>

      <Side></Side>
      
      <Main></Main>

      </div>
       

        <div className="form-actions">
        <FormButtons2 onCancel={onCancel} />
        </div>
        
    
    </div>
  );
};

export default Diagnosticos;
