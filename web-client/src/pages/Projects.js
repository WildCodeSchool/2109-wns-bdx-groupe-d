import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import { getProjects } from "../graphql/Project.js";

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

        <div className='flex border border-secondary_color rounded-xl text-secondary_color'>
          <input className='bg-wildmine_black rounded-full h-8 pl-4 focus:outline-none placeholder-secondary_color' placeholder='Rechercher ...'/>

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

        {data.projects.length > 0 ? data.projects.map((projectObject, index) => {
          return <DisplayProject
              key={index}
              setDisplayHover={setDisplayHover}
              index={index}
              projectObject={projectObject}
              displayHover={displayHover}
              project={data.projects[index]}
            />;
        })
      :<p>Aucun projet pour le moment</p>}

      </div>
    </div>
  );
}

export default Projects;