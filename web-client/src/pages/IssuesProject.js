import React from 'react';
import { useQuery } from "@apollo/client";

import SearchButton from '../components/SearchButton';
import DisplayIssuesTitle from './components/issues/DisplayIssuesTitle';
import DisplayIssuesValues from './components/issues/DisplayIssuesValues';
import { getMyIssues } from '../graphql/Issue';

const IssuesProject = () => {
	const { loading, data } = useQuery(getMyIssues);

  if (loading) return <div className='mx-auto'>Chargement...</div>

  return <div>
  <SearchButton/>

  <DisplayIssuesTitle/>

  <div>
    {data.getMyIssues.map((issue, issueIndex) => (
        <DisplayIssuesValues key={issueIndex} issue={issue} issueIndex={issueIndex} issues={data.getMyIssues}/>
    ))}
  </div>
</div>;
};

export default IssuesProject;