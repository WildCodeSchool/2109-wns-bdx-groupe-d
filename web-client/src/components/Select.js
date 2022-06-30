import React from 'react';

const Select = ({ options, setValue, value, label }) => (
  <div className='flex flex-col'>
    <label className='label text-sm mb-4'>{label}</label>

    <div className='w-full md:w-1/2'>
    <select
      className='select'
      value={value}
      onChange={event => setValue(event.target.value)}
    >
      {options.map(option => {
        return <option value={option.value}>{option.label}</option>;
      })}
    </select>
  </div>
  </div>
);

export default Select;