import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronRight, FaBars } from 'react-icons/fa'; // Ícones modernos
import './Sidebar.scss';
import SidebarTopic from './componente/SidebarTopic';
import { BsPinAngleFill } from "react-icons/bs";
function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false); // Começa aberto por padrão
  const [visibleSubtopics, setVisibleSubtopics] = useState({});
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 430) {
        setIsCollapsed(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleSubtopics = (topic) => {
    setVisibleSubtopics((prevState) => ({
      ...prevState,
      [topic]: !prevState[topic],
    }));
  };

  const topics = [
    { name: 'Home', path: '/home' },
    { name: 'Cliente', path: '/cliente' },
    { name: 'Equipamentos', path: '/equipamentos' },
    {
      name: 'Gerência ADM',
      subtopics: [
        { path: '/CriarDocumentacao', label: 'Criar Usuário' },
        { path: '/Auditoria', label: 'Auditoria' },
      ],
    },
    {
      name: 'Server',
      subtopics: [
        { path: '/Terminal', label: 'Terminal' },
        { path: '/Auditoria', label: 'Auditoria' },
      ],
    },
  ];

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : 'expanded'}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isCollapsed ? <FaBars /> : <BsPinAngleFill />}
      </button>

      <div className="content">
        {topics.map((topic, index) => (
          <div key={index} className="sidebar-topic">
            <SidebarTopic
              topic={topic.name}
              path={topic.path}
              subtopics={topic.subtopics}
              toggleSubtopics={toggleSubtopics}
              visibleSubtopics={visibleSubtopics}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
