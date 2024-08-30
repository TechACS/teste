const searchClientByCpf_API_URL = 'http://localhost:3000/client/searchClient';

// Função para buscar clientes com base na consulta
export const searchClientByCpf = async (query) => {
    try {
      const token = localStorage.getItem('token'); // Obtenha o token do localStorage
  
      const response = await fetch(`${searchClientByCpf_API_URL}?query=${encodeURIComponent(query)}`, {
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
  