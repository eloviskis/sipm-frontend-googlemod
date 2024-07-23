import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Motivos = () => {
  const [motivos, setMotivos] = useState([]);

  useEffect(() => {
    const fetchMotivos = async () => {
      try {
        const response = await axios.get('/api/motivos');
        setMotivos(response.data);
      } catch (error) {
        console.error('Erro ao buscar motivos de consulta:', error);
      }
    };
    fetchMotivos();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">Motivos</h1>
          <div className="bg-white p-8 rounded shadow-md">
            {motivos.length === 0 ? (
              <p>Não há motivos cadastrados.</p>
            ) : (
              <ul>
                {motivos.map(motivo => (
                  <li key={motivo.id} className="mb-4">
                    <p><strong>Nome:</strong> {motivo.name}</p>
                    <p><strong>Descrição:</strong> {motivo.description}</p>
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

export default Motivos;
