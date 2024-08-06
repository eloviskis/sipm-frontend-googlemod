import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Container, Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

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

const PreConsultations = () => {
  const [preConsultations, setPreConsultations] = useState([]);

  useEffect(() => {
    const fetchPreConsultations = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'pre-consultations'));
        const preConsultationsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPreConsultations(preConsultationsList);
      } catch (error) {
        console.error('Erro ao buscar pré-consultas:', error);
      }
    };
    fetchPreConsultations();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, ml: 64 }}>
        <Header />
        <Container>
          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h1" gutterBottom>
              Pré-Consultas
            </Typography>
            <Paper sx={{ p: 4 }}>
              {preConsultations.length === 0 ? (
                <Typography variant="body1">Não há pré-consultas cadastradas.</Typography>
              ) : (
                <List>
                  {preConsultations.map(preConsultation => (
                    <ListItem key={preConsultation.id}>
                      <ListItemText primary={preConsultation.name} secondary={preConsultation.details} />
                    </ListItem>
                  ))}
                </List>
              )}
            </Paper>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default PreConsultations;
