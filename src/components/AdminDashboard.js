import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    reports: 0,
    settings: 0,
    notifications: 0,
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [usersRes, reportsRes, settingsRes, notificationsRes] = await Promise.all([
          axios.get('/api/admin/users/stats'),
          axios.get('/api/admin/reports/stats'),
          axios.get('/api/admin/settings/stats'),
          axios.get('/api/admin/notifications/stats'),
        ]);

        setStats({
          users: usersRes.data.count,
          reports: reportsRes.data.count,
          settings: settingsRes.data.count,
          notifications: notificationsRes.data.count,
        });
      } catch (error) {
        setError('Erro ao carregar as estatísticas administrativas.');
        console.error('Erro ao carregar as estatísticas administrativas:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Painel Administrativo</h2>
        {error && <p className="error text-red-500 mb-4">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">Usuários</h3>
            <p>{stats.users} usuários cadastrados.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">Relatórios</h3>
            <p>{stats.reports} relatórios gerados.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">Configurações</h3>
            <p>{stats.settings} configurações disponíveis.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">Notificações</h3>
            <p>{stats.notifications} notificações enviadas.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
