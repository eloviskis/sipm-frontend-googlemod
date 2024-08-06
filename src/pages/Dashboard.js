import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Container, Typography, List, ListItem, ListItemText, Box, Alert } from '@mui/material';

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

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'dashboard'));
        const dashboardData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(dashboardData);
      } catch (error) {
        setError('Erro ao buscar dados do painel.');
        console.error('Erro ao buscar dados do painel:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <Container maxWidth="md" sx={{ mt: 8 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Painel de Controle
          </Typography>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          <Box sx={{ backgroundColor: 'white', p: 4, borderRadius: 1, boxShadow: 3 }}>
            {data.length === 0 ? (
              <Typography>Nenhum dado disponível no painel.</Typography>
            ) : (
              <List>
                {data.map(item => (
                  <ListItem key={item.id} sx={{ mb: 2, backgroundColor: '#f9f9f9', borderRadius: 1 }}>
                    <ListItemText
                      primary={<Typography variant="h6">{item.title}</Typography>}
                      secondary={item.description}
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
