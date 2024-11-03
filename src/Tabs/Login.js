import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="container">
      <h2>Login/Register</h2><br/>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </label>
        </div>
        <div>
          <label>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
