import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/authSlice';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { TextField, Button, Container, Box, Typography, Alert } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(login({ email, password }));
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
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
              Login
            </Typography>
            <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Entrar
              </Button>
              <Button
                fullWidth
                variant="text"
                sx={{ mt: 1 }}
                href="/forgot-password"
              >
                Esqueci minha senha
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Login;
