import React from 'react';

const DisplayIssuesTitle = () => (
  <div
    className='grid grid-cols-7 p-4 bg-grey_light text-wildmine_black shadow-md rounded-t-lg font-bold mt-12 text-center'
  >
    <p>No du ticket</p>
    <p>Priorité</p>
    <p>Nom du ticket</p>
    <p>Projet</p>
    <p>Description</p>
    <p>Statut</p>
    <p>Date</p>
  </div>
);

export default DisplayIssuesTitle;