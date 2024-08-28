const NewClient = 'http://localhost:3000/client/cadastrarClient';

export const cadastrarClient = async (name, cpf, email, phone, rg, cnpj, dateNasc, bairro, numbhome) => {
    try {
        const token = localStorage.getItem('token'); // Obtenha o token do localStorage
        
        const response = await fetch(NewClient, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Inclua o token no header Authorization
            },
            body: JSON.stringify({
                name,
                cpf,
                email,
                phone,
                rg,
                cnpj,
                dateNasc,
                bairro, // Assumido que este campo representa o bairro
                numbhome // Assumido que este campo representa o número da residência
            }), // Envie os dados no corpo da requisição
        });

        const data = await response.json();

        if (response.ok) {
            return {
                success: true,
                message: 'Cliente cadastrado com sucesso!',
                client: data.client,
                status: response.status,
                data: data,
            };
        } else {
            return {
                success: false,
                message: 'Erro ao cadastrar cliente',
                error: data.msg || 'Erro desconhecido',
                status: response.status,
                data: data,
            };
        }
    } catch (error) {
        console.error('Erro ao cadastrar cliente:', error);
        return {
            success: false,
            message: 'Erro ao cadastrar cliente',
            error: error.message || 'Erro desconhecido',
            status: 500,
            data: null,
        };
    }
};
