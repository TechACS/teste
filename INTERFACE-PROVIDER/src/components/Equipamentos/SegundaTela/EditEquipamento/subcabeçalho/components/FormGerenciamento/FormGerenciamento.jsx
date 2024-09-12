import React, { useState } from 'react'
import './FormGerenciamento.scss'
import FormButtons5 from '../../../../../../BUTTONS/FormButton';

import Side from './components/SIDE/Side';
import Main from './components/MAIN/Main';
function FormGerenciamento({ onCancel }) {
  return (
    <div className='Gerenciamento-form-0'>
       
       <div  className='Gerenciamento-form'>
        <Side></Side>

          <div >
          <Main></Main>
          </div>
         

       </div>
      

        <div>
          <FormButtons5 onCancel={onCancel} />
        </div>
    </div>
  )
}

export default FormGerenciamento