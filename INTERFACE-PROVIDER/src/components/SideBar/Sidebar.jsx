import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { BiSolidLeftArrow } from 'react-icons/bi';
import './Sidebar.scss';
import SidebarTopic from './componente/SidebarTopic';
import { IoMdClose } from "react-icons/io";
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
    <>
      {/* Sidebar */}
      <div className={`sidebar ${isCollapsed ? 'collapsed' : 'expanded'}`}>
        <div className="content">
          {topics.map((topic, index) => (
            <div key={index} className="sidebar-topic">
              <SidebarTopic
                topic={topic.name}
                path={topic.path}
                subtopics={topic.subtopics}
                toggleSubtopics={toggleSubtopics}
                visibleSubtopics={visibleSubtopics}
                isSubtopicsAvailable={topic.subtopics && topic.subtopics.length > 0} // Verifica se existem sub-tópicos
              />
            </div>
          ))}
        </div>
      </div>

      {/* Botão flutuante fora da sidebar */}
      <button
        className="toggle-btn-floating"
        onClick={toggleSidebar}
        style={{ left: isCollapsed ? '5px' : '205px' }} // Ajusta a posição com base no estado da sidebar
      >
        {isCollapsed ? <FaBars /> : <IoMdClose />}
      </button>
    </>
  );
}

export default Sidebar;
