import React from 'react';

import projectImage from '../images/dev.jpeg';


const Projects = () => {
  const organisationProjects = [
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
    "16",
    "16",
    "16",
    "20",
  ]
  return (
    <div className="organisation-container">
      {organisationProjects.map((projectObject) => {
        console.log(projectObject);
        return (
          <div className="organisation-project-container" key={projectObject}>
            <img src={projectImage} alt="Sélection du projet" />
          </div>
        );
      })}
    </div>
  );
}

export default Projects;