import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig'; // Certifique-se de usar a configuração do Axios

const Pages = () => {
  const [pages, setPages] = useState([]);
  const [newPage, setNewPage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await axios.get('/api/pages');
        setPages(response.data);
      } catch (error) {
        setError('Erro ao buscar páginas.');
        console.error('Erro ao buscar páginas:', error);
      }
    };
    fetchPages();
  }, []);

  const handleCreatePage = async () => {
    try {
      const response = await axios.post('/api/pages', { title: newPage });
      setPages([...pages, response.data]);
      setNewPage('');
    } catch (error) {
      setError('Erro ao criar nova página.');
      console.error('Erro ao criar nova página:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-blue-100 p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Gerenciamento de Páginas</h2>
        {error && <p className="error text-red-500 mb-4">{error}</p>}
        <ul className="mb-4">
          {pages.map((page) => (
            <li key={page.id} className="mb-2 bg-white p-2 rounded shadow">{page.title}</li>
          ))}
        </ul>
        <input
          type="text"
          value={newPage}
          onChange={(e) => setNewPage(e.target.value)}
          className="mb-4 p-2 w-full border border-blue-300 rounded"
        />
        <button
          onClick={handleCreatePage}
          className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-700 transition duration-200"
        >
          Criar Página
        </button>
      </div>
    </div>
  );
};

export default Pages;
