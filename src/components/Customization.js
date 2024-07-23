import React, { useState } from 'react';

const Customization = () => {
  const [themeColor, setThemeColor] = useState('#ffffff');
  const [language, setLanguage] = useState('pt');

  const handleSaveCustomization = async () => {
    // Código para integração com o backend
    const response = await fetch('/api/customization', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ themeColor, language }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Customização</h2>
        <div className="mb-4">
          <label htmlFor="themeColor" className="block mb-2">Cor do Tema:</label>
          <input
            type="color"
            id="themeColor"
            value={themeColor}
            onChange={(e) => setThemeColor(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="language" className="block mb-2">Idioma:</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded"
          >
            <option value="pt">Português</option>
            <option value="en">Inglês</option>
            {/* Adicione mais opções de idioma conforme necessário */}
          </select>
        </div>
        <button
          onClick={handleSaveCustomization}
          className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-700 transition duration-200"
        >
          Salvar
        </button>
      </div>
    </div>
  );
};

export default Customization;
