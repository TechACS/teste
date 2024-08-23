import React, { useState } from 'react';
import './login.scss';
import ModelViewer from '../foto3D/ModelViewer';
// Função para validar o email e a senha
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validatePassword = (password) => {
  // Adapte o regex conforme suas necessidades de segurança
  const regex = /^[a-zA-Z0-9@!$%^&*()_+={}|[\]\\:;'"<>,.?/]+$/;
  return regex.test(password);
};

function LoginForm({ onLogin, error, lockTime }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputError, setInputError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email) || !validatePassword(password)) {
      setInputError('Entrada inválida. Verifique o email e a senha.');
      return;
    }

    setInputError('');
    onLogin(email, password);
  };

  return (
    <div className="container">
      <div>
      <ModelViewer /> 
      </div>
   
      <div className="forms-container">
      
        <div className="signin-signup">
      
          <form className="sign-in-form" onSubmit={handleSubmit}>
 
            <h2 className="title">Entrar</h2>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Seja bem-vindo</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
