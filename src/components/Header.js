// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <button className="text-red-600 bg-red-100 p-2 rounded-full">SOS RS</button>
        <button className="text-green-600 bg-green-100 p-2 rounded-full">?</button>
        <button className="text-blue-600 bg-blue-100 p-2 rounded-full">+</button>
      </div>
      <div className="flex items-center space-x-4">
        <span className="font-medium">Dra. Fernanda Natal Alves Santaroza</span>
        <img src="path-to-avatar.jpg" alt="avatar" className="w-10 h-10 rounded-full" />
      </div>
    </header>
  );
};

export default Header;
