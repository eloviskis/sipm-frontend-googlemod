import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminHomePage = () => {
  const [content, setContent] = useState({
    heroTitle: '',
    heroSubtitle: '',
    heroButtonText: '',
    heroImage: '',
    features: [{ title: '', description: '', icon: '' }],
  });

  useEffect(() => {
    axios.get('/api/homepage-content').then((response) => {
      setContent(response.data || content);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent((prevContent) => ({
      ...prevContent,
      [name]: value,
    }));
  };

  const handleFeatureChange = (index, e) => {
    const { name, value } = e.target;
    const newFeatures = [...content.features];
    newFeatures[index][name] = value;
    setContent((prevContent) => ({
      ...prevContent,
      features: newFeatures,
    }));
  };

  const addFeature = () => {
    setContent((prevContent) => ({
      ...prevContent,
      features: [...prevContent.features, { title: '', description: '', icon: '' }],
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
      <input name="heroImage" value={content.heroImage} onChange={handleChange} placeholder="URL da Imagem da Hero" />
      {content.features.map((feature, index) => (
        <div key={index}>
          <input name="title" value={feature.title} onChange={(e) => handleFeatureChange(index, e)} placeholder="Título da Funcionalidade" />
          <input name="description" value={feature.description} onChange={(e) => handleFeatureChange(index, e)} placeholder="Descrição da Funcionalidade" />
          <input name="icon" value={feature.icon} onChange={(e) => handleFeatureChange(index, e)} placeholder="Ícone da Funcionalidade" />
        </div>
      ))}
      <button onClick={addFeature}>Adicionar Funcionalidade</button>
      <button onClick={handleSave}>Salvar</button>
    </div>
  );
};

export default AdminHomePage;
