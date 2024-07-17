// src/pages/PreConsultations.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const PreConsultations = () => {
  const [preConsultations, setPreConsultations] = useState([]);

  useEffect(() => {
    // Fetch pre-consultations data
    axios.get('/api/pre-consultations')
      .then(response => setPreConsultations(response.data))
      .catch(error => console.error('Erro ao buscar dados de pré-consultas:', error));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">Pré-Consultas</h1>
          <div className="bg-white p-8 rounded shadow-md">
            {preConsultations.length === 0 ? (
              <p>Não há pré-consultas cadastradas.</p>
            ) : (
              <ul>
                {preConsultations.map(preConsultation => (
                  <li key={preConsultation.id} className="mb-4">
                    <p><strong>Nome:</strong> {preConsultation.name}</p>
                    <p><strong>Descrição:</strong> {preConsultation.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreConsultations;
