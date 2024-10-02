import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdKeyboardArrowUp } from "react-icons/md"; // Importando os ícones
import { RiArrowDownSLine } from "react-icons/ri";
const SidebarTopic = ({ topic, path, subtopics, toggleSubtopics, visibleSubtopics, isSubtopicsAvailable }) => {
  const location = useLocation();
  const navigate = useNavigate(); // Obtém a função de navegação

  const handleClick = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do link
    if (path !== location.pathname) {
      navigate(path); // Usa o hook para navegar
    }
    // Alterna sub-tópicos ao clicar no tópico
    if (isSubtopicsAvailable) {
      toggleSubtopics(topic);
    }
  };

  return (
    <div className="topic">
      <div onClick={handleClick} className="topic-link">
        {topic}
        {isSubtopicsAvailable && (
          <span>
            {visibleSubtopics[topic] ? <RiArrowDownSLine /> : <MdKeyboardArrowLeft />}
          </span>
        )}
      </div>
      {visibleSubtopics[topic] && subtopics && (
        <div className="subtopics">
          {subtopics.map((subtopic, index) => (
            <Link key={index} to={subtopic.path} className="card-link">
              {subtopic.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarTopic;
