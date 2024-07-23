import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    role: '',
    cpf: '',
    cnpj: '',
  });

  useEffect(() => {
    // Simulação de requisição para obter dados do perfil do usuário
    const fetchProfileData = async () => {
      const response = await fetch('/api/profile');
      const data = await response.json();
      setProfileData(data);
    };
    fetchProfileData();
  }, []);

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    // Código para salvar os dados atualizados do perfil
    const response = await fetch('/api/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profileData),
    });
    const data = await response.json();
    console.log('Perfil atualizado com sucesso:', data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Perfil</h2>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={profileData.name}
          onChange={handleChange}
          className="mb-4 p-2 w-full border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={profileData.email}
          onChange={handleChange}
          className="mb-4 p-2 w-full border border-gray-300 rounded"
        />
        <select
          name="role"
          value={profileData.role}
          onChange={handleChange}
          className="mb-4 p-2 w-full border border-gray-300 rounded"
        >
          <option value="doctor">Médico</option>
          <option value="clinic">Clínica</option>
        </select>
        {profileData.role === 'doctor' && (
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            value={profileData.cpf}
            onChange={handleChange}
            className="mb-4 p-2 w-full border border-gray-300 rounded"
          />
        )}
        {profileData.role === 'clinic' && (
          <input
            type="text"
            name="cnpj"
            placeholder="CNPJ"
            value={profileData.cnpj}
            onChange={handleChange}
            className="mb-4 p-2 w-full border border-gray-300 rounded"
          />
        )}
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Salvar
        </button>
      </div>
    </div>
  );
};

export default Profile;
