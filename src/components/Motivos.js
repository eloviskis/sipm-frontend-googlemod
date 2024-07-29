import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig'; // Certifique-se de usar a configuração do Axios

const Motivos = () => {
  const [motivos, setMotivos] = useState([]);
  const [newMotivo, setNewMotivo] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMotivos = async () => {
      try {
        const response = await axios.get('/api/motivos');
        setMotivos(response.data);
      } catch (error) {
        setError('Erro ao buscar motivos de consulta.');
        console.error('Erro ao buscar motivos de consulta:', error);
      }
    };
    fetchMotivos();
  }, []);

  const handleAddMotivo = async () => {
    try {
      const response = await axios.post('/api/motivos', { name: newMotivo });
      setMotivos([...motivos, response.data]);
      setNewMotivo('');
    } catch (error) {
      setError('Erro ao adicionar novo motivo de consulta.');
      console.error('Erro ao adicionar novo motivo de consulta:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Motivos de Consulta</h2>
        {error && <p className="error text-red-500 mb-4">{error}</p>}
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
