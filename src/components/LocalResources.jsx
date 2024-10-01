import React from 'react';

const LocalResources = () => {
  const resources = [
    { name: 'Community Health Clinic', address: '123 Main St, Cityville', type: 'Clinic' },
    { name: 'Wellness Center', address: '456 Elm St, Townsville', type: 'Health Program' },
    { name: 'Mental Health Services', address: '789 Oak Rd, Villagetown', type: 'Counseling' },
    // Add more resources as needed
  ];

  return (
    <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-4 text-deepBlue">Local Resources</h2>
      <div className="space-y-4 overflow-y-auto flex-grow">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white bg-opacity-50 p-4 rounded-lg">
            <h3 className="font-semibold text-deepBlue">{resource.name}</h3>
            <p className="text-gray-700">{resource.address}</p>
            <p className="text-sm text-gray-600">{resource.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalResources;