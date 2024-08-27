const API_URL = 'http://localhost:3000/auth/login'; // URL da API para login
const API_URL2 = 'http://localhost:3000/client/getClients'; // URL da API para buscar todos os clientes
const SEARCH_API_URL = 'http://localhost:3000/client/searchClient'; // URL da API para buscar clientes com base na consulta

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

// Função para buscar todos os clientes
export const fetchClients = async () => {
  try {
    const token = localStorage.getItem('token'); // Ou outro local onde o token está armazenado
    const response = await fetch(API_URL2, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Inclua o token no header Authorization
      },
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, data: data.clients };
    } else {
      return { success: false, data, status: response.status };
    }
  } catch (error) {
    console.error('Erro ao buscar clientes:', error);
    return { success: false, error: 'Erro ao buscar clientes' };
  }
};

// Função para buscar clientes com base na consulta
export const searchClients = async (query) => {
  try {
    const token = localStorage.getItem('token'); // Ou outro local onde o token está armazenado

    console.log('Consultando a URL:', `${SEARCH_API_URL}?query=${encodeURIComponent(query)}`); // Verifique a URL da solicitação

    const response = await fetch(`${SEARCH_API_URL}?query=${encodeURIComponent(query)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Inclua o token no header Authorization
      },
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, data: data.clients };
    } else {
      return { success: false, data, status: response.status };
    }
  } catch (error) {
    console.error('Erro ao buscar clientes:', error);
    return { success: false, error: 'Erro ao buscar clientes' };
  }
};