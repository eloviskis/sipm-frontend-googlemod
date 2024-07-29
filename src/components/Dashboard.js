import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    services: 0,
    appointments: 0,
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [usersRes, servicesRes, appointmentsRes] = await Promise.all([
          axios.get('/api/users/stats'),
          axios.get('/api/services/stats'),
          axios.get('/api/appointments/stats'),
        ]);

        setStats({
          users: usersRes.data.count,
          services: servicesRes.data.count,
          appointments: appointmentsRes.data.count,
        });
      } catch (error) {
        setError('Erro ao carregar as estatísticas.');
        console.error('Erro ao carregar as estatísticas:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Painel de Controle</h2>
        {error && <p className="error text-red-500 mb-4">{error}</p>}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-gray-200 rounded">
            <h3 className="text-xl font-bold">Usuários</h3>
            <p>{stats.users}</p>
          </div>
          <div className="p-4 bg-gray-200 rounded">
            <h3 className="text-xl font-bold">Serviços</h3>
            <p>{stats.services}</p>
          </div>
          <div className="p-4 bg-gray-200 rounded">
            <h3 className="text-xl font-bold">Agendamentos</h3>
            <p>{stats.appointments}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
