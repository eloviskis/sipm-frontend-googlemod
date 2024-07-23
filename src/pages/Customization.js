import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Customization = () => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const response = await axios.get('/api/theme');
        setTheme(response.data.theme);
      } catch (error) {
        console.error('Erro ao buscar tema:', error);
      }
    };
    fetchTheme();
  }, []);

  const handleThemeChange = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('/api/theme', { theme });
      if (response.status === 200) {
        alert('Tema atualizado com sucesso');
      } else {
        alert('Falha ao atualizar tema');
      }
    } catch (error) {
      console.error('Erro ao atualizar tema:', error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">Personalização</h1>
          <div className="bg-white p-8 rounded shadow-md">
            <form onSubmit={handleThemeChange}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="theme">
                  Tema
                </label>
                <input
                  type="text"
                  id="theme"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Atualizar Tema
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customization;
