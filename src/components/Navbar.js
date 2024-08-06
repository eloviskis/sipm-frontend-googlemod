import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>SIPM</a>
          </Typography>
          <Button color="inherit" href="/register">Registro</Button>
          <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/pricing">Valores de Assinatura</Button>
          <Button color="inherit" href="/features">O Que o Sistema Faz</Button>
          <Button color="inherit" href="/contact">Contato</Button>
          <Button color="inherit" href="/about">Quem Somos</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
