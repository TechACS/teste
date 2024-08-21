import React, { useState } from 'react';
import './login.scss';

// Função para validar a entrada
const validateInput = (input) => {
  const regex = /^[a-zA-Z0-9@._-]+$/;
  return regex.test(input);
};

function LoginForm({ onLogin, error, lockTime }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [inputError, setInputError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateInput(user) || !validateInput(password)) {
      setInputError('Entrada inválida. Caracteres não permitidos.');
      return;
    }

    setInputError('');
    onLogin(user, password);
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form" onSubmit={handleSubmit}>
            <h2 className="title">Entrar</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Usuário"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <input
              type="submit"
              value="Login"
              className="btn solid"
              disabled={lockTime > 0}
            />
            {inputError && <p className="error">{inputError}</p>}
            {error && <p className="error">{error}</p>}
            {lockTime !== null && lockTime > 0 && (
              <p className="error">Conta bloqueada. Tente novamente em {lockTime} segundos.</p>
            )}
          </form>
        </div>
      </div>
      
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Seja bem-vindo</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
