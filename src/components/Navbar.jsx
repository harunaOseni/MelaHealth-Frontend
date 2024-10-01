import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaStethoscope,
  FaLightbulb,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/dashboard', icon: <FaHome /> },
    { name: 'Symptom Checker', path: '/symptom-checker', icon: <FaStethoscope /> },
    { name: 'Wellness Tips', path: '/wellness-tips', icon: <FaLightbulb /> },
    { name: 'Local Resources', path: '/local-resources', icon: <FaMapMarkerAlt /> },
  ];

  return (
    <nav className="w-64 bg-gradient-to-br from-yellow-900 to-yellow-200 h-screen p-6 fixed">
      <h2 className="text-white text-2xl font-bold mb-8">MelaHealth</h2>
      <ul>
        {navItems.map((item) => (
          <li key={item.name} className="mb-4">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center text-white px-4 py-2 rounded hover:bg-green-700 ${
                  isActive ? 'bg-green-700' : ''
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span className="ml-3">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
