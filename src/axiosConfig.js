import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://localhost:3001', // Atualize a porta para 3001 e use https
});

export default instance;
