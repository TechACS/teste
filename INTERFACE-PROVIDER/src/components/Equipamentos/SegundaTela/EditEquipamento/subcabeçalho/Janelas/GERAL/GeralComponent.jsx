import React from 'react';
import { useParams } from 'react-router-dom';
import JanelasBackground from '../../components/janelasBackground/janelasBackground';
import InfoClient from '../../components/formularioGeral/infoDispositivo'; // Ajuste o caminho se necessário

const GeralComponent = () => {
  const { cpf } = useParams();

  const handleCancel = () => {
    window.history.back(); 
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
