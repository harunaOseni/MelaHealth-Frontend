import React, { useEffect, useState } from 'react';

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch reports from backend
    fetch('/api/reports')
      .then((res) => res.json())
      .then((data) => setReports(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-glass backdrop-blur-md p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Health Reports</h3>
      <div className="space-y-4">
        {reports.map((report) => (
          <div key={report.id} className="p-4 bg-gray-50 rounded-lg shadow">
            <p>{report.message}</p>
            <p className="text-sm text-gray-500">{new Date(report.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;