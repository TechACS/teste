// FormObservações.jsx
import React, { useState } from 'react';
import './Diagnosticos.scss';

import FormButtons2 from '../../../../../../BUTTONS/FormButton';
const Diagnosticos = ({ onCancel }) => {
 

  return (
    <div className="observacoes">
     
       

        <div className="form-actions">
        <FormButtons2 onCancel={onCancel} />
        </div>
        
    
    </div>
  );
};

export default Diagnosticos;
