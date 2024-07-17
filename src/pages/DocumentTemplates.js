// src/pages/DocumentTemplates.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const DocumentTemplates = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    // Fetch document templates data
    axios.get('/api/document-templates')
      .then(response => setTemplates(response.data))
      .catch(error => console.error('Erro ao buscar modelos de documentos:', error));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">Modelos de Documentos</h1>
          <div className="bg-white p-8 rounded shadow-md">
            {templates.length === 0 ? (
              <p>Não há modelos de documentos cadastrados.</p>
            ) : (
              <ul>
                {templates.map(template => (
                  <li key={template.id} className="mb-4">
                    <p><strong>Nome:</strong> {template.name}</p>
                    <p><strong>Conteúdo:</strong> {template.content}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentTemplates;
