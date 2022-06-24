import React, { useState } from 'react';
import { useMutation } from "@apollo/client";

import Input from '../../../components/Input';
import TextArea from '../../../components/TextArea';
import Close from '../../../images/icon-close.svg';
import { createOrganization } from '../../../graphql/Organization';

const CreateOrganization = ({ setDisplayCreation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const [sendOrganizationInformations] = useMutation(
    createOrganization,
    {
      onCompleted: () => setDisplayCreation(false),
      onError: (error) => console.log(error.message),
      refetchQueries: ["getOrganizations"],
    }
  );

  const onSubmit = (event) => {
    event.preventDefault();

    sendOrganizationInformations({
      variables: {
        name,
        description,
      }
    });
  };

  return (
    <div className='bg-wildmine_black border-4 border-secondary_color text-text_color rounded-2xl fixed z-30 w-1/2 left-1/4'>

      <p className='font-bold text-secondary_color text-2xl text-center my-8'>
        Créez votre Organisation
      </p>

      <img
        className='cursor-pointer absolute right-8 top-6'
        src={Close}
        alt='Fermer la fenêtre'
        onClick={() => setDisplayCreation(false)}
      />
      
      <form onSubmit={onSubmit} className='w-2/3 mx-auto'>

        <Input
          label='Titre de votre organisation'
          placeHolder='Entrez le nom de votre organisation'
          labelClassName='text-sm'
          setValue={setName}
          value={name}
          required
        />
        
        <TextArea
          label='Description'
          placeHolder='Entrez une description de votre organisation'
          labelClassName='text-sm'
          setValue={setDescription}
          value={description}
          required
        />

        <div className='text-center'>
          <button
            className='submit-button mb-8 mt-4'
          >
            Créer votre organisation
          </button>
        </div>

      </form>
    </div>
  );
};

export default CreateOrganization;