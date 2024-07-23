import React, { useState, useEffect } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState('');

  useEffect(() => {
    // Simulação de requisição para obter serviços existentes
    const fetchServices = async () => {
      const response = await fetch('/api/services');
      const data = await response.json();
      setServices(data);
    };
    fetchServices();
  }, []);

  const handleAddService = async () => {
    // Código para adicionar novo serviço ao backend
    const response = await fetch('/api/services', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newService }),
    });
    const data = await response.json();
    setServices([...services, data]);
    setNewService('');
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
