import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import SidebarTopic from './componente/SidebarTopic';

// Componente para a sidebar
function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [visibleSubtopics, setVisibleSubtopics] = useState({
    servidores: false,
    migracao: false,
    Home: false,
    Bancodedados: false,
  });

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleSubtopics = (topic) => {
    setVisibleSubtopics((prevState) => ({
      ...prevState,
      [topic]: !prevState[topic],
    }));
  };

  // Dados dos tópicos e sub-tópicos
  const topics = [
    { name: 'Home', path: '/' },
    { name: 'cliente', path: '/cliente' },
    { name: 'equipamentos', path: '/equipamentos' },
    {
      name: 'gerencia adm',
      subtopics: [
        { path: '/CriarDocumentação', label: 'criar usuario' },
        { path: '/FazerUpload', label: 'auditoria' },
      ],
    },
    {
      name: 'server',
      subtopics: [
        { path: '/CriarDocumentação', label: 'terminal' },
        { path: '/FazerUpload', label: 'auditoria' },
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
            path={topic.path}  // Adiciona a prop path
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
