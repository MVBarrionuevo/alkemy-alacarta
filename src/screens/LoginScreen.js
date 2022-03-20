import React, { useState } from 'react';

function LoginScreen() {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const onEmailChange = (event) => {
        setEmail(event.target.value);
        console.log(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    const onLoginSubmit = () => {
        console.log(email, password)
    }

    return (
        <div>
            <div className="form-floating mb-3">
                <input type="email" onChange={onEmailChange} className="form-control" id="floatingInput" placeholder="email@ejemplo.com" />
                <label>Email</label>
            </div>
            <div className="form-floating">
                <input type="password" onChange={onPasswordChange} className="form-control" id="floatingPassword" placeholder="Password" />
                <label>Password</label>
            </div>
            <button onClick={onLoginSubmit}>Ingresar</button>
        </div>
    );
}

export { LoginScreen };