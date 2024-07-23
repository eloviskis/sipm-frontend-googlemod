import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/admin/dashboard');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Erro ao buscar dados administrativos:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Painel Administrativo</h1>
      <p className="mt-4">Bem-vindo ao painel administrativo.</p>
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

export default AdminDashboard;
