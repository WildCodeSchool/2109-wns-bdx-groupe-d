import React, { useState } from 'react';

import Close from '../../../images/icon-close.svg';
import Input from '../../../components/Input';
import TextArea from '../../../components/TextArea';
import Select from '../../../components/Select';
import priorityOptions from '../../../components/options/priorityOptions';

const CreateIssue = ({ setDisplayCreation}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const [author, setAuthor] = useState('');

  // status, priorité, auteur, description, titre, assigné
  const onSubmit = event => {
    event.preventDefault();
    console.log('submit')
  }
  return <div className='modal-background'>
    <div className='modal-container'>
        <p className='modal-title'>
          Créez votre ticket
        </p>

        <img
          className='cursor-pointer fixed right-[27%] top-[22%]'
          src={Close}
          alt='Fermer la fenêtre'
          onClick={() => setDisplayCreation(false)}
        />

      <form onSubmit={onSubmit} className='w-2/3 mx-auto'>

        <Input
          label='Titre de votre ticket'
          placeHolder='Entrez le titre de votre ticket'
          labelClassName='text-sm'
          setValue={setName}
          value={name}
          required
        />
        
        <TextArea
          label='Description'
          placeHolder='Entrez une description de votre ticket'
          labelClassName='text-sm'
          setValue={setDescription}
          value={description}
          required
        />

        <Select
          options={priorityOptions}
          setValue={setPriority}
          value={priority}
          label='Priorité du ticket'
        />

        <div className='text-center'>
          <button
            className='submit-button mb-8 mt-4'
          >
            Créer votre ticket
          </button>
        </div>

      </form>
    </div>
  </div>
};

export default CreateIssue;