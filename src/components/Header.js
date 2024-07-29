import React, { useState } from 'react';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div className="relative">
        <div className="flex items-center space-x-4 cursor-pointer" onClick={toggleModal}>
          <span className="font-medium">Dra. Fernanda Natal Alves Santaroza</span>
          <img src="path-to-avatar.jpg" alt="avatar" className="w-10 h-10 rounded-full" />
        </div>
        {isModalOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg">
            <div className="flex p-4">
              <img src="path-to-avatar.jpg" alt="avatar" className="w-12 h-12 rounded-full" />
              <div className="ml-4">
                <h3 className="font-semibold">Dra. Fernanda Natal Alves Santaroza</h3>
                <p className="text-gray-500">Fernanda Natal Alves Santaroza</p>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <ul className="p-4">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Configurações do Serviço</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Customização</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Meu Plano</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Sair</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
