// src/pages/Feed.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Feed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    // Fetch feed data
    axios.get('/api/feed')
      .then(response => setFeed(response.data))
      .catch(error => console.error('Erro ao buscar dados do feed:', error));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">Feed</h1>
          <div className="bg-white p-8 rounded shadow-md">
            {feed.length === 0 ? (
              <p>Não há atualizações no feed.</p>
            ) : (
              <ul>
                {feed.map(item => (
                  <li key={item.id} className="mb-4">
                    <p><strong>Título:</strong> {item.title}</p>
                    <p><strong>Conteúdo:</strong> {item.content}</p>
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

export default Feed;
