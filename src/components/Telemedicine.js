import React from 'react';
import { useSelector } from 'react-redux';

const Telemedicine = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user.permissions.includes('AccessTelemedicine')) {
    return <div>Acesso negado. Você não tem permissão para acessar esta funcionalidade.</div>;
  }

  const handleStartCall = () => {
    // Lógica para iniciar a videoconferência
    console.log('Iniciando chamada de telemedicina');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Telemedicina</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleStartCall}
        >
          Iniciar Chamada
        </button>
      </div>
    </div>
  );
};

export default Telemedicine;
