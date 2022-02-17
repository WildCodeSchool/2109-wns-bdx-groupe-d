import React from 'react';

import projectImage from '../images/dev.jpeg';


const Projects = () => {
  const organizationProjects = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
  ]
  return (
    <div className="organization-container">
      {organizationProjects.map((projectObject) => {
        return (
          <div className="organization-project-container" key={projectObject}>
            <img src={projectImage} alt="Sélection du projet" />
          </div>
        );
      })}
    </div>
  );
}

export default Projects;