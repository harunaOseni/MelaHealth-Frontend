import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import heroBackground from '../assets/hero-background.jpeg';
import SmileyLoader from './SmileyLoader';

const HeroSection = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim()) {
      setIsLoading(true);
      // Simulate a delay for the animation
      await new Promise(resolve => setTimeout(resolve, 3000));
      navigate('/dashboard', { state: { userName: name } });
      localStorage.setItem('userName', name);
    }
  };

  return (
    <section
      className="w-full h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-gold-500 to-yellow-600 opacity-50"></div>

      {/* Frosted Glass Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-lg mx-4"
      >
        <AnimatePresence>
          {!isLoading ? (
            <motion.div
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Headline */}
              <h1 className="text-5xl font-heading text-white mb-4 text-center drop-shadow-md">
                Welcome to MelaHealth
              </h1>
              {/* Sub-Text */}
              <p className="text-xl text-white mb-8 text-center drop-shadow-md">
                Culturally Relevant Healthcare, Just for You.
              </p>
              {/* Name Input Form */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name"
                  className="w-full sm:w-auto px-6 py-3 bg-white bg-opacity-30 backdrop-blur-md border border-white border-opacity-40 rounded-full text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgba(255, 215, 0, 0.7)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-yellow-500 bg-opacity-80 backdrop-blur-md border border-yellow-400 rounded-full text-white font-semibold shadow-md hover:bg-yellow-600 transition-all duration-300"
                >
                  Go to Dashboard
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center"
            >
              <SmileyLoader />
              <p className="text-white mt-4 text-xl">Loading your dashboard...</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default HeroSection;