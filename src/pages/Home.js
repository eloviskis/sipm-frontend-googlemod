import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero bg-blue-600 text-white text-center py-20">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Bem-vindo ao SIPM</h1>
          <p className="text-xl mb-8">O Sistema Integrado de Prontuário Médico (SIPM) facilita a gestão de sua clínica médica.</p>
          <a href="/register" className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition duration-300">Comece Agora</a>
        </div>
      </div>
      <div className="container mx-auto p-8">
        <section className="features py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Funcionalidades</h2>
          <div className="flex flex-wrap justify-center space-y-8">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Gestão de Pacientes</h3>
                <p>Gerencie prontuários, consultas e histórico médico de seus pacientes de forma eficiente.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Agendamento Online</h3>
                <p>Permita que seus pacientes agendem consultas online com facilidade.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Relatórios Avançados</h3>
                <p>Gere relatórios detalhados para melhor tomada de decisão.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="pricing py-16 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-8">Valores de Assinatura</h2>
          <div className="flex flex-wrap justify-center space-y-8">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Plano Básico</h3>
                <p className="text-2xl font-bold mb-4">R$29/mês</p>
                <p>Ideal para clínicas pequenas.</p>
                <a href="/register" className="block mt-4 bg-blue-600 text-white px-4 py-2 rounded-full text-center">Assine Agora</a>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Plano Profissional</h3>
                <p className="text-2xl font-bold mb-4">R$59/mês</p>
                <p>Para clínicas de médio porte.</p>
                <a href="/register" className="block mt-4 bg-blue-600 text-white px-4 py-2 rounded-full text-center">Assine Agora</a>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Plano Empresarial</h3>
                <p className="text-2xl font-bold mb-4">R$99/mês</p>
                <p>Para grandes clínicas e hospitais.</p>
                <a href="/register" className="block mt-4 bg-blue-600 text-white px-4 py-2 rounded-full text-center">Assine Agora</a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 SIPM. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
