import React, { useState, useEffect } from 'react';

const Pages = () => {
  const [pages, setPages] = useState([]);
  const [newPage, setNewPage] = useState('');

  useEffect(() => {
    const fetchPages = async () => {
      const response = await fetch('/api/pages');
      const data = await response.json();
      setPages(data);
    };

    fetchPages();
  }, []);

  const handleCreatePage = async () => {
    const response = await fetch('/api/pages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newPage }),
    });
    const data = await response.json();
    setPages([...pages, data]);
    setNewPage('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-blue-100 p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Gerenciamento de Páginas</h2>
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
