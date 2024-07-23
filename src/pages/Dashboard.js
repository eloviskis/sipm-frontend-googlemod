import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dashboard');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Erro ao buscar dados do painel:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Painel de Controle</h1>
      <p className="mt-4">Bem-vindo ao painel de controle.</p>
      <div>
        {data.map((item, index) => (
          <div key={index} className="p-4 mb-4 bg-white rounded shadow-md">
            {/* Renderize os dados do item aqui */}
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
