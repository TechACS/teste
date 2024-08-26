import React from 'react';
import './ClienteComponetCabeçalho.scss';
import BackgroundComponente from '../../Background/Cabeçalho/BackgroundComponenteCabeçalho';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFileExcel } from '@fortawesome/free-solid-svg-icons';

function ClienteComponet() {
  return (
    <div>
      <BackgroundComponente>
        <div className="header-content">
          <div className="header-item add-client-container">
            <FontAwesomeIcon icon={faPlus} className="icon" />
            <span className="text">Cadastrar Cliente</span>
          </div>

          <div className="header-item search-container">
            <input 
              type="text" 
              placeholder="Buscar clientes..." 
              className="search-input"
            />
          </div>

         
      

          <div className="header-item export-container">
            <FontAwesomeIcon icon={faFileExcel} className="icon" />
            <span className="text">Exportar para Excel</span>
          </div>
        </div>
      </BackgroundComponente>
    </div>


  );
}

export default ClienteComponet;
