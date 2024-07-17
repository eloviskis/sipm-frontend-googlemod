    // src/pages/Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data
    axios.get('/api/user/profile')
      .then(response => setUser(response.data))
      .catch(error => console.error('Erro ao buscar dados do usuário:', error));
  }, []);

  if (!user) return <p>Carregando...</p>;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">Perfil</h1>
          <div className="bg-white p-8 rounded shadow-md">
            <p><strong>Nome:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Tipo de Conta:</strong> {user.role === 'doctor' ? 'Médico' : 'Clínica'}</p>
            {user.role === 'clinic' && (
              <>
                <p><strong>CNPJ:</strong> {user.cnpj}</p>
                <p><strong>Responsável Financeiro:</strong> {user.financialResponsible}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
