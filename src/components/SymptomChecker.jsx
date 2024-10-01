import React from 'react';

const SymptomChecker = () => {
  return (
    <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-4 text-deepBlue">Symptom Checker</h2>
      <form className="flex-grow flex flex-col overflow-hidden">
        <textarea
          className="w-full p-3 mb-4 rounded-lg border border-gray-300 bg-white bg-opacity-50 flex-grow overflow-y-auto resize-none focus:outline-none"
          placeholder="Describe your symptoms..."
        ></textarea>
        <button className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
          Check Symptoms
        </button>
      </form>
    </div>
  );
};

export default SymptomChecker;