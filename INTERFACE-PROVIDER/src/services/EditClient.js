// services/EditClient.js

export const updateClient = async (cpf, clientData) => {
    try {
      const token = localStorage.getItem('token'); // Obtenha o token do localStorage
  
      const response = await fetch(`http://localhost:3000/client/editClient/${cpf}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Inclua o token no header Authorization
        },
        body: JSON.stringify(clientData), // Envia os dados do cliente como JSON
      });
  
      // Verifique o tipo de resposta
      const contentType = response.headers.get('Content-Type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        console.error('Resposta não JSON:', text);
        return { success: false, error: 'Resposta inesperada do servidor' };
      }
  
      const data = await response.json();
  
      if (response.ok) {
        return { success: true, data };
      } else {
        return { success: false, error: data.msg || 'Erro desconhecido' };
      }
    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
      return { success: false, error: 'Erro ao atualizar cliente' };
    }
  };
  