import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            setMessage('Login successful! Welcome, admin.');
        } else {
            setMessage('Invalid username or password.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login Page</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
            />
            <button onClick={handleLogin} className="login-button">Login</button>
            {message && <p className="login-message">{message}</p>}
        </div>
    );
};

export default LoginPage;