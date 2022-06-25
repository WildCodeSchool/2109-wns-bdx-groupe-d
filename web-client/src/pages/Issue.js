import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getIssueById } from '../graphql/Issue';

const capitalizeFirstLetter = value => {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

const Issue = () => {

  let { id } = useParams();

  const { loading, data } = useQuery(getIssueById, { variables: { id: parseInt(id) } });

  if (loading) return <>Chargement</>
  
  const issue = data.getIssueById;

  return <div className='px-20'>
    <p className='text-2xl font-extrabold'>ANOMALIE N° #{issue.id}</p>

    <div className='my-8 w-11/12 border border-b border-secondary_color'/>

    <div className='text-black bg-bg_issue rounded-lg w-full p-4'>
      <p className='text-xl font-bold my-4'>{issue.name}</p>

      <p className='font-bold mb-2'>Description :</p>

      <p>{issue.description}</p>

      <div className='my-8 w-full border-b border-black'/>

      <p className='font-semibold'>
        Ajouté par :
        <span className='text-secondary_color'>
          {` ${capitalizeFirstLetter(issue.user.first_name)} ${capitalizeFirstLetter(issue.user.last_name)},`}
        </span>
      </p>

      <div className='grid grid-cols-3 mt-8'>
        <div>
          <p><span className='font-bold'>Statut : </span>{issue.status}</p>

          <p className='my-6'><span className='font-bold'>Priorité : </span>{issue.priority}</p>

          <p><span className='font-bold'>Assigné à : </span>{issue.assignedTo || 'Non assigné'}</p>
        </div>

        <div>
          <p className='mb-6'><span className='font-bold'>Début : </span>{issue.created_at}</p>

          <p><span className='font-bold'>Temps estimé : </span>{issue.estimated || 'Pas d\'estimation'}</p>
        </div>
      </div>
    </div>
  </div>;
}

export default Issue;