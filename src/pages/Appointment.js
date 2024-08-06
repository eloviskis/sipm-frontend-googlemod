import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
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

const Appointment = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'appointments'), {
        date,
        time,
        reason,
        createdAt: new Date(),
      });
      if (docRef.id) {
        setSuccess('Consulta agendada com sucesso');
        setDate('');
        setTime('');
        setReason('');
      } else {
        setError('Falha ao agendar consulta');
      }
    } catch (error) {
      setError('Erro ao agendar consulta');
      console.error('Erro ao agendar consulta:', error);
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
              Agendar Consulta
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            {success && <Alert severity="success">{success}</Alert>}
            <Box component="form" onSubmit={handleAppointment} mt={2}>
              <TextField
                label="Data"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                required
              />
              <TextField
                label="Hora"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                required
              />
              <TextField
                label="Motivo"
                multiline
                rows={4}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Agendar
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Appointment;
