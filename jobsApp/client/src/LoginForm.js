import React, { useState } from 'react';
import { login } from './auth';

const LoginForm = ({onLogin}) => {

  const [userState, setUserState] = useState({});

  const handleChange = (event) => {
    const {name, value} = event.target;
    const userStateObj = {[name]: value};
    setUserState(userStateObj);
  };

  const handleClick = (event) => {
    event.preventDefault();
    const {email, password} = userState;
    login(email, password).then((ok) => {
      if (ok) {
        onLogin();
      } else {
        setUserState({...setUserState, error: true});
      }
    });
  };

  return (
    <form>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input className="input" type="text" name="email" value={userState.email}
                 onChange={handleChange} />
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input className="input" type="password" name="password" value={userState.password}
                 onChange={handleChange} />
        </div>
      </div>
      <div className="field">
        <p className="help is-danger">{userState.error && 'Invalid credentials'}</p>
        <div className="control">
          <button className="button is-link" onClick={handleClick}>Login</button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
