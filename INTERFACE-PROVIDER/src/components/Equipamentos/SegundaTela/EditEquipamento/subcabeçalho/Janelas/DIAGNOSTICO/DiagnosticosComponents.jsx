import React from 'react'
import { useParams } from 'react-router-dom';
import JanelasBackground from '../../components/janelasBackground/janelasBackground'


import FormObservações from '../../components/FormDiagnosticos/Diagnosticos';
function ObservaçõesComponents() {

  const { cpf } = useParams();

  const handleCancel = () => {
    window.history.back(); 
  };
  return (
    <div className='ObservaçõesComponents'>
          <JanelasBackground>

          <FormObservações  onCancel={handleCancel} />

          </JanelasBackground>
    </div>
  )
}

export default ObservaçõesComponents