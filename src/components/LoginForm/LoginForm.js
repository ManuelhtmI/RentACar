// LoginForm.js
import React from 'react';
import './LoginForm.css';

function LoginForm({ onLogin }) {
  return (
    <div className="login-form">
      <div className="card">
        <h2 className="card-title">Connexion</h2>
        <button className="login-button" onClick={onLogin}>Se connecter</button>
      </div>
    </div>
  );
}

export default LoginForm;
