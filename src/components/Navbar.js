import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-primary p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-lg font-bold">SIPM</a>
        <div className="flex space-x-4">
          <a href="/" className="text-white hover:text-secondary">Início</a>
          <a href="/about" className="text-white hover:text-secondary">Sobre</a>
          <a href="/services" className="text-white hover:text-secondary">Serviços</a>
          <a href="/contact" className="text-white hover:text-secondary">Contato</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
