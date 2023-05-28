import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showError, setShowError] = useState(false);
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

    else if (response.status === 401) {
      setShowError(true); 
    }
  };

  if (isLoggedIn) {
    navigate('/cafe');
  }

  else {
    // Update component to display error message

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <label className="passwordT" style={{ fontFamily: "Inter", fontWeight: "bold" }}>
            <FormattedMessage id="Nombre de usuario" />
          </label>
          <div className='passwordSpace'>
            <input
              name="email"
              type="username"
              className="textLogin"
              style={{ width: "25rem", height: "2.5rem", backgroundColor: "#D9D9D9" }}
              required
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <label className="passwordT" style={{ fontFamily: "Inter", fontWeight: "bold" }}>
            <FormattedMessage id="Contraseña" />
          </label>
          <div className='passwordSpace'>
            <input
              name="password"
              type="password"
              className="textLogin"
              style={{ width: "25rem", height: "2.5rem", backgroundColor: "#D9D9D9" }}
              required
            />
          </div>
        </div>
      </div>
      <div className="d-grid">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button type="submit" className="btn btn-primary" style={{ width: "12rem", borderRadius: "0", backgroundColor: "#8FA98F", color: "black", fontFamily: "Inter", fontWeight: "bold" }}>
            <FormattedMessage id="Iniciar Sesion" />
          </button>
          <button type="button" className="btn btn-secondary" style={{ width: "12rem", borderRadius: "0", backgroundColor: "#E75D5D", color: "black", fontFamily: "Inter", fontWeight: "bold" }}>
            <FormattedMessage id="Cancelar" />
          </button>
        </div>
      </div>
      {showError && (
        <div style={{color: "red"}}>
          <FormattedMessage id="Error" />
        </div>
      )}
    </form>
  );
}

export default Login;