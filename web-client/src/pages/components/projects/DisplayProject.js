import React from 'react';

const DisplayProject = ({ setDisplayHover, index, projectObject, displayHover, image }) => {
  return (
  <div
    onMouseEnter={() => setDisplayHover(index + 1)}
    onMouseLeave={() => setDisplayHover(0)}
    className="organization-project-container"
    key={projectObject}
    style={{ height: '30rem'}}
  >
    {displayHover === index + 1 &&
      <div className={`hover-container ${displayHover === index + 1 ? 'hover-open' : ''}`}>
        <p className='font-bold mb-8'>Un joli hoover</p>
        <p>
          C'est l'histoire d'un joli hoover, il était petit et donc pas très grand. Mais un jour il décida de se relevé et devenir un grand hoover!
          C'est pour cela qu'il décida de grandir et donc d'être grand. Merci d'avoir perdu du temps à lire ce hoover, bisous!
        </p>
      </div>
    }
    <img src={image} alt="Sélection du projet" />
  </div>);
};

export default DisplayProject;