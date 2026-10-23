import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img
            src={project.img}
            alt={project.category}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = project.localImg;
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;