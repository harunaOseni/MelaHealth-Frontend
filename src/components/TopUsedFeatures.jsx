import React, { useEffect, useState } from 'react';
import { FaStethoscope, FaLightbulb, FaCalendarCheck } from 'react-icons/fa';

const features = [
  { name: 'Symptom Checker', icon: <FaStethoscope />, key: 'symptomChecker' },
  { name: 'Wellness Tips', icon: <FaLightbulb />, key: 'wellnessTips' },
  { name: 'Appointments', icon: <FaCalendarCheck />, key: 'appointments' },
  // Add more features as needed
];

const TopUsedFeatures = () => {
  const [usage, setUsage] = useState({});

  useEffect(() => {
    // Fetch usage statistics from backend
    fetch('/api/top-used-features')
      .then((res) => res.json())
      .then((data) => setUsage(data))
      .catch((err) => console.error(err));
  }, []);

  const sortedFeatures = features.sort((a, b) => (usage[b.key] || 0) - (usage[a.key] || 0));

  return (
    <div className="bg-glass backdrop-blur-md p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
      <h3 className="text-xl font-semibold mb-4">Top Used Features</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedFeatures.map((feature) => (
          <div key={feature.name} className="flex flex-col items-center p-4 bg-glass backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="bg-glass backdrop-blur-sm p-3 rounded-full text-green-600 shadow-inner mb-2">
              {feature.icon}
            </div>
            <div className="text-center">
              <p className="font-semibold text-sm whitespace-normal">{feature.name}</p>
              <p className="text-gray-600 text-xs whitespace-normal">Used {usage[feature.key] || 0} times</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopUsedFeatures;