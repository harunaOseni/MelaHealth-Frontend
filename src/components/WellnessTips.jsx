import React from 'react';

const WellnessTips = () => {
  const tips = [
    { category: 'Nutrition', tip: 'Eat a balanced diet rich in fruits and vegetables.' },
    { category: 'Exercise', tip: 'Aim for at least 30 minutes of moderate exercise daily.' },
    { category: 'Mental Health', tip: 'Practice mindfulness or meditation for 10 minutes each day.' },
    { category: 'Sleep', tip: 'Aim for 7-9 hours of sleep each night for optimal health.' },
    { category: 'Hydration', tip: 'Drink at least 8 glasses of water daily to stay hydrated.' },
    // Add more tips as needed
  ];

  return (
    <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-4 text-deepBlue">Wellness Tips</h2>
      <div className="space-y-4 overflow-y-auto flex-grow">
        {tips.map((tip, index) => (
          <div key={index} className="bg-white bg-opacity-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-600">{tip.category}</h3>
            <p className="text-gray-700">{tip.tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WellnessTips;