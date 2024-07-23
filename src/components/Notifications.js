import React, { useEffect, useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulação de requisição para obter notificações do usuário
    const fetchNotifications = async () => {
      const response = await fetch('/api/notifications');
      const data = await response.json();
      setNotifications(data);
    };
    fetchNotifications();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Notificações</h2>
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
