import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import { useSelector } from 'react-redux';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [permissions, setPermissions] = useState([]);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    axios.get('/api/users').then((response) => {
      setUsers(response.data);
    });
    axios.get('/api/permissions').then((response) => {
      setPermissions(response.data);
    });
  }, []);

  const handleAddPermission = (userId, permission) => {
    axios.patch(`/api/users/${userId}/add-permission`, { permission })
      .then((response) => {
        setUsers(users.map((user) => (user._id === userId ? response.data.user : user)));
      });
  };

  const handleRemovePermission = (userId, permission) => {
    axios.patch(`/api/users/${userId}/remove-permission`, { permission })
      .then((response) => {
        setUsers(users.map((user) => (user._id === userId ? response.data.user : user)));
      });
  };

  return (
    <div>
      <h2>Gerenciamento de Usuários</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.email} - {user.role}
            <button onClick={() => setSelectedUser(user)}>Gerenciar Permissões</button>
          </li>
        ))}
      </ul>
      {selectedUser && (
        <div>
          <h3>Permissões para {selectedUser.email}</h3>
          <ul>
            {permissions.map((permission) => (
              <li key={permission._id}>
                {permission.name}
                {selectedUser.permissions.includes(permission.name) ? (
                  <button onClick={() => handleRemovePermission(selectedUser._id, permission.name)}>Remover</button>
                ) : (
                  <button onClick={() => handleAddPermission(selectedUser._id, permission.name)}>Adicionar</button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
