// src/pages/AdminDashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">Dashboard Administrativo</h1>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded shadow text-center">
              <div className="text-2xl mb-2">Relatórios</div>
              <p>Visualize relatórios detalhados sobre pacientes e atividades.</p>
            </div>
            <div className="p-4 bg-white rounded shadow text-center">
              <div className="text-2xl mb-2">Configurações</div>
              <p>Personalize valores, relatórios e uso do sistema.</p>
            </div>
            <div className="p-4 bg-white rounded shadow text-center">
              <div className="text-2xl mb-2">Notificações</div>
              <p>Configure e gerencie notificações para os usuários.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
