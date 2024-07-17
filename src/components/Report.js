import React, { useState, useEffect } from 'react';

const Report = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const response = await fetch('/api/reports');
      const data = await response.json();
      setReports(data);
    };

    fetchReports();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-green-100 p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-700">Relatórios</h2>
        <ul className="mb-4">
          {reports.map((report) => (
            <li key={report.id} className="mb-2 bg-white p-2 rounded shadow">{report.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Report;
