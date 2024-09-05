import React, { useState } from 'react'
import FormButtons5 from '../../../../../../BUTTONS/FormButton';

function FormGerenciamento({ onCancel }) {
  return (
    <div>
        <h1>
            HELLO WORD
        </h1>

        <div>
          <FormButtons5 onCancel={onCancel} />
        </div>
    </div>
  )
}

export default FormGerenciamento