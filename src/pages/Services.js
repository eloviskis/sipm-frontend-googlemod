import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig'; // Certifique-se de usar a configuração do Axios
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/services');
        setServices(response.data);
      } catch (error) {
        console.error('Erro ao buscar serviços:', error);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">Serviços</h1>
          <div className="bg-white p-8 rounded shadow-md">
            {services.length === 0 ? (
              <p>Não há serviços cadastrados.</p>
            ) : (
              <ul>
                {services.map(service => (
                  <li key={service.id} className="mb-4">
                    <p><strong>Nome:</strong> {service.name}</p>
                    <p><strong>Descrição:</strong> {service.description}</p>
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

export default Services;
