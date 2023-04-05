import React, { useState } from "react";

const Signup = ({ handleSignup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignup({ username, password, confirmPassword });
  };

  return (
    <div className="signup-container">
          <form onSubmit={handleSubmit} className="signup-form">
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Signup</button>
    </form>
    </div>
    
  );
};

export default Signup;