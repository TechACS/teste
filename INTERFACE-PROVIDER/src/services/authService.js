// services/authService.js

const API_URL = 'http://localhost:3000/auth/login'; // URL da API

// Função para fazer login
export const loginUser = async (email, password) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, data };
    } else {
      return { success: false, data, status: response.status };
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return { success: false, error: 'Erro ao fazer login' };
  }
};
