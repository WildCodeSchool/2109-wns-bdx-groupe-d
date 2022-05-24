import React from 'react';

const TextArea = ({ label, value, setValue, placeHolder, labelClassName }) => (
  <div className="input-container">
      <label className={`label ${labelClassName}`}>
          {label}
      </label>
      <textarea
          className='input-area'
          onChange={(v) => setValue(v.target.value)}
          value={value}
          placeholder={placeHolder}
      />
  </div>
);

export default TextArea;