import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

function Sidebar() {
  // Estados para a sidebar colapsada e para a visibilidade de sub-tópicos
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [visibleSubtopics, setVisibleSubtopics] = useState({
    servidores: false,
    migracao: false,
    Home: false,
    Bancodedados: false,
  });

  // Função para alternar a visibilidade da sidebar
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Função para alternar a visibilidade dos sub-tópicos individuais
  const toggleSubtopics = (topic) => {
    setVisibleSubtopics((prevState) => ({
      ...prevState,
      [topic]: !prevState[topic],
    }));
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isCollapsed ? '▶' : '◀'}
      </button>

      <div className="content">
        <div className='servidores'>
          <div className='topicostyles'>
            <Link to="/Home">
              <h1 onClick={() => toggleSubtopics('Home')}>Home</h1>
            </Link>
          </div>
        </div>

        <div className='servidores'>
          <div className='topicostyles'>
            <h1 onClick={() => toggleSubtopics('servidores')}>Servidores</h1>
          </div>

          {visibleSubtopics.servidores && (
            <div className="subtopics">
              <Link to="/MigraçãoDeServidor" className="card-link">
                <div className="card">
                  <h1>Migração De Servidor</h1>
                </div>
              </Link>
              <Link to="/" className="card-link">
                <div className="card">
                  <h1>Gerar Certificado SSL</h1>
                </div>
              </Link>
              <Link to="/DesativarEmail" className="card-link">
                <div className="card">
                  <h1>Desativar Email</h1>
                </div>
              </Link>
            </div>
          )}
        </div>

        <div className='servidores'>
          <div className='topicostyles'>
            <h1 onClick={() => toggleSubtopics('migracao')}>Migração</h1>
          </div>

          {visibleSubtopics.migracao && (
            <div className="subtopics">
              <Link to="/teste2" className="card-link">
                <div className="card">
                  <h1>teste2</h1>
                </div>
              </Link>
              <Link to="/teste1" className="card-link">
                <div className="card">
                  <h1>teste1</h1>
                </div>
              </Link>
              <Link to="/teste3" className="card-link">
                <div className="card">
                  <h1>teste3</h1>
                </div>
              </Link>
            </div>
          )}
        </div>

        <div className='servidores'>
          <div className='topicostyles'>
            <h1 onClick={() => toggleSubtopics('Bancodedados')}>Banco de dados</h1>
          </div>

          {visibleSubtopics.Bancodedados && (
            <div className="subtopics">
              <Link to="/CriarDocumentação" className="card-link">
                <div className="card">
                  <h1>Criar documentação</h1>
                </div>
              </Link>
              <Link to="/FazerUpload" className="card-link">
                <div className="card">
                  <h1>Fazer upload de arquivo</h1>
                </div>
              </Link>
              <Link to="/teste3" className="card-link">
                <div className="card">
                  <h1>teste3</h1>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;