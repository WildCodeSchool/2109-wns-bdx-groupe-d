import React from 'react';

const Input = ({ label, value, setValue, placeHolder, type = "text", inputClassName, labelClassName }) => (
  <div className="input-container">
        <label className={`label ${labelClassName}`}>
            {label}
        </label>
        <input
            className={`input ${inputClassName}`}
            type={type}
            onChange={(v) => setValue(v.target.value)}
            value={value}
            placeholder={placeHolder}
        />
    </div>
);

export default Input;