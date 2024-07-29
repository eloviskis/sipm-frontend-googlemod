import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig'; // Certifique-se de usar a configuração do Axios

const DocumentTemplates = () => {
  const [templates, setTemplates] = useState([]);
  const [newTemplate, setNewTemplate] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await axios.get('/api/document-templates');
        setTemplates(response.data);
      } catch (error) {
        setError('Erro ao buscar modelos de documentos.');
        console.error('Erro ao buscar modelos de documentos:', error);
      }
    };
    fetchTemplates();
  }, []);

  const handleAddTemplate = async () => {
    try {
      const response = await axios.post('/api/document-templates', { name: newTemplate });
      setTemplates([...templates, response.data]);
      setNewTemplate('');
    } catch (error) {
      setError('Erro ao adicionar novo modelo de documento.');
      console.error('Erro ao adicionar novo modelo de documento:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Modelos de Documentos</h2>
        {error && <p className="error text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Novo Modelo de Documento"
            value={newTemplate}
            onChange={(e) => setNewTemplate(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded"
          />
          <button
            onClick={handleAddTemplate}
            className="bg-green-500 text-white p-2 w-full rounded mt-2 hover:bg-green-700 transition duration-200"
          >
            Adicionar Modelo
          </button>
        </div>
        <ul>
          {templates.map((template, index) => (
            <li key={index} className="mb-4 p-4 bg-gray-200 rounded">
              {template.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DocumentTemplates;
