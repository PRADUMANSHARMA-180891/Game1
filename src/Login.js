import React, { useState} from "react";
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    function handleSubmit(e) {
      e.preventDefault();
      // Here you would typically make an API call to authenticate the user
      // For this example, we'll just check if the email and password match
      if (email === 'test@example.com' && password === 'password') {
        onLogin(email);
        navigate('/');
      } else {
        alert('Invalid email or password');
      }
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }

export default Login;