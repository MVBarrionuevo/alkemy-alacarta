import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
const axios = require('axios').default;

function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSpinner, setShowSpinner] = useState(false);

    const navigate = useNavigate();

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const login = () => {

        const url = 'http://challenge-react.alkemy.org/'
        const body = {
            email: email,
            password: password
        };

        setShowSpinner(true);
        axios.post(url, body)
            .then((response) => {
                const token = response.data.token;
                localStorage.setItem('loginToken', token)
                navigate('/');

                setShowSpinner(false);
            }).catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario y/o contraseña incorrecta'
                });

                setShowSpinner(false);
            });


    }

    const onLoginSubmit = () => {
        if (email == '') {
            alert('Ingrese un email');
        } else if (password == '') {
            alert('Ingrese una contraseña');
        } else {
            console.log(email, password)
            login();
        }
    }

    return (
        <React.Fragment>
            {showSpinner ? (
                <div className=" spinner d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                    </div>
                </div>
            ) : (

                <div>
                    <div className='titleScreen'>Log In</div>
                    <form className='formLogIn'>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" onChange={onEmailChange} className="form-control" id="floatingInput" placeholder="email@ejemplo.com" />
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" onChange={onPasswordChange} className="form-control" id="floatingPassword" placeholder="Password" />

                        </div>
                        <div className='linkLogIn'>
                            <a href='#'>¿Olvidaste la contraseña?</a>
                        </div>
                        <button className='btn logIn btn-success' onClick={onLoginSubmit}>Ingresar</button>
                    </form>

                </div>
            )}
            
        </React.Fragment>


    );
}

export { LoginScreen };