import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'doctor', // ou 'clinic'
    cpf: '',
    cnpj: '',
    financialResponsible: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    // Código para integração com o backend
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="mb-4 p-2 w-full border border-gray-300 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          className="mb-4 p-2 w-full border border-gray-300 rounded"
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="mb-4 p-2 w-full border border-gray-300 rounded"
        >
          <option value="doctor">Médico</option>
          <option value="clinic">Clínica</option>
        </select>
        {formData.role === 'doctor' && (
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            value={formData.cpf}
            onChange={handleChange}
            className="mb-4 p-2 w-full border border-gray-300 rounded"
          />
        )}
        {formData.role === 'clinic' && (
          <>
            <input
              type="text"
              name="cnpj"
              placeholder="CNPJ"
              value={formData.cnpj}
              onChange={handleChange}
              className="mb-4 p-2 w-full border border-gray-300 rounded"
            />
            <input
              type="text"
              name="financialResponsible"
              placeholder="Responsável Financeiro"
              value={formData.financialResponsible}
              onChange={handleChange}
              className="mb-4 p-2 w-full border border-gray-300 rounded"
            />
          </>
        )}
        <button
          onClick={handleRegister}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Registrar
        </button>
      </div>
    </div>
  );
};

export default Register;
