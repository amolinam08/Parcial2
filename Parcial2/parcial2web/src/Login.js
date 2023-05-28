import React, { useState } from 'react';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleInputChange = event => {
        if (event.target.name === 'login') {
            setLogin(event.target.value);
        } else if (event.target.name === 'password') {
            setPassword(event.target.value);
        }
    };

    const handleLogin = event => {
        event.preventDefault();

        const url = 'http://localhost:3001/login';
        const loginData = {
            login,
            password
        };

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(loginData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                // Aquí puedes redirigir al usuario al listado de cafés.
                window.location.href = '/coffee-list';
            } else {
                setError(data.message);
            }
        })
        .catch(() => {
            setError('Hubo un error al iniciar sesión.');
        });
    };

    return (
        <div>
            <h1>Inicio de sesión</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Usuario:
                    <input type="text" name="login" onChange={handleInputChange} />
                </label>
                <label>
                    Contraseña:
                    <input type="password" name="password" onChange={handleInputChange} />
                </label>
                <button type="submit">Iniciar sesión</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;
