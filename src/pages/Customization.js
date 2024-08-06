import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Customization = () => {
  const [theme, setTheme] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const docRef = doc(db, 'settings', 'theme');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setTheme(docSnap.data().theme);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        setError('Erro ao buscar tema');
        console.error('Erro ao buscar tema:', error);
      }
    };
    fetchTheme();
  }, []);

  const handleThemeChange = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, 'settings', 'theme'), { theme });
      setSuccess('Tema atualizado com sucesso');
    } catch (error) {
      setError('Erro ao atualizar tema');
      console.error('Erro ao atualizar tema:', error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <Container maxWidth="md">
          <Box mt={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              Personalização
            </Typography>
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
            <Box component="form" onSubmit={handleThemeChange} mt={2}>
              <TextField
                label="Tema"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Atualizar Tema
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Customization;
