import React from 'react';
import { useParams } from 'react-router-dom';
import JanelasBackground from '../../components/janelasBackground/janelasBackground';
import InfoClient from '../../components/formularioclient/infoClient'; // Ajuste o caminho se necessário

const GeralComponent = () => {
  const { cpf } = useParams();

  const handleCancel = () => {
    // Navegar de volta ou realizar outra ação ao cancelar
  };

  return (
    <div className="GeralComponent">
      <JanelasBackground>
        <InfoClient cpf={cpf} onCancel={handleCancel} />
      </JanelasBackground>
    </div>
  );
};

export default GeralComponent;
