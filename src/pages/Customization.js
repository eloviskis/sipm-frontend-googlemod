// src/pages/Customization.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Customization = () => {
  const [customization, setCustomization] = useState({
    logo: '',
    acceptedContracts: '',
    messages: '',
    agenda: '',
  });

  useEffect(() => {
    // Fetch customization data
    axios.get('/api/customization')
      .then(response => setCustomization(response.data))
      .catch(error => console.error('Erro ao buscar dados de customização:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomization({ ...customization, [name]: value });
  };

  const handleSave = () => {
    // Save customization data
    axios.post('/api/customization', customization)
      .then(response => console.log('Customização salva:', response.data))
      .catch(error => console.error('Erro ao salvar customização:', error));
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">Customização</h1>
          <div className="bg-white p-8 rounded shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700">Logo:</label>
              <input
                type="text"
                name="logo"
                value={customization.logo}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Convênios aceitos:</label>
              <input
                type="text"
                name="acceptedContracts"
                value={customization.acceptedContracts}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Mensagens automáticas:</label>
              <textarea
                name="messages"
                value={customization.messages}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Agenda:</label>
              <textarea
                name="agenda"
                value={customization.agenda}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <button onClick={handleSave} className="bg-blue-500 text-white py-2 px-4 rounded">Salvar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customization;
