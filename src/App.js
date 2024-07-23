import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import Notifications from './pages/Notifications';
import Appointment from './pages/Appointment';
import Customization from './pages/Customization';
import Services from './pages/Services';
import DocumentTemplates from './pages/DocumentTemplates';
import PreConsultations from './pages/PreConsultations';
import Motivos from './pages/Motivos';
import AccountsReceivable from './pages/AccountsReceivable';
import AccountsPayable from './pages/AccountsPayable';

// Função para simular a verificação de autenticação do usuário
const isAuthenticated = () => {
  // TODO: Adicione aqui a lógica para verificar se o usuário está autenticado
  return true; // Retorne true se autenticado, caso contrário, false
};

// Componente para proteger rotas que requerem autenticação
const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} /> {/* Rota para página de login */}
        <Route path="/register" element={<Register />} /> {/* Rota para página de registro */}
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} /> {/* Rota protegida para dashboard */}
        <Route path="/profile" element={<PrivateRoute element={<Profile />} />} /> {/* Rota protegida para perfil */}
        <Route path="/admin-dashboard" element={<PrivateRoute element={<AdminDashboard />} />} /> {/* Rota protegida para dashboard do admin */}
        <Route path="/notifications" element={<PrivateRoute element={<Notifications />} />} /> {/* Rota protegida para notificações */}
        <Route path="/appointments" element={<PrivateRoute element={<Appointment />} />} /> {/* Rota protegida para agendamentos */}
        <Route path="/customization" element={<PrivateRoute element={<Customization />} />} /> {/* Rota protegida para customização */}
        <Route path="/services" element={<PrivateRoute element={<Services />} />} /> {/* Rota protegida para serviços */}
        <Route path="/document-templates" element={<PrivateRoute element={<DocumentTemplates />} />} /> {/* Rota protegida para modelos de documentos */}
        <Route path="/pre-consultations" element={<PrivateRoute element={<PreConsultations />} />} /> {/* Rota protegida para pré-consultas */}
        <Route path="/motivos" element={<PrivateRoute element={<Motivos />} />} /> {/* Rota protegida para motivos */}
        <Route path="/accounts-receivable" element={<PrivateRoute element={<AccountsReceivable />} />} /> {/* Rota protegida para contas a receber */}
        <Route path="/accounts-payable" element={<PrivateRoute element={<AccountsPayable />} />} /> {/* Rota protegida para contas a pagar */}
        {/* Adicione mais rotas conforme necessário */}
      </Routes>
    </Router>
  );
}

export default App;
