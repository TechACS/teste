import React, { useState } from 'react';
import './Upload.scss'; // Importe o arquivo de estilos

function Upload() {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div 
      className="upload-container" 
      onDragOver={handleDragOver} 
      onDrop={handleDrop}
    >
      <input 
        type="file" 
        id="fileInput" 
        className="file-input" 
        onChange={handleFileChange} 
      />
      <label htmlFor="fileInput" className="upload-label">
        {fileName ? fileName : 'Arraste e solte um arquivo aqui ou clique para selecionar'}
      </label>
    </div>
  );
}

export default Upload;
