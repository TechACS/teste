import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import SidebarTopic from './componente/SidebarTopic';

// Componente para a sidebar
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

  // Dados dos tópicos e sub-tópicos
  const topics = [
    {
      name: 'Home',
      subtopics: [],
    },
    {
      name: 'Servidores',
      subtopics: [
        { path: '/MigraçãoDeServidor', label: 'Migração De Servidor' },
        { path: '/', label: 'Gerar Certificado SSL' },
        { path: '/DesativarEmail', label: 'Desativar Email' },
      ],
    },
    {
      name: 'Migração',
      subtopics: [
        { path: '/teste2', label: 'teste2' },
        { path: '/teste1', label: 'teste1' },
        { path: '/teste3', label: 'teste3' },
      ],
    },
    {
      name: 'Banco de dados',
      subtopics: [
        { path: '/CriarDocumentação', label: 'Criar documentação' },
        { path: '/FazerUpload', label: 'Fazer upload de arquivo' },
        { path: '/teste3', label: 'teste3' },
      ],
    },
  ];

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isCollapsed ? '▶' : '◀'}
      </button>

      <div className="content">
        {topics.map((topic, index) => (
          <SidebarTopic
            key={index}
            topic={topic.name}
            subtopics={topic.subtopics}
            toggleSubtopics={toggleSubtopics}
            visibleSubtopics={visibleSubtopics}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
