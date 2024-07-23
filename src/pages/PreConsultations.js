import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const PreConsultations = () => {
  const [preConsultations, setPreConsultations] = useState([]);

  useEffect(() => {
    const fetchPreConsultations = async () => {
      try {
        const response = await axios.get('/api/pre-consultations');
        setPreConsultations(response.data);
      } catch (error) {
        console.error('Erro ao buscar pré-consultas:', error);
      }
    };
    fetchPreConsultations();
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
                    <p><strong>Detalhes:</strong> {preConsultation.details}</p>
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
