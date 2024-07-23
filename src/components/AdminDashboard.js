import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Painel Administrativo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Adicione aqui os componentes e funcionalidades do painel administrativo */}
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">Usuários</h3>
            <p>Gerencie usuários do sistema.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">Relatórios</h3>
            <p>Visualize relatórios de desempenho.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">Configurações</h3>
            <p>Altere configurações do sistema.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="font-bold text-lg mb-2">Notificações</h3>
            <p>Gerencie notificações do sistema.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
