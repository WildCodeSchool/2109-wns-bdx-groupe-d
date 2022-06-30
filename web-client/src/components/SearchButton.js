import React from 'react';
import loupe from '../images/loupe.svg';

const SearchButton = ({ value, onChange }) => (
  <div className='flex border relative border-secondary_color rounded-xl text-secondary_color max-w-[230px] my-auto'>
    <input
      className='bg-wildmine_black rounded-full h-8 pl-4 focus:outline-none placeholder-secondary_color'
      placeholder='Rechercher ...'
      value={value}
      onChange={onChange}
    />

    <img className='cursor-pointer absolute right-4 top-1 h-6' src={loupe} alt='Rechercher'/>
  </div>
);

export default SearchButton;