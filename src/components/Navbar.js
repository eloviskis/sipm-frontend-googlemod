import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-primary p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-lg font-bold">SIPM</a>
        <div className="flex space-x-4">
          <a href="/register" className="text-white hover:text-secondary">Registro</a>
          <a href="/login" className="text-white hover:text-secondary">Login</a>
          <a href="/pricing" className="text-white hover:text-secondary">Valores de Assinatura</a>
          <a href="/features" className="text-white hover:text-secondary">O Que o Sistema Faz</a>
          <a href="/contact" className="text-white hover:text-secondary">Contato</a>
          <a href="/about" className="text-white hover:text-secondary">Quem Somos</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
