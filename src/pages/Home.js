import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from '../axiosConfig'; // Certifique-se de usar a configuração do Axios

const Home = () => {
  const [content, setContent] = useState({
    heroTitle: 'Bem-vindo ao SIPM',
    heroSubtitle: 'O Sistema Integrado de Prontuário Médico (SIPM) facilita a gestão de sua clínica médica.',
    heroButtonText: 'Comece Agora',
    heroImage: '', // URL da imagem
    features: [],
  });

  useEffect(() => {
    axios.get('/api/homepage-content').then((response) => {
      setContent(response.data || content);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="hero bg-blue-600 text-white text-center py-20" style={{ backgroundImage: `url(${content.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">{content.heroTitle}</h1>
          <p className="text-xl mb-8">{content.heroSubtitle}</p>
          <a href="/register" className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition duration-300">
            {content.heroButtonText}
          </a>
        </div>
      </div>
      <div className="container mx-auto p-8">
        <section className="features py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Funcionalidades</h2>
          <div className="flex flex-wrap justify-center space-y-8">
            {content.features.map((feature, index) => (
              <div key={index} className="w-full md:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p>{feature.description}</p>
                  <img src={feature.icon} alt={feature.title} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
