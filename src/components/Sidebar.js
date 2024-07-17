// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen bg-teal-700 text-white w-64 space-y-6 py-7 px-2 fixed">
      <div className="text-white text-2xl text-center font-semibold">
        SIPM
      </div>
      <nav>
        <Link to="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-teal-600">
          Início
        </Link>
        <Link to="/agenda" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-teal-600">
          Agenda
        </Link>
        <Link to="/tarefas" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-teal-600">
          Tarefas
        </Link>
        <Link to="/atendimentos" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-teal-600">
          Atendimentos
        </Link>
        <Link to="/pacientes" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-teal-600">
          Pacientes
        </Link>
        <Link to="/contas-receber" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-teal-600">
          Contas a receber
        </Link>
        <Link to="/contas-pagar" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-teal-600">
          Contas a pagar
        </Link>
        <Link to="/configuracoes" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-teal-600">
          Configurações
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
