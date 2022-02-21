import React, { useState } from 'react';

import LoginInput from '../components/LoginInput';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (event) => {
      event.preventDefault();
      console.log(password, email)
    };
    return (
        <>
            <div className="flex justify-center ">
                <form onSubmit={onSubmit} className="mt-8">
                    <LoginInput
                        label="Email"
                        value={email}
                        setValue={setEmail}
                        placeHolder="Entrez votre email"
                    />
                    
                    <LoginInput
                        label="Mot de passe"
                        value={password}
                        setValue={setPassword}
                        placeHolder="Entrez votre mot de passe"
                        type="password"
                    />

                    <div className="md:flex md:items-center mb-6">
                        <label className="md:w-3/3 text-gray-100 font-bold">
                            <input
                                className="mr-2 leading-tight"
                                type="checkbox"
                            />

                            <span className="text-sm">
                                Se souvenir de moi
                            </span>
                        </label>
                    </div>
                    <div className="flex justify-center">
                        <button className="login-button">
                            Me connecter
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;