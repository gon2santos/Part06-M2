import React, { useState } from 'react';

export default function Form() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUSR, setErrorUSR] = useState('');
  const [errorPWD, setErrorPWD] = useState('');

  function validateUser(value) {
    if (!/\S+@\S+\.\S+/.test(value)) {
      setErrorUSR('User should be an email');
    } else {
      setErrorUSR('');
    }
    setUsername(value);
  }

  function validatePass(value) {
    if (!/\d/g.test(value)) {
      setErrorPWD('Password should contain at least a number');
    } else {
      setErrorPWD('');
    }
    setPassword(value);
  }

  return (
    <div>
      <form>
        <span>Userame: </span>
        <input className={errorUSR && 'danger'}
          name="username" value={username} placeholder="username (email)"
          onChange={(e) => validateUser(e.target.value)} />
        
        <p className={errorUSR && 'danger'}>{errorUSR}</p>

        <span>Password: </span>
        <input className={errorPWD && 'danger'}
          name="password" value={password} placeholder="password"
          onChange={(e) => validatePass(e.target.value)} />

        <p className={errorPWD && 'danger'}>{errorPWD}</p>

        <input type="submit" />
      </form>
    </div>
  )
}
