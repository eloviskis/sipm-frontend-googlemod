import React, { useState, useEffect } from 'react';

const Motivos = () => {
  const [motivos, setMotivos] = useState([]);
  const [newMotivo, setNewMotivo] = useState('');

  useEffect(() => {
    // Simulação de requisição para obter motivos existentes
    const fetchMotivos = async () => {
      const response = await fetch('/api/motivos');
      const data = await response.json();
      setMotivos(data);
    };
    fetchMotivos();
  }, []);

  const handleAddMotivo = async () => {
    // Código para adicionar novo motivo ao backend
    const response = await fetch('/api/motivos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newMotivo }),
    });
    const data = await response.json();
    setMotivos([...motivos, data]);
    setNewMotivo('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Motivos de Consulta</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Novo Motivo"
            value={newMotivo}
            onChange={(e) => setNewMotivo(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded"
          />
          <button
            onClick={handleAddMotivo}
            className="bg-green-500 text-white p-2 w-full rounded mt-2 hover:bg-green-700 transition duration-200"
          >
            Adicionar Motivo
          </button>
        </div>
        <ul>
          {motivos.map((motivo, index) => (
            <li key={index} className="mb-4 p-4 bg-gray-200 rounded">
              {motivo.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Motivos;
