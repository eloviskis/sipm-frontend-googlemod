import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Container, Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

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

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'services'));
        const servicesList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServices(servicesList);
      } catch (error) {
        console.error('Erro ao buscar serviços:', error);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <Container sx={{ py: 8 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Serviços
          </Typography>
          <Paper sx={{ p: 4 }}>
            {services.length === 0 ? (
              <Typography variant="body1">Não há serviços cadastrados.</Typography>
            ) : (
              <List>
                {services.map((service) => (
                  <ListItem key={service.id} sx={{ mb: 2, backgroundColor: '#f9f9f9', borderRadius: 1 }}>
                    <ListItemText
                      primary={service.name}
                      secondary={service.description}
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default Services;
