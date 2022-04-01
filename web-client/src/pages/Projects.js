import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import { getProjects } from "../graphql/Project.js";

import projectImage from '../images/dev.jpeg';
import smiley from '../images/smiley.png';
import coffee from '../images/coffee.png';
import donut from '../images/donut.png';
import psyche from '../images/psyche.png';
import water from '../images/water.png';
import blackNWhite from '../images/blackNWhite.png';
import loupe from '../images/loupe.svg';
import DisplayProject from './components/projects/DisplayProject';
import CreateProject from './components/projects/CreateProject';
import Button from '../components/Button';


const Projects = () => {
	const [displayHover, setDisplayHover] = useState(false);
  const [displayCreation, setDisplayCreation] = useState(false);

  const { loading, error, data } = useQuery(getProjects);

  if (loading) return 'Loading...';

  if (error) return `Error! ${error.message}`;

  return (
    <div className="organization-container">
      <div className='flex justify-around mb-8'>

        <div className='flex border border-blue_green_flash rounded-xl text-blue_green_flash'>
          <input className='bg-wildmine_black rounded-full h-8 pl-4 focus:outline-none' placeholder='Rechercher ...'/>

          <img className='cursor-pointer mr-4' src={loupe} alt='Rechercher'/>
        </div>

        <Button
          onClick={setDisplayCreation}
          onClickValue={displayCreation}
          buttonLabel='Créer un projet'
          buttonType='button'
        />

      </div>

      {displayCreation &&
        <CreateProject setDisplayCreation={setDisplayCreation}/>
      }

      <div className="projects-container">

        {data.projects.map((projectObject, index) => {
          let image;

          if (index === 0) image = smiley;

          else if (index === 1) image = coffee;

          else if (index === 2) image = donut;

          else if (index === 3) image = psyche;

          else if (index === 4) image = water;

          else if (index === 5) image = blackNWhite;

          else image = projectImage;

          return (
            <DisplayProject
              setDisplayHover={setDisplayHover}
              index={index}
              projectObject={projectObject}
              displayHover={displayHover}
              image={image}
              project={data.projects[index]}
            />
          );
        })}

      </div>
    </div>
  );
}

export default Projects;