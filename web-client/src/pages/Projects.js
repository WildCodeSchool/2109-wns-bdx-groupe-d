import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getProjects } from '../graphql/Project.js';

import DisplayProject from './components/projects/DisplayProject';
import CreateProject from './components/projects/CreateProject';
import CreateImage from './components/images/CreateImage';
import Button from '../components/Button';
import SearchButton from '../components/SearchButton.js';

const Projects = () => {
	const [displayHover, setDisplayHover] = useState(false);
  const [displayCreationProject, setDisplayCreationProject] = useState(false);
  const [displayCreationImage, setDisplayCreationImage] = useState(false);

  const { loading, error, data } = useQuery(getProjects);


  if (loading) return 'Loading...';

  if (error) return `Error! ${error.message}`;

  return (
    <div className="organization-container">
      <div className='flex justify-around mb-8'>

        <SearchButton/>

        <Button
          onClick={setDisplayCreationProject}
          onClickValue={displayCreationProject}
          buttonLabel='Créer un projet'
          buttonType='button'
        />

        <Button
          onClick={setDisplayCreationImage}
          onClickValue={displayCreationImage}
          buttonLabel='Créer une image'
          buttonType='button'
        />

      </div>

      {displayCreationProject &&
        <CreateProject setDisplayCreationProject={setDisplayCreationProject}/>
      }

      {displayCreationImage &&
        <CreateImage setDisplayCreationImage={setDisplayCreationImage}/>
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
              to="/issue"
            />;
        })
      :<p>Aucun projet pour le moment</p>}

      </div>
    </div>
  );
}

export default Projects;
