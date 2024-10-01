import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot } from 'react-icons/fa';

const AIDrivenSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Image or Illustration */}
        <div className="lg:w-1/2 p-6">
          <FaRobot className="text-6xl text-accent" />
          {/* Replace with an actual image or illustration if available */}
        </div>
        {/* Text */}
        <div className="lg:w-1/2 p-6">
          <h2 className="text-3xl font-heading text-deepBlue mb-4">AI-Powered Health Insights</h2>
          <p className="text-gray-700 mb-6">
            Powered by GPT-4, MelaHealth delivers personalized health guidance in real-time, ensuring you receive
            accurate and culturally relevant information tailored to your needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-6 py-3 rounded-full shadow-lg hover:bg-emerald-600 transition duration-300"
          >
            Learn How It Works
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AIDrivenSection;
