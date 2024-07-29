import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/services');
        setServices(response.data);
      } catch (error) {
        console.error('Erro ao obter os serviços:', error);
      }
    };
    fetchServices();
  }, []);

  const handleAddService = async () => {
    try {
      const response = await axios.post('/api/services', { name: newService });
      setServices([...services, response.data]);
      setNewService('');
    } catch (error) {
      setError('Erro ao adicionar o serviço. Tente novamente.');
      console.error('Erro ao adicionar o serviço:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Serviços</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Novo Serviço"
            value={newService}
            onChange={(e) => setNewService(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded"
          />
          <button
            onClick={handleAddService}
            className="bg-green-500 text-white p-2 w-full rounded mt-2 hover:bg-green-700 transition duration-200"
          >
            Adicionar Serviço
          </button>
        </div>
        {error && <p className="error text-red-500">{error}</p>}
        <ul>
          {services.map((service, index) => (
            <li key={index} className="mb-4 p-4 bg-gray-200 rounded">
              {service.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
