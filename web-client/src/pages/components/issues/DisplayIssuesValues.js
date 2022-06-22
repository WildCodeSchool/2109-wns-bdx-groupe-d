import React from 'react';

const DisplayIssuesValues = issue => (
  <div className='grid grid-cols-7 p-4 bg-grey_light text-wildmine_black font-bold shadow-md'>
    <p>{issue.nbr}</p>
    <p>{issue.title}</p>
    <p>{issue.description}</p>
    <p>{issue.projectName}</p>
    <p>{issue.status}</p>
    <p>{issue.priority}</p>
    <p>{issue.date}</p>
  </div>
);

export default DisplayIssuesValues;