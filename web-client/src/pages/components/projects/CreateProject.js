import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import Input from '../../../components/Input';
import TextArea from '../../../components/TextArea';
import Close from '../../../images/icon-close.svg';
import { createProject, createFile } from '../../../graphql/Project';

const CreateProject = ({ setDisplayCreation }) => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [projectPictureName] = useState('');

	const [ImageName, setImageName] = useState('');
	const [Images, setImages] = useState([]);


	const [sendProjectInformations] = useMutation(
		createProject, 
		{
			onCompleted: () => setDisplayCreation(false),
			onError: (error) => console.log(error.message),
			refetchQueries: ['getProjects'],	
		}
	);

	const [sendPicture] = useMutation(createFile);

	const onChange = async ({
        target: { validity, files: [file] }
    }) => {
        if (validity.valid) {
        const uplaoaded = await sendPicture({ variables: { picture: file } });

        uplaoaded.data.createFile && setImageName(file.name);
        }
    };

	const onSubmit = (event) => {
		event.preventDefault();

		sendProjectInformations({
			variables: {
				name,
				description,
				createdAt: new Date().toJSON(),
				projectPictureName,
				images: Images			
			},
		});
	};

	return (
		<div className="bg-wildmine_black border-4 border-secondary_color text-text_color rounded-2xl fixed z-30 w-1/2 left-1/4">
			<img
				className="cursor-pointer absolute right-8 top-6"
				src={Close}
				alt="Fermer la fenêtre"
				onClick={() => setDisplayCreation(false)}
			/>

			<form onSubmit={onSubmit} className="w-2/3 mx-auto">
				<Input
					label="Titre de votre projet"
					placeHolder="Entrez le nom de votre projet"
					labelClassName="text-sm"
					setValue={setName}
					value={name}
					required
				/>

				<TextArea
					label="Description"
					placeHolder="Entrez une description de votre projet"
					labelClassName="text-sm"
					setValue={setDescription}
					value={description}
					required
				/>

				<div className="w-5/12 mx-auto flex justify-center">
					<label className="button-general cursor-pointer">
						{ImageName || 'Sélectionnez une image'}

						<input
							type="file"
							onChange={onChange}
							accept="image/png, image/jpg, image/gif, image/jpeg"
							className="hidden"
						/>
					</label>
					{ImageName &&
						<div className="text-center">
							<button type="button" className="submit-button mb-8 mt-4" onClick={() => setImages([...Images, ImageName])} >Ajouter l'image</button>
						</div>
					}			
				</div>

				<div className="text-center">
					<button className="submit-button mb-8 mt-4">Créer votre projet</button>
				</div>
			</form>
		</div>
	);
};

export default CreateProject;
