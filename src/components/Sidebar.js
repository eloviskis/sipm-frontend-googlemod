import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Toolbar, Typography, Divider } from '@mui/material';

const Sidebar = () => {
  const drawerWidth = 240;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar>
        <Typography variant="h5" noWrap>
          SIPM
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {[
          { text: 'Início', to: '/dashboard' },
          { text: 'Agenda', to: '/agenda' },
          { text: 'Tarefas', to: '/tarefas' },
          { text: 'Atendimentos', to: '/atendimentos' },
          { text: 'Pacientes', to: '/pacientes' },
          { text: 'Contas a receber', to: '/contas-receber' },
          { text: 'Contas a pagar', to: '/contas-pagar' },
          { text: 'Configurações', to: '/configuracoes' },
        ].map((item, index) => (
          <ListItem button component={Link} to={item.to} key={index}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
