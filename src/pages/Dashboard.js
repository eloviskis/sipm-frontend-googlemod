// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">Configurações</h1>
          <div className="grid grid-cols-3 gap-4">
            <Link to="/meu-usuario" className="p-4 bg-white rounded shadow text-center">
              <div className="text-2xl mb-2">Meu usuário</div>
              <p>Configure os dados da sua conta</p>
            </Link>
            <Link to="/minha-instituicao" className="p-4 bg-white rounded shadow text-center">
              <div className="text-2xl mb-2">Minha instituição</div>
              <p>Configure os dados da sua instituição</p>
            </Link>
            <Link to="/meu-plano" className="p-4 bg-white rounded shadow text-center">
              <div className="text-2xl mb-2">Meu Plano</div>
              <p>Plano atual, detalhes e atualização da assinatura</p>
            </Link>
            <Link to="/usuarios" className="p-4 bg-white rounded shadow text-center">
              <div className="text-2xl mb-2">Usuários</div>
              <p>Usuários da sua instituição</p>
            </Link>
            <Link to="/servicos" className="p-4 bg-white rounded shadow text-center">
              <div className="text-2xl mb-2">Serviços</div>
              <p>Gerencie os serviços prestados</p>
            </Link>
            <Link to="/customizacao" className="p-4 bg-white rounded shadow text-center">
              <div className="text-2xl mb-2">Customização</div>
              <p>Atendimentos, formas de contratação (convênios aceitos), logo, agenda e mensagens automáticas</p>
            </Link>
            <Link to="/modelos-documentos" className="p-4 bg-white rounded shadow text-center">
              <div className="text-2xl mb-2">Modelos de documentos</div>
              <p>Customize modelos de documentos e textos médicos</p>
            </Link>
            <Link to="/pre-consultas" className="p-4 bg-white rounded shadow text-center">
              <div className="text-2xl mb-2">Pré-consultas</div>
              <p>Customize as pré-consultas que serão realizadas antes do atendimento</p>
            </Link>
            <Link to="/motivos" className="p-4 bg-white rounded shadow text-center">
              <div className="text-2xl mb-2">Motivos</div>
              <p>Cadastre aqui os seus descontos concedidos</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
