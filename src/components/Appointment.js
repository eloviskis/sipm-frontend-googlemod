import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Appointment = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [doctor, setDoctor] = useState('');
  const [error, setError] = useState('');

  const handleAppointment = async () => {
    try {
      await addDoc(collection(db, 'appointments'), {
        date,
        time,
        doctor,
      });
      console.log('Consulta agendada com sucesso!');
      // Limpar os campos após o agendamento
      setDate('');
      setTime('');
      setDoctor('');
    } catch (error) {
      setError('Erro ao agendar a consulta. Tente novamente.');
      console.error('Erro ao agendar a consulta:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Agendar Consulta</h2>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mb-4 p-2 w-full border border-gray-300 rounded"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="mb-4 p-2 w-full border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Médico"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          className="mb-4 p-2 w-full border border-gray-300 rounded"
        />
        <button
          onClick={handleAppointment}
          className="bg-green-500 text-white p-2 w-full rounded"
        >
          Agendar
        </button>
        {error && <p className="error text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default Appointment;
