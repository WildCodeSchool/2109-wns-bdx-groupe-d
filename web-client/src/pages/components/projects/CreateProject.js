import React, { useState } from 'react';
import Button from '../../../components/Button';
import { useMutation } from '@apollo/client';

import Input from '../../../components/Input';
import TextArea from '../../../components/TextArea';
import Close from '../../../assets/images/icon-close.svg';
import { setProject } from '../../../graphql/Project';

const CreateProject = ({ setDisplayCreation }) => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	const [sendProjectInformations] = useMutation(setProject, {
		onCompleted: () => setDisplayCreation(false),
		onError: (error) => console.log(error.message),
		refetchQueries: ['getProjects'],
	});

	const onClick = () => {
		console.log(name);
		console.log(description);

		sendProjectInformations({
			variables: {
				name,
				description,
				createdAt: new Date().toJSON(),
			},
		});
	};

	const handleChange = (event) => {
		console.log(event.target.files[0]);
	};

	return (
		<div className="bg-wildmine_black border-4 border-secondary_color text-text_color_light rounded-2xl fixed z-30 w-1/2 left-1/4">
			<p className="font-bold text-secondary_color text-2xl text-center my-8">Créez votre projet</p>

			<img
				className="cursor-pointer absolute right-8 top-6"
				src={Close}
				alt="Fermer la fenêtre"
				onClick={() => setDisplayCreation(false)}
			/>

			<div className="w-2/3 mx-auto">
				<Input
					label="Titre de votre projet"
					placeHolder="Entrez le nom de votre projet"
					labelClassName="text-sm"
					setValue={setName}
					value={name}
				/>

				<TextArea
					label="Description"
					placeHolder="Entrez une description de votre projet"
					labelClassName="text-sm"
					setValue={setDescription}
					value={description}
				/>

				<input type="file" onChange={handleChange} />

				<div className="text-center">
					<Button onClick={onClick} buttonLabel="Créer votre projet" buttonClassName="mb-8" />
				</div>
			</div>
		</div>
	);
};

export default CreateProject;
