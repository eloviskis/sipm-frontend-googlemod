import React, { useEffect, useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('/api/notifications');
        const result = await response.json();
        setNotifications(result);
      } catch (error) {
        console.error('Erro ao buscar notificações:', error);
      }
    };
    fetchNotifications();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Notificações</h1>
      <p className="mt-4">Aqui você verá todas as notificações.</p>
      <div>
        {notifications.map((notification, index) => (
          <div key={index} className="p-4 mb-4 bg-white rounded shadow-md">
            <p>{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
