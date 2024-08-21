import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarTopic.scss'; // Se necessário, crie um arquivo de estilo separado

// Componente para tópico da sidebar
function SidebarTopic({ topic, subtopics, toggleSubtopics, visibleSubtopics }) {
  return (
    <div className='servidores'>
      <div className='topicostyles'>
        <h1 onClick={() => toggleSubtopics(topic)}>{topic}</h1>
      </div>

      {visibleSubtopics[topic] && (
        <div className="subtopics">
          {subtopics.map((subtopic, index) => (
            <Link key={index} to={subtopic.path} className="card-link">
              <div className="card">
                <h1>{subtopic.label}</h1>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SidebarTopic;
