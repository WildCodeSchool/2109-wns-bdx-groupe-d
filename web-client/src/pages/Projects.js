import React, { useState } from 'react';

import projectImage from '../images/dev.jpeg';
import smiley from '../images/smiley.png';
import coffee from '../images/coffee.png';
import donut from '../images/donut.png';
import psyche from '../images/psyche.png';
import water from '../images/water.png';
import blackNWhite from '../images/blackNWhite.png';


const Projects = () => {
	const [displayHover, setDisplayHover] = useState(false);

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
      {organizationProjects.map((projectObject, index) => {
        let image;

        if (index === 0) image = smiley;

        else if (index === 1) image = coffee;

        else if (index === 2) image = donut;

        else if (index === 3) image = psyche;

        else if (index === 4) image = water;

        else if (index === 5) image = blackNWhite;

        else image = projectImage;

        return (
          <div
            onMouseEnter={() => setDisplayHover(index + 1)}
            onMouseLeave={() => setDisplayHover(0)}
            className="organization-project-container"
            key={projectObject}  
            style={{ height: '30rem'}}
          >
            {displayHover === index + 1 &&
              <div className='w-full h-2/3 bottom-0 bg-white text-black absolute z-10 opacity-80 text-center p-4'>
                <p className='font-bold mb-8'>Un joli hoover</p>
                <p>C'est l'histoire d'un joli hoover, il était petit et donc pas très grand. Mais un jour il décida de se relevé et devenir un grand hoover!
                  C'est pour cela qu'il décida de grandir et donc d'être grand. Merci d'avoir perdu du temps à lire ce hoover, bisous!
                </p>
              </div>
            }
            <img src={image} alt="Sélection du projet" />
          </div>
        );
      })}
    </div>
  );
}

export default Projects;