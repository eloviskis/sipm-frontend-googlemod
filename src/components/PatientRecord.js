import React, { useEffect, useState } from 'react';

const PatientRecord = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Código para buscar prontuários do backend
    // Cole este código na integração
    // const fetchRecords = async () => {
    //   const response = await fetch('/api/patientRecords');
    //   const data = await response.json();
    //   setRecords(data);
    // };
    // fetchRecords();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Prontuário Eletrônico</h2>
        {records.length === 0 ? (
          <p className="text-center">Nenhum prontuário encontrado.</p>
        ) : (
          records.map((record) => (
            <div key={record.id} className="mb-4 p-4 bg-gray-100 rounded">
              <p><strong>Paciente:</strong> {record.patientName}</p>
              <p><strong>Histórico:</strong> {record.history}</p>
              <p><strong>Anamnese:</strong> {record.anamnesis}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PatientRecord;
