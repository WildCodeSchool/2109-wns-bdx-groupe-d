import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { getIssueById } from '../graphql/Issue';
import Button from '../components/Button';
import AddUserToIssue from './components/issues/AddUserToIssue';
import priorityOptions from '../components/options/priorityOptions';
import statusOptions from '../components/options/statusOptions';


const capitalizeFirstLetter = value => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};


const DetailsIssue = () => {
  const [displayAddUserOnIssue, setDisplayAddUserOnIssue] = useState(false);

  let { id } = useParams();

  const { loading, data, error, refetch } = useQuery(getIssueById, { variables: { id: parseInt(id) } });

  if (loading) return <>Chargement</>

  if (error) return `Error! ${error.message}`;
  
  const issue = data.getIssueById;

  const statusLabel = statusOptions.find(value => value.value === issue.status).label;
  const priorityLabel = priorityOptions.find(value => value.value === issue.priority).label;

  const newDate = new Date(issue.created_at)
  const dateToDisplay = `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`

  return <div className='px-8 md:px-20'>

    <div className='md:flex md:justify-between'>
      <p className='mb-4 md:mb-0 text-2xl font-extrabold'>ANOMALIE N° #{issue.id}</p>


      <Button
        onClick={setDisplayAddUserOnIssue}
        onClickValue={displayAddUserOnIssue}
        buttonLabel='Assigner le ticket à un collaborateur'
        buttonType='button'
      />
    </div>

    {displayAddUserOnIssue &&
      <AddUserToIssue
        setDisplayAddUserOnIssue={setDisplayAddUserOnIssue}
        issueId={id}
        refetch={() => refetch()}
      />
    }

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

      <div className='grid grid-cols-2 md:grid-cols-3 mt-8'>
        <div className='mr-4'>
          <p><span className='font-bold'>Statut : </span>{statusLabel}</p>

          <p className='my-6'><span className='font-bold'>Priorité : </span>{priorityLabel}</p>

          <p>
            <span className='font-bold'>
              Assigné à :
            </span>
            {issue.user_assigned
              ? ` ${capitalizeFirstLetter(issue.user_assigned.first_name)} ${capitalizeFirstLetter(issue.user_assigned.last_name)}`
              : 'Non assigné'
            }
          </p>
        </div>

        <div>
          <p className='mb-6'><span className='font-bold'>Début : </span>{dateToDisplay}</p>

          <p><span className='font-bold'>Temps estimé : </span>{issue.estimated || "Pas d'estimation"}</p>
        </div>
      </div>
    </div>
  </div>;
}

export default DetailsIssue;
