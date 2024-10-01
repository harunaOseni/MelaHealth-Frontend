import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, buttonText, onClick }) => {
  return (
    <motion.div
      className="bg-glass backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-center bg-glassGreen p-4 rounded-full mb-4">
        <span className="text-3xl text-white">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold text-deepBlue mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <button
        onClick={onClick}
        className="bg-accent text-white px-4 py-2 rounded-full shadow hover:bg-emerald-600 transition-colors duration-300"
      >
        {buttonText}
      </button>
    </motion.div>
  );
};

export default FeatureCard;