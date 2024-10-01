import React from 'react';
import { motion } from 'framer-motion';

const SmileyLoader = () => {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100">
      {/* Face circle */}
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        stroke="#FFD700"
        strokeWidth="5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      {/* Left eye */}
      <motion.circle
        cx="35"
        cy="40"
        r="5"
        fill="#FFD700"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      />
      {/* Right eye */}
      <motion.circle
        cx="65"
        cy="40"
        r="5"
        fill="#FFD700"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      />
      {/* Smile */}
      <motion.path
        d="M 30 60 Q 50 80 70 60"
        stroke="#FFD700"
        strokeWidth="5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      />
    </svg>
  );
};

export default SmileyLoader;
