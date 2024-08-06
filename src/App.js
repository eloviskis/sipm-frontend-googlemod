import React, { useEffect, useState } from 'react';
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

// Importar Firebase e inicializar
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const fetchCustomization = async () => {
      try {
        const docRef = doc(db, 'settings', 'customization');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const { favicon } = docSnap.data();
          if (favicon) {
            const faviconURL = await getDownloadURL(ref(storage, favicon));
            const link = document.querySelector("link[rel~='icon']");
            if (link) {
              link.href = faviconURL;
            } else {
              const newLink = document.createElement('link');
              newLink.rel = 'icon';
              newLink.href = faviconURL;
              document.head.appendChild(newLink);
            }
          }
        }
      } catch (error) {
        console.error('Erro ao buscar customização:', error);
      }
    };
    fetchCustomization();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute user={user}><Dashboard /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute user={user}><Profile /></PrivateRoute>} />
        <Route path="/admin-dashboard" element={<PrivateRoute user={user}><AdminDashboard /></PrivateRoute>} />
        <Route path="/notifications" element={<PrivateRoute user={user}><Notifications /></PrivateRoute>} />
        <Route path="/appointment" element={<PrivateRoute user={user}><Appointment /></PrivateRoute>} />
        <Route path="/customization" element={<PrivateRoute user={user}><Customization /></PrivateRoute>} />
        <Route path="/services" element={<PrivateRoute user={user}><Services /></PrivateRoute>} />
        <Route path="/document-templates" element={<PrivateRoute user={user}><DocumentTemplates /></PrivateRoute>} />
        <Route path="/pre-consultations" element={<PrivateRoute user={user}><PreConsultations /></PrivateRoute>} />
        <Route path="/motivos" element={<PrivateRoute user={user}><Motivos /></PrivateRoute>} />
        <Route path="/accounts-receivable" element={<PrivateRoute user={user}><AccountsReceivable /></PrivateRoute>} />
        <Route path="/accounts-payable" element={<PrivateRoute user={user}><AccountsPayable /></PrivateRoute>} />
        <Route path="/telemedicine" element={<PrivateRoute user={user}><Telemedicine /></PrivateRoute>} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Adicionar a rota */}
      </Routes>
    </Router>
  );
}

export default App;
