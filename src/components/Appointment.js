import React, { useState } from 'react';

const Appointment = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [doctor, setDoctor] = useState('');

  const handleAppointment = async () => {
    // Código para integração com o backend
    // Cole este código na integração
    // const response = await fetch('/api/appointments', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ date, time, doctor }),
    // });
    // const data = await response.json();
    // console.log(data);
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
      </div>
    </div>
  );
};

export default Appointment;
