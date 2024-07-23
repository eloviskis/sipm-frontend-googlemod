import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Bem-vindo ao SIPM</h1>
        <p className="mb-4">Sistema Integrado de Prontuário Médico (SIPM)</p>
        <div className="flex space-x-4">
          <a href="/register" className="text-blue-500 hover:underline">Registro</a>
          <a href="/login" className="text-blue-500 hover:underline">Login</a>
          <a href="/pricing" className="text-blue-500 hover:underline">Valores de Assinatura</a>
          <a href="/features" className="text-blue-500 hover:underline">O Que o Sistema Faz</a>
          <a href="/contact" className="text-blue-500 hover:underline">Contato</a>
          <a href="/about" className="text-blue-500 hover:underline">Quem Somos</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
