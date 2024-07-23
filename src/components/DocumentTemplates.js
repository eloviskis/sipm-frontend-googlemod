import React, { useState, useEffect } from 'react';

const DocumentTemplates = () => {
  const [templates, setTemplates] = useState([]);
  const [newTemplate, setNewTemplate] = useState('');

  useEffect(() => {
    // Simulação de requisição para obter modelos de documentos existentes
    const fetchTemplates = async () => {
      const response = await fetch('/api/document-templates');
      const data = await response.json();
      setTemplates(data);
    };
    fetchTemplates();
  }, []);

  const handleAddTemplate = async () => {
    // Código para adicionar novo modelo de documento ao backend
    const response = await fetch('/api/document-templates', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newTemplate }),
    });
    const data = await response.json();
    setTemplates([...templates, data]);
    setNewTemplate('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Modelos de Documentos</h2>
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
