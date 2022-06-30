import React from 'react';
import { useQuery } from "@apollo/client";

import SearchButton from '../components/SearchButton';
import DisplayIssuesTitle from './components/issues/DisplayIssuesTitle';
import DisplayIssuesValues from './components/issues/DisplayIssuesValues';
import { userWithRelations } from '../graphql/UserSession';

const IssuesProject = () => {
	const { loading, data } = useQuery(userWithRelations);

  if (loading) return <div className='mx-auto'>Chargement...</div>
  
  return <div>
    <div className='w-[230px]'>
      <SearchButton/>
    </div>

    <DisplayIssuesTitle/>

    <div>
      {data.userWithRelations.issues_assigned
      ? data.userWithRelations.issues_assigned.map((issue, issueIndex) => (
          <DisplayIssuesValues key={issueIndex} issue={issue} issueIndex={issueIndex} issues={data.userWithRelations.issues_assigned}/>
      ))
    : <p>Aucun ticket ne vous est assigné pour le moment</p>}
    </div>
  </div>;
};

export default IssuesProject;