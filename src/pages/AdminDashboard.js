import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/admin/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">Painel Administrativo</h1>
          <div className="bg-white p-8 rounded shadow-md">
            {users.length === 0 ? (
              <p>Não há usuários cadastrados.</p>
            ) : (
              <ul>
                {users.map(user => (
                  <li key={user.id} className="mb-4">
                    <p><strong>Nome:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
