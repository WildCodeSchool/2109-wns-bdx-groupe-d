import React from 'react';

const LoginInput = ({ label, value, setValue, placeHolder, type = "text" }) => (
  <div className="login-input-container">
        <label className="login-label">
            {label}
        </label>
        <input
            className="login-input"
            type={type}
            onChange={(v) => setValue(v.target.value)}
            value={value}
            placeholder={placeHolder}
        />
    </div>
);

export default LoginInput;