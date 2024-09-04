import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { fetchClients } from '../../../services/authService';
import { fetchEquipamentos } from '../../../services/ListarEquipamentos';

const ExportToExcelButton = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const exportToExcel = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchClients();
      if (result.success) {
        const data = result.data;

        // Adapte os dados conforme necessário
        const adaptedData = data.map(client => ({
          Nome: client.name,
          Email: client.email,
          CPF: client.cpf,
          Telefone: client.phone,
          SERIAL:   Equipamentos.serial,
          PPPOE:   Equipamentos.pppoe,
          IP:   Equipamentos.ip,
          MODELO:   Equipamentos.modelo,
          ssid24g:   Equipamentos.ssid24g,
          senha24g:   Equipamentos.senha24g,
          ssid5g:   Equipamentos.ssid5g,
          senha5g:   Equipamentos.senha5g,

        }));

        
        const ws = XLSX.utils.json_to_sheet(adaptedData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Clientes');
        const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([wbout], { type: 'application/octet-stream' });
        saveAs(blob, 'clientes.xlsx');
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
