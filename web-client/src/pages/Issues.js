import React from 'react';
import { NavLink } from 'react-router-dom';

import SearchButton from '../components/SearchButton';
import DisplayIssuesTitle from './components/issues/DisplayIssuesTitle';
import DisplayIssuesValues from './components/issues/DisplayIssuesValues';

const Issues = ({ issues }) => {
  return (
    <div>
      <SearchButton/>

      <DisplayIssuesTitle/>

      <div>
        {issues.map((issue, issueIndex) => (
          <div className='relative'>
            <button className='absolute right-2 top-2'>Hello le bouton</button>
          <NavLink to={`/issue/${issue.id}`}>
            <DisplayIssuesValues key={issueIndex} issue={issue} issueIndex={issueIndex} issues={issues}/>
          </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Issues;