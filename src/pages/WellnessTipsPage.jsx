import React from 'react';

const WellnessTipsPage = () => {
  const tips = [
    { category: 'Nutrition', tip: 'Eat a balanced diet rich in fruits and vegetables.' },
    { category: 'Exercise', tip: 'Aim for at least 30 minutes of moderate exercise daily.' },
    { category: 'Mental Health', tip: 'Practice mindfulness or meditation for 10 minutes each day.' },
    { category: 'Sleep', tip: 'Aim for 7-9 hours of sleep each night for optimal health.' },
    { category: 'Hydration', tip: 'Drink at least 8 glasses of water daily to stay hydrated.' },
    { category: 'Stress Management', tip: 'Take regular breaks and practice deep breathing exercises.' },
    { category: 'Social Connections', tip: 'Maintain strong relationships with friends and family.' },
    { category: 'Preventive Care', tip: 'Schedule regular check-ups with your healthcare provider.' },
  ];

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-yellow-900 to-yellow-200 ml-64">
      <div className="flex-1 overflow-y-auto p-8">
        <h1 className="text-4xl font-bold text-white mb-8">Wellness Tips</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-yellow-200 mb-2">{tip.category}</h3>
              <p className="text-white">{tip.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WellnessTipsPage;
