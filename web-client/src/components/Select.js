import React from 'react';

const Select = ({ options, setValue, value, label }) => (
  <div className='flex flex-col'>
    <label className='label text-sm mb-4'>{label}</label>

    <select
      value={value}
      onChange={event => setValue(event.target.value)}
    >
        {options.map(option => {
          return <option value={option.value}>{option.label}</option>;
        })}
    </select>
  </div>
);

export default Select;