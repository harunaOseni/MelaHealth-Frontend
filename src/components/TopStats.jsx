import React from 'react';
import { FaStethoscope, FaCalendarCheck, FaLightbulb, FaMapMarkerAlt } from 'react-icons/fa';

const TopStats = () => {
  const stats = [
    { name: 'Health Queries', value: 120, icon: <FaStethoscope /> },
    { name: 'Appointments', value: 45, icon: <FaCalendarCheck /> },
    { name: 'Wellness Tips', value: 300, icon: <FaLightbulb /> },
    { name: 'Resources Accessed', value: 80, icon: <FaMapMarkerAlt /> },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.name} className="flex items-center p-4 bg-glass backdrop-blur-md rounded-lg shadow-lg">
          <div className="text-3xl text-green-600">{stat.icon}</div>
          <div className="ml-4">
            <p className="text-gray-700">{stat.name}</p>
            <p className="text-2xl font-semibold text-deepBlue">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopStats;