import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminHomePage = () => {
  const [content, setContent] = useState({
    heroTitle: '',
    heroSubtitle: '',
    heroButtonText: '',
    features: [{ title: '', description: '', icon: '' }],
  });

  useEffect(() => {
    axios.get('/api/homepage-content').then((response) => {
      setContent(response.data || content);
    });
  }, [content]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent((prevContent) => ({
      ...prevContent,
      [name]: value,
    }));
  };

  const handleSave = () => {
    axios.post('/api/homepage-content', content).then((response) => {
      setContent(response.data);
    });
  };

  return (
    <div>
      <h1>Administração da Página Inicial</h1>
      <input name="heroTitle" value={content.heroTitle} onChange={handleChange} placeholder="Título da Hero" />
      <input name="heroSubtitle" value={content.heroSubtitle} onChange={handleChange} placeholder="Subtítulo da Hero" />
      <input name="heroButtonText" value={content.heroButtonText} onChange={handleChange} placeholder="Texto do Botão" />
      {/* Adicionar campos para features conforme necessário */}
      <button onClick={handleSave}>Salvar</button>
    </div>
  );
};

export default AdminHomePage;
