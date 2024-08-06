import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { Container, Box, Typography, TextField, Button, Paper } from '@mui/material';

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

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = 'user-id'; // Substitua pelo ID do usuário autenticado
        const docRef = doc(db, 'profiles', userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const profileData = docSnap.data();
          setName(profileData.name);
          setEmail(profileData.email);
        } else {
          console.error('Nenhum dado de perfil encontrado.');
        }
      } catch (error) {
        console.error('Erro ao buscar dados do perfil:', error);
      }
    };
    fetchProfile();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const userId = 'user-id'; // Substitua pelo ID do usuário autenticado
      await setDoc(doc(db, 'profiles', userId), { name, email });
      alert('Perfil atualizado com sucesso');
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      alert('Falha ao atualizar perfil');
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, ml: 64 }}>
        <Header />
        <Container>
          <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h1" gutterBottom>
              Perfil
            </Typography>
            <Paper sx={{ p: 4 }}>
              <form onSubmit={handleUpdate}>
                <Box sx={{ mb: 4 }}>
                  <TextField
                    fullWidth
                    label="Nome"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Box>
                <Box sx={{ mb: 4 }}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Atualizar Perfil
                </Button>
              </form>
            </Paper>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Profile;
