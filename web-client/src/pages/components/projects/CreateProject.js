import React, { useState } from 'react';
import Button from '../../../components/Button';
import { useMutation } from "@apollo/client";

import Input from '../../../components/Input';
import TextArea from '../../../components/TextArea';
import Close from '../../../images/icon-close.svg';
import { createProject, createFile } from '../../../graphql/Project';

const CreateProject = ({ setDisplayCreation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [projectPictureName, setProjectPictureName] = useState('');

  const [sendProjectInformations] = useMutation(
    createProject,
    {
      onCompleted: () => setDisplayCreation(false),
      onError: (error) => console.log(error.message),
      refetchQueries: ["getProjects"],
    }
  );

  const [sendPicture] = useMutation(createFile);
  
  const onChange = async ({
    target: { validity, files: [file] }
  }) => {
    if (validity.valid) {
      const uplaoaded = await sendPicture({ variables: { picture: file } });

      uplaoaded.data.createFile && setProjectPictureName(file.name);
    }
  };
  console.log(projectPictureName)
  const onClick = () => {
    console.log(projectPictureName)
    // sendPicture({ variables: { picture }});
    sendProjectInformations({
      variables: {
        name,
        description,
        createdAt: new Date().toJSON(),
        projectPictureName
      }
    });
  };

  return (
    <div className='bg-wildmine_black border-4 border-secondary_color text-text_color rounded-2xl fixed z-30 w-1/2 left-1/4'>

      <p className='font-bold text-secondary_color text-2xl text-center my-8'>
        Créez votre projet
      </p>

      <img
        className='cursor-pointer absolute right-8 top-6'
        src={Close}
        alt='Fermer la fenêtre'
        onClick={() => setDisplayCreation(false)}
      />
      
      <form className='w-2/3 mx-auto'>

        <Input
          label='Titre de votre projet'
          placeHolder='Entrez le nom de votre projet'
          labelClassName='text-sm'
          setValue={setName}
          value={name}
        />
        
        <TextArea
          label='Description'
          placeHolder='Entrez une description de votre projet'
          labelClassName='text-sm'
          setValue={setDescription}
          value={description}
        />

        <input type='file' onChange={onChange}/>

        <div className='text-center'>
          <Button
            buttonType='button'
            onClick={onClick}
            buttonLabel='Créer votre projet'
            buttonClassName='mb-8'
          />
        </div>

      </form>
    </div>
  );
};

export default CreateProject;