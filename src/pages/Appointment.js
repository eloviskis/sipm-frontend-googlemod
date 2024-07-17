// src/pages/Appointment.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments data
    axios.get('/api/appointments')
      .then(response => setAppointments(response.data))
      .catch(error => console.error('Erro ao buscar agendamentos:', error));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">Agendamentos</h1>
          <div className="bg-white p-8 rounded shadow-md">
            {appointments.length === 0 ? (
              <p>Não há agendamentos.</p>
            ) : (
              <ul>
                {appointments.map(appointment => (
                  <li key={appointment.id} className="mb-4">
                    <p><strong>Paciente:</strong> {appointment.patientName}</p>
                    <p><strong>Data:</strong> {appointment.date}</p>
                    <p><strong>Hora:</strong> {appointment.time}</p>
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

export default Appointment;
