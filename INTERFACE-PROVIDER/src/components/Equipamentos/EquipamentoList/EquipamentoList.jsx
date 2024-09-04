import React from 'react';
import './EquipamentoList.scss';
import { Link } from 'react-router-dom';

const EquipamentoList = ({ Equipamentos, currentPage, itemsPerPage }) => {
  // Calcular a página atual dos clientes
  const indexOfLastEquipamentos = currentPage * itemsPerPage;
  const indexOfFirstEquipamentos = indexOfLastEquipamentos - itemsPerPage;
  const currentEquipamentos = Equipamentos.slice(indexOfFirstEquipamentos, indexOfLastEquipamentos);

  return (
    <div className="client-list">
      <div className="header">
        <div className="header-item">Serial</div>
        <div className="header-item">PPPOE</div>
        <div className="header-item">IP</div>
        <div className="header-item">Modelo</div>
      </div>
      
      {currentEquipamentos.map(Equipamentos => (
        <Link 
          key={Equipamentos._id} 
          to={`/EditEquipamentos/${Equipamentos.serial}`} 
          className="client-item-link"
        >
          <div className="client-item">
            <div className="client-data">{Equipamentos.serial}</div>
            <div className="client-data">{Equipamentos.pppoe}</div>
            <div className="client-data">{Equipamentos.ip}</div>
            <div className="client-data">{Equipamentos.modelo}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default EquipamentoList;
