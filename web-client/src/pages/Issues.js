import React from 'react';
import { NavLink } from 'react-router-dom';

import SearchButton from '../components/SearchButton';
import DisplayIssuesTitle from './components/issues/DisplayIssuesTitle';
import DisplayIssuesValues from './components/issues/DisplayIssuesValues';

const Issues = ({ issues }) => {
  return (
    <div>
      <div className='w-[230px]'>
        <SearchButton/>
      </div>

      <DisplayIssuesTitle/>

      <div>
        {issues.map((issue, issueIndex) => (
          <NavLink to={`/issue/${issue.id}`}>
            <DisplayIssuesValues key={issueIndex} issue={issue} issueIndex={issueIndex} issues={issues}/>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Issues;