import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({ onSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Here you would typically make an API call to create the user account
    // For this example, we'll just simulate the creation of the account
    onSignup(email);
    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <div>
        <label htmlFor="confirm-password">Confirm password:</label>
        <input type="password" id="confirm-password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
      </div>
      <button type="submit">Sign up</button>
    </form>
  );
}

export default Signup;