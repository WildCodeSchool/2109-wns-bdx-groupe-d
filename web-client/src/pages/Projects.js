import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getProjects } from '../graphql/Project.js';

import projectImage from '../assets/images/dev.jpeg';
import smiley from '../assets/images/smiley.png';
import coffee from '../assets/images/coffee.png';
import donut from '../assets/images/donut.png';
import psyche from '../assets/images/psyche.png';
import water from '../assets/images/water.png';
import blackNWhite from '../assets/images/blackNWhite.png';
import loupe from '../assets/images/loupe.svg';
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
			<div className="flex justify-around mb-8">
				<div className="flex border border-secondary_color rounded-xl text-secondary_color">
					<input
						className="bg-wildmine_black rounded-full h-8 pl-4 focus:outline-none placeholder-secondary_color"
						placeholder="Rechercher ..."
					/>

					<img className="cursor-pointer mr-4" src={loupe} alt="Rechercher" />
				</div>

				<Button
					onClick={setDisplayCreation}
					onClickValue={displayCreation}
					buttonLabel="Créer un projet"
					buttonType="button"
				/>
			</div>

			{displayCreation && <CreateProject setDisplayCreation={setDisplayCreation} />}

			<div className="projects-container">
				{data.projects.length > 0 ? (
					data.projects.map((projectObject, index) => {
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
					})
				) : (
					<p>Aucun projet pour le moment</p>
				)}
			</div>
		</div>
	);
};

export default Projects;
