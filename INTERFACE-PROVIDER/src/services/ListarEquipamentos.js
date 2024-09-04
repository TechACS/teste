const searchEquipamentSERIAL_API_URL = 'http://localhost:3000/equipamento/2232364002514';

const searchALLEquipament_API_URL = 'http://localhost:3000/equipamento/listartodos';


export const searchEquipamentoSERIAL = async (serial) => {
  try {
    const token = localStorage.getItem('token'); // Obtenha o token do localStorage

    const response = await fetch(`${searchEquipamentSERIAL_API_URL}/${encodeURIComponent(serial)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Inclua o token no header Authorization
      },
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, data: data.Equipamentos };
    } else {
      return { success: false, data, status: response.status };
    }
  } catch (error) {
    console.error('Erro ao buscar Equipamento:', error);
    return { success: false, error: 'Erro ao buscar Equipamento' };
  }
};


// Função para buscar todos os clientes
export const fetchEquipamentos = async () => {
    try {
      const token = localStorage.getItem('token'); // Obtenha o token do localStorage
      const response = await fetch(searchALLEquipament_API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Inclua o token no header Authorization
        },
      });
  
      const data = await response.json();
  
      if (response.ok) {
        return { success: true, data: data.Equipamentos };
      } else {
        return { success: false, data, status: response.status };
      }
    } catch (error) {
      console.error('Erro ao buscar Equipamentos:', error);
      return { success: false, error: 'Erro ao buscar Equipamentos' };
    }
  };