import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Container, Typography, Box, Alert } from '@mui/material';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

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

const Telemedicine = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user.permissions.includes('AccessTelemedicine')) {
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Alert severity="error">Acesso negado. Você não tem permissão para acessar esta funcionalidade.</Alert>
      </Container>
    );
  }

  const handleStartCall = async () => {
    try {
      // Lógica para iniciar a videoconferência
      console.log('Iniciando chamada de telemedicina');

      // Supondo que você esteja utilizando Firestore para armazenar informações sobre chamadas de telemedicina
      const docRef = doc(db, 'telemedicineCalls', user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log('Dados da chamada de telemedicina:', docSnap.data());
      } else {
        console.log('Nenhum dado encontrado para esta chamada.');
      }
    } catch (error) {
      console.error('Erro ao iniciar chamada de telemedicina:', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box sx={{ textAlign: 'center', p: 3, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 1 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Telemedicina
        </Typography>
        <Button variant="contained" color="primary" onClick={handleStartCall}>
          Iniciar Chamada
        </Button>
      </Box>
    </Container>
  );
};

export default Telemedicine;
