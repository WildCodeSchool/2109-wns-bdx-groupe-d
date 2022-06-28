import React from 'react';
import loupe from '../images/loupe.svg';

const SearchButton = () => (
  <div className='flex border border-secondary_color rounded-xl text-secondary_color w-[230px]'>
    <input className='bg-wildmine_black rounded-full h-8 pl-4 focus:outline-none placeholder-secondary_color' placeholder='Rechercher ...'/>

    <img className='cursor-pointer mr-4' src={loupe} alt='Rechercher'/>
  </div>
);

export default SearchButton;