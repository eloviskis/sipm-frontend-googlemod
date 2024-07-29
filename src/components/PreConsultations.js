import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PreConsultations = () => {
  const [preConsultations, setPreConsultations] = useState([]);
  const [newPreConsultation, setNewPreConsultation] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPreConsultations = async () => {
      try {
        const response = await axios.get('/api/pre-consultations');
        setPreConsultations(response.data);
      } catch (error) {
        setError('Erro ao obter pré-consultas.');
        console.error('Erro ao obter pré-consultas:', error);
      }
    };
    fetchPreConsultations();
  }, []);

  const handleAddPreConsultation = async () => {
    try {
      const response = await axios.post('/api/pre-consultations', {
        name: newPreConsultation,
      });
      setPreConsultations([...preConsultations, response.data]);
      setNewPreConsultation('');
    } catch (error) {
      setError('Erro ao adicionar pré-consulta. Tente novamente.');
      console.error('Erro ao adicionar pré-consulta:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Pré-Consultas</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Nova Pré-Consulta"
            value={newPreConsultation}
            onChange={(e) => setNewPreConsultation(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded"
          />
          <button
            onClick={handleAddPreConsultation}
            className="bg-green-500 text-white p-2 w-full rounded mt-2 hover:bg-green-700 transition duration-200"
          >
            Adicionar Pré-Consulta
          </button>
        </div>
        {error && <p className="error text-red-500 mb-4">{error}</p>}
        <ul>
          {preConsultations.map((preConsultation, index) => (
            <li key={index} className="mb-4 p-4 bg-gray-200 rounded">
              {preConsultation.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PreConsultations;
