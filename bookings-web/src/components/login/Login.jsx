import React, { useState } from 'react';
import { accountStatus } from '../../utils/Auth-Utils.js';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail((email) => (email = e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword((password) => (password = e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await accountStatus(email, password);
      handleUserChange(user);
      //similar thing to this.props.history.push('/');
    } catch (e) {
      setError((error) => (error = e.response.body.error));
    }
  };

  return (
    <section>
      <h3>Welcome! Please Login or Signup</h3>
      {error && <h3>{error}</h3>}
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email:</p>
          <input value={email} onChange={handleEmailChange} />
        </label>
        <label>
          <p>Password:</p>
          <input value={password} onChange={handlePasswordChange} />
        </label>
        <button>Submit</button>
      </form>
    </section>
  );
}
