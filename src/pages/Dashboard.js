import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/dashboard');
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do painel:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">Painel de Controle</h1>
          <div className="bg-white p-8 rounded shadow-md">
            {data.length === 0 ? (
              <p>Não há dados no painel.</p>
            ) : (
              <ul>
                {data.map(item => (
                  <li key={item.id} className="mb-4">
                    <p><strong>Título:</strong> {item.title}</p>
                    <p><strong>Descrição:</strong> {item.description}</p>
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

export default Dashboard;
