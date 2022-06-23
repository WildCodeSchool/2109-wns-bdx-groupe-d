import React, { useState } from 'react';
import SearchButton from '../components/SearchButton';
import DisplayIssuesTitle from './components/issues/DisplayIssuesTitle';
import DisplayIssuesValues from './components/issues/DisplayIssuesValues';
import Button from '../components/Button';
import CreateIssue from './components/issues/CreateIssue';

const mockedIssues = [
  {
    nbr: '7762',
    title: "Pb d'affichage",
    description: 'Mais j’ai jamais dit qu’ça devait être vrai! Mais vous êtes complètement con? C’est quand même pas de bol pour lui, hein. Parce que les rares fois où il arrive à faire quelque chose de ses dix doigts, il se goure quand on lui demande son nom.',
    projectName: 'Société pas générale',
    status: 'DONE',
    priority: 'HIGH',
    date: new Date()
  },
  {
    nbr: '5642',
    title: "Bug docker",
    description: 'Mais j’ai jamais dit qu’ça devait être vrai! Mais vous êtes complètement con? C’est quand même pas de bol pour lui, hein. Parce que les rares fois où il arrive à faire quelque chose de ses dix doigts, il se goure quand on lui demande son nom.',
    projectName: "Clara's mac",
    status: 'IN_PROGRESS',
    priority: 'NORMAL',
    date: new Date()
  },
  {
    nbr: '3126',
    title: "Ça marche pas",
    description: 'Mais j’ai jamais dit qu’ça devait être vrai! Mais vous êtes complètement con? C’est quand même pas de bol pour lui, hein. Parce que les rares fois où il arrive à faire quelque chose de ses dix doigts, il se goure quand on lui demande son nom.',
    projectName: 'Société pas générale',
    priority: 'LOW',
    status: 'IN_WAIT',
    date: new Date()
  }
];

const Issues = () => {
  const [displayCreation, setDisplayCreation] = useState(false);
  return (
    <div>
      <div className='flex justify-around mb-8'>
        <SearchButton/>

        <Button
          onClick={setDisplayCreation}
          onClickValue={displayCreation}
          buttonLabel='Créer un ticket'
          buttonType='button'
        />
      </div>

      {displayCreation &&
        <CreateIssue setDisplayCreation={setDisplayCreation}/>
      }

      <DisplayIssuesTitle/>

      <div>
        {mockedIssues.map((issue, issueIndex) => (
          <DisplayIssuesValues key={issueIndex} issue={issue} issueIndex={issueIndex} issues={mockedIssues}/>
        ))}
      </div>
    </div>
  );
}

export default Issues;