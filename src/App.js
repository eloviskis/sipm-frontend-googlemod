import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/appointment" component={Appointment} />
        <Route path="/customization" component={Customization} />
        <Route path="/services" component={Services} />
        <Route path="/document-templates" component={DocumentTemplates} />
        <Route path="/pre-consultations" component={PreConsultations} />
        <Route path="/motivos" component={Motivos} />
        <Route path="/accounts-receivable" component={AccountsReceivable} />
        <Route path="/accounts-payable" component={AccountsPayable} />
      </Switch>
    </Router>
  );
};

export default App;
