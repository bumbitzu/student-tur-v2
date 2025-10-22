import React, { useState } from 'react';

function Login({ message, redirectUrl }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = () => {
        console.log('Login attempt:', username, password);
        if (redirectUrl) {
            window.location.href = redirectUrl;
        }
    };
    
    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
            <h1>Login Page</h1>
            {message && <p style={{ color: 'red' }}>{message}</p>}
            <div>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;