import React from 'react';

const AppointmentScheduling = () => {
  const appointments = [
    { id: 1, clinicName: 'City Health Center', date: '2023-06-15', time: '10:00 AM' },
  ];

  return (
    <div className="bg-glass backdrop-blur-md p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Your Appointments</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Book Appointment
        </button>
      </div>
      {appointments.length === 0 ? (
        <p>No upcoming appointments.</p>
      ) : (
        <div className="space-y-4">
          {appointments.map((appt) => (
            <div key={appt.id} className="bg-white bg-opacity-50 p-4 rounded-md">
              <p><strong>Clinic:</strong> {appt.clinicName}</p>
              <p><strong>Date:</strong> {appt.date}</p>
              <p><strong>Time:</strong> {appt.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentScheduling;
