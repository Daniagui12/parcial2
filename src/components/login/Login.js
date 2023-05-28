import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      body: JSON.stringify({
        login: event.target.email.value,
        password: event.target.password.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    if (response.status === 200) {
      setIsLoggedIn(true);
    }
  };

  if (isLoggedIn) {
    navigate('/cafe');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className = "passwordT" style = {{paddingRight: "39.5rem", fontFamily: "Inter", fontWeight: "bold"}}>
          <FormattedMessage id="Inicio de sesion" />
        </label>
        <div className='passwordSpace'>
          <input
            name="email"
            type="username"
            className="textLogin"
            required
          />
        </div>
      </div>
      <div className="mb-3">
        <label className = "passwordT" style = {{paddingRight: "43rem", fontFamily: "Inter", fontWeight: "bold"}}>
          <FormattedMessage id="Contraseña"/>
        </label>
        <div className='passwordSpace'>
          <input
            name="password"
            type="password"
            className="textLogin"
            required
          />
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          <FormattedMessage id="Inicio de sesion"/>
        </button>
      </div>
    </form>
  );
}

export default Login;

