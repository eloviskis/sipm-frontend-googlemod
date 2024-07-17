import React, { useState, useEffect } from 'react';

const PatientRecord = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      const response = await fetch('/api/patient-records');
      const data = await response.json();
      setRecords(data);
    };

    fetchRecords();
  }, []);

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Registros de Pacientes</h2>
      <ul>
        {records.map((record) => (
          <li key={record.id} className="mb-2">
            {record.name}: {record.details}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientRecord;
