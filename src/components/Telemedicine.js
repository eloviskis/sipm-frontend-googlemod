import React from 'react';

const Telemedicine = () => {
  const handleStartCall = () => {
    // Código para iniciar a videoconferência
    // Cole este código na integração
    // const response = await fetch('/api/telemedicine/start', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    // });
    // const data = await response.json();
    // console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Telemedicina</h2>
        <button
          onClick={handleStartCall}
          className="bg-blue-500 text-white p-2 w-full rounded"
        >
          Iniciar Consulta por Vídeo
        </button>
      </div>
    </div>
  );
};

export default Telemedicine;
