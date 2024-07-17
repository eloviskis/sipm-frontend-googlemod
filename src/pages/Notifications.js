// src/pages/Notifications.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications data
    axios.get('/api/notifications')
      .then(response => setNotifications(response.data))
      .catch(error => console.error('Erro ao buscar notificações:', error));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">Notificações</h1>
          <div className="bg-white p-8 rounded shadow-md">
            {notifications.length === 0 ? (
              <p>Não há notificações.</p>
            ) : (
              <ul>
                {notifications.map(notification => (
                  <li key={notification.id} className="mb-4">
                    <p><strong>Título:</strong> {notification.title}</p>
                    <p><strong>Mensagem:</strong> {notification.message}</p>
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

export default Notifications;
