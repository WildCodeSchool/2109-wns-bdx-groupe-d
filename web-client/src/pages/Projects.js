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
          <div onMouseOver={() => setDisplayHover(index)} className="organization-project-container" key={projectObject}>
            {displayHover === index &&
              <div className='w-full h-full bg-black absolute z-10'>
                hello le hover
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