import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { fetchClients } from '../../../services/authService';

const ExportToExcelButton = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const exportToExcel = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchClients();
      if (result.success) {
        const clients = result.data;

        // Adapta os dados conforme necessário para exportação
        const adaptedData = clients.flatMap(client => 
          client.equipamentos.map(equipamento => ({
            Nome: client.name,
            Email: client.email,
            CPF: client.cpf,
            Telefone: client.phone,
            SERIAL: equipamento.serial,
            PPPOE: equipamento.pppoe,
            IP: equipamento.ip,
            MODELO: equipamento.modelo,
            SSID24G: equipamento.ssid24g,
            SENHA24G: equipamento.senha24g,
            SSID5G: equipamento.ssid5g,
            SENHA5G: equipamento.senha5g,
          }))
        );

        // Cria a planilha
        const ws = XLSX.utils.json_to_sheet(adaptedData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Clientes e Equipamentos');
        const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([wbout], { type: 'application/octet-stream' });
        saveAs(blob, 'clientes_e_equipamentos.xlsx');
      } else {
        throw new Error(result.error || 'Erro ao buscar dados dos clientes');
      }
    } catch (error) {
      console.error('Erro ao exportar para Excel:', error);
      setError('Erro ao exportar para Excel. Verifique o console para mais detalhes.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="export-button" onClick={exportToExcel}>
      <FontAwesomeIcon icon={faFileExcel} className="icon" />
      <span>Exportar para Excel</span>
      {loading && <span>Carregando...</span>}
      {error && <span>{error}</span>}
    </div>
  );
};

export default ExportToExcelButton;
