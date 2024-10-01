import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaHome, FaStethoscope, FaLightbulb, FaMapMarkerAlt } from 'react-icons/fa';

const MobileNavbar = ({ isOpen, toggleNavbar }) => {
  const navItems = [
    { name: 'Home', path: '/dashboard', icon: <FaHome /> },
    { name: 'Symptom Checker', path: '/symptom-checker', icon: <FaStethoscope /> },
    { name: 'Wellness Tips', path: '/wellness-tips', icon: <FaLightbulb /> },
    { name: 'Local Resources', path: '/local-resources', icon: <FaMapMarkerAlt /> },
  ];

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-yellow-900 to-yellow-200 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="flex justify-end p-4">
        <button onClick={toggleNavbar} className="text-white">
          <FaTimes size={24} />
        </button>
      </div>
      <nav className="flex flex-col items-center">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="flex items-center text-white px-4 py-2 rounded hover:bg-white hover:bg-opacity-20 mb-4"
            onClick={toggleNavbar}
          >
            <span className="text-lg mr-3">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileNavbar;