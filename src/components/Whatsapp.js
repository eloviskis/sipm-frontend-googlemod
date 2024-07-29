import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig'; // Certifique-se de usar a configuração do Axios

const Whatsapp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/api/whatsapp/messages');
        setMessages(response.data);
      } catch (error) {
        setError('Erro ao buscar mensagens.');
        console.error('Erro ao buscar mensagens:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleSendMessage = async () => {
    try {
      const response = await axios.post('/api/whatsapp/messages', { content: newMessage });
      setMessages([...messages, response.data]);
      setNewMessage('');
    } catch (error) {
      setError('Erro ao enviar mensagem.');
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-green-100 p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-700">WhatsApp</h2>
        {error && <p className="error text-red-500 mb-4">{error}</p>}
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
