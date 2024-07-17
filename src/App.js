// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import Notifications from './pages/Notifications';
import Appointment from './pages/Appointment';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/appointments" component={Appointment} />
        {/* Adicione mais rotas conforme necessário */}
      </Switch>
    </Router>
  );
}

export default App;
