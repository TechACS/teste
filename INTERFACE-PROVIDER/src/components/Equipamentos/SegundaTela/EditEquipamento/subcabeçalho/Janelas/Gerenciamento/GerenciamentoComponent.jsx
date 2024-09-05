import React from 'react'
import JanelasBackground from '../../components/janelasBackground/janelasBackground';
import { useParams } from 'react-router-dom';

import FormGerenciamento from '../../components/FormGerenciamento/FormGerenciamento';

function GerenciamentoComponent() {

    const handleCancel = () => {
        window.history.back(); 
      };
  return (
    <div>

            <JanelasBackground>

              <FormGerenciamento onCancel={handleCancel}>

              </FormGerenciamento>
            </JanelasBackground>
    </div>
  );
};

export default GerenciamentoComponent