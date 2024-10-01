import React, { useState } from 'react';

const SymptomChecker = ({ onSymptomInput }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSymptomInput(input);
    }
  };

  return (
    <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-4 text-deepBlue">Symptom Checker</h2>
      <form onSubmit={handleSubmit} className="flex-grow flex flex-col overflow-hidden">
        <textarea
          className="w-full p-3 mb-4 rounded-lg border border-gray-300 bg-white bg-opacity-50 flex-grow overflow-y-auto resize-none focus:outline-none"
          placeholder="Describe your symptoms..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
          Check Symptoms
        </button>
      </form>
    </div>
  );
};

export default SymptomChecker;