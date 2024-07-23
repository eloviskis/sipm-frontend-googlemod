import React, { useState, useEffect } from 'react';

const PreConsultations = () => {
  const [preConsultations, setPreConsultations] = useState([]);
  const [newPreConsultation, setNewPreConsultation] = useState('');

  useEffect(() => {
    // Simulação de requisição para obter pré-consultas existentes
    const fetchPreConsultations = async () => {
      const response = await fetch('/api/pre-consultations');
      const data = await response.json();
      setPreConsultations(data);
    };
    fetchPreConsultations();
  }, []);

  const handleAddPreConsultation = async () => {
    // Código para adicionar nova pré-consulta ao backend
    const response = await fetch('/api/pre-consultations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newPreConsultation }),
    });
    const data = await response.json();
    setPreConsultations([...preConsultations, data]);
    setNewPreConsultation('');
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
