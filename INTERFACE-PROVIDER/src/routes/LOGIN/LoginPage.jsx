import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/Login/login';

const BLOCK_TIME = 3 * 60 * 1000; // 3 minutos em milissegundos
const MAX_ATTEMPTS = 5; // Máximo de tentativas antes do bloqueio no frontend

function LoginPage() {
  const [error, setError] = useState('');
  const [lockTime, setLockTime] = useState(null); // Tempo de bloqueio em segundos
  const [attempts, setAttempts] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedLockTime = localStorage.getItem('lockTime');
    const storedAttempts = parseInt(localStorage.getItem('attempts'), 10);

    if (storedLockTime) {
      const lockTimeRemaining = Math.max(0, Math.ceil((parseInt(storedLockTime, 10) - Date.now()) / 1000));
      setLockTime(lockTimeRemaining);

      if (lockTimeRemaining <= 0) {
        localStorage.removeItem('lockTime');
        setAttempts(storedAttempts || 0);
        setError('');
      } else {
        setAttempts(storedAttempts || 0);
        setError(`Conta bloqueada. Tente novamente em ${lockTimeRemaining} segundos.`);
      }
    } else {
      setAttempts(storedAttempts || 0);
    }

    const timer = setInterval(() => {
      if (lockTime > 0) {
        setLockTime(prev => prev - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [lockTime]);

  const handleLogin = async (email, password) => {
    // Verifica se a conta está bloqueada no frontend
    if (lockTime > 0) {
      setError(`Conta bloqueada. Tente novamente em ${lockTime} segundos.`);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('Login response:', data);

      if (response.ok && data.token) {
        localStorage.setItem('token', data.token);
        localStorage.removeItem('lockTime');
        localStorage.removeItem('attempts');
        setAttempts(0);
        setError('');
        navigate('/');
      } else {
        if (response.status === 403 && data.msg.includes('Tente novamente em')) {
          // Extrai o tempo restante da mensagem
          const timeLeftMatch = data.msg.match(/Tente novamente em (\d+) segundos/);
          if (timeLeftMatch) {
            const lockTimeSeconds = parseInt(timeLeftMatch[1], 10);
            const newLockTime = Date.now() + lockTimeSeconds * 1000;
            localStorage.setItem('lockTime', newLockTime);
            localStorage.setItem('attempts', 0);
            setLockTime(lockTimeSeconds);
            setError(`Conta bloqueada. Tente novamente em ${lockTimeSeconds} segundos.`);
          }
        } else {
          setAttempts(prev => {
            const newAttempts = prev + 1;

            if (newAttempts >= MAX_ATTEMPTS) {
              const newLockTime = Date.now() + BLOCK_TIME;
              localStorage.setItem('lockTime', newLockTime);
              localStorage.setItem('attempts', 0);
              setLockTime(Math.ceil(BLOCK_TIME / 1000)); // Tempo inicial do bloqueio
              setError(`Conta bloqueada por excesso de tentativas. Tente novamente em 3 minutos.`);
            } else {
              localStorage.setItem('attempts', newAttempts);
              setAttempts(newAttempts);
              setError('Credenciais inválidas.');
            }
            return newAttempts;
          });
        }
      }
    } catch (error) {
      setError('Erro ao fazer login');
    }
  };

  return (
    <div className="login-page">
      <LoginForm onLogin={handleLogin} error={error} lockTime={lockTime} />
    </div>
  );
}

export default LoginPage;
