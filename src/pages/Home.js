import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { Container, Box, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';

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

const Home = () => {
  const [content, setContent] = useState({
    heroTitle: 'Bem-vindo ao SIPM',
    heroSubtitle: 'O Sistema Integrado de Prontuário Médico (SIPM) facilita a gestão de sua clínica médica.',
    heroButtonText: 'Comece Agora',
    heroImage: '', // URL da imagem
    features: [],
  });

  useEffect(() => {
    const fetchContent = async () => {
      const docRef = doc(db, 'homepage-content', 'content');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContent(docSnap.data());
      }
    };
    fetchContent();
  }, []);

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          backgroundImage: `url(${content.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
          py: 20,
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            {content.heroTitle}
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            {content.heroSubtitle}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/register"
            sx={{ mt: 2 }}
          >
            {content.heroButtonText}
          </Button>
        </Container>
      </Box>
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
          Funcionalidades
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {content.features.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={feature.icon}
                  alt={feature.title}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
