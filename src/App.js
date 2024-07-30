import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
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
import Telemedicine from './components/Telemedicine';
import ForgotPassword from './pages/ForgotPassword';
import PrivateRoute from './components/PrivateRoute'; // Certifique-se de que o caminho está correto

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/customization" element={<Customization />} />
        <Route path="/services" element={<Services />} />
        <Route path="/document-templates" element={<DocumentTemplates />} />
        <Route path="/pre-consultations" element={<PreConsultations />} />
        <Route path="/motivos" element={<Motivos />} />
        <Route path="/accounts-receivable" element={<AccountsReceivable />} />
        <Route path="/accounts-payable" element={<AccountsPayable />} />
        <Route path="/telemedicine" element={<PrivateRoute><Telemedicine /></PrivateRoute>} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Adicionar a rota */}
      </Routes>
    </Router>
  );
}

export default App;
