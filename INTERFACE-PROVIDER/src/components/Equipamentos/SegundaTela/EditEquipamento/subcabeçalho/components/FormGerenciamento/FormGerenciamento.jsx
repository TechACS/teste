import React, { useState } from 'react'
import FormButtons5 from '../../../../../../BUTTONS/FormButton';

import Side from './components/SIDE/Side';

function FormGerenciamento({ onCancel }) {
  return (
    <div>
       
       <Side></Side>

        <div>
          <FormButtons5 onCancel={onCancel} />
        </div>
    </div>
  )
}

export default FormGerenciamento