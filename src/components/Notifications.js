import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/api/notifications');
        setNotifications(response.data);
      } catch (error) {
        setError('Erro ao obter notificações.');
        console.error('Erro ao obter notificações:', error);
      }
    };
    fetchNotifications();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Notificações</h2>
        {error && <p className="error text-red-500 mb-4">{error}</p>}
        <ul>
          {notifications.map((notification, index) => (
            <li key={index} className="mb-4 p-4 bg-gray-200 rounded">
              {notification.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
