import React, { useState, useEffect } from 'react';

const Whatsapp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch('/api/whatsapp/messages');
      const data = await response.json();
      setMessages(data);
    };

    fetchMessages();
  }, []);

  const handleSendMessage = async () => {
    const response = await fetch('/api/whatsapp/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: newMessage }),
    });
    const data = await response.json();
    setMessages([...messages, data]);
    setNewMessage('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-green-100 p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-700">WhatsApp</h2>
        <ul className="mb-4">
          {messages.map((message) => (
            <li key={message.id} className="mb-2 bg-white p-2 rounded shadow">{message.content}</li>
          ))}
        </ul>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="mb-4 p-2 w-full border border-green-300 rounded"
        />
        <button
          onClick={handleSendMessage}
          className="bg-green-500 text-white p-2 w-full rounded hover:bg-green-700 transition duration-200"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Whatsapp;
