import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cafe from '../cafe/Cafe';

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
    //Navigate to the cafe page using react router
    navigate('/cafe');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Nombre de usuario</label>
        <input
          name="email"
          type="username"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label>Contraseña</label>
        <input
          name="password"
          type="password"
          className="form-control"
          placeholder="Enter password"
          required
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Ingresar
        </button>
      </div>
    </form>
  );
}

export default Login;

