import React from 'react';

const LocalResourcesPage = () => {
  const resources = [
    { name: 'Community Health Clinic', address: '123 Main St, Cityville', type: 'Clinic', phone: '(555) 123-4567' },
    { name: 'Wellness Center', address: '456 Elm St, Townsville', type: 'Health Program', phone: '(555) 987-6543' },
    { name: 'Mental Health Services', address: '789 Oak Rd, Villagetown', type: 'Counseling', phone: '(555) 246-8135' },
    { name: 'Women\'s Health Center', address: '321 Pine Ave, Hamletburg', type: 'Specialized Care', phone: '(555) 369-2580' },
    { name: 'Family Planning Clinic', address: '654 Maple Ln, Boroughville', type: 'Reproductive Health', phone: '(555) 147-2589' },
    { name: 'Nutrition Counseling', address: '987 Cedar Blvd, Villageopolis', type: 'Dietary Services', phone: '(555) 753-9514' },
  ];

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-yellow-900 to-yellow-200 ml-64">
      <div className="flex-1 overflow-y-auto p-8">
        <h1 className="text-4xl font-bold text-white mb-8">Local Health Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-yellow-200 mb-2">{resource.name}</h3>
              <p className="text-white mb-1">{resource.address}</p>
              <p className="text-white mb-1">{resource.phone}</p>
              <p className="text-sm text-yellow-100">{resource.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalResourcesPage;
