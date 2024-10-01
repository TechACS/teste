import React from 'react';
import { Link } from 'react-router-dom';

function SidebarTopic({ topic, path, subtopics, toggleSubtopics, visibleSubtopics }) {
  return (
    <div className='servidores'>
      {path ? (
        <Link to={path} className="topic-link">
          {topic}
        </Link>
      ) : (
        <h1 onClick={() => toggleSubtopics(topic)}>{topic}</h1>
      )}

      {visibleSubtopics[topic] && (
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
}

export default SidebarTopic;
