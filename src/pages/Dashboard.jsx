import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
import SymptomChecker from '../components/SymptomChecker';
import WellnessTips from '../components/WellnessTips';
import LocalResources from '../components/LocalResources';
import { FaBars } from 'react-icons/fa';

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleSymptomInput = (input) => {
    navigate('/symptom-checker', { state: { initialSymptom: input } });
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden md:block">
        <Navbar />
      </div>
      <MobileNavbar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
      <main className="flex-1 overflow-y-auto bg-gradient-to-br from-primary to-softGold md:ml-64">
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:hidden mb-4">
            <button onClick={toggleNavbar} className="text-deepBlue">
              <FaBars size={24} />
            </button>
          </div>
          <h1 className="text-3xl font-bold text-deepBlue mb-6">Welcome, {userName}!</h1>
          <div className="flex flex-col md:flex-row h-[calc(100%-4rem)] gap-6">
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <div className="flex-1">
                <SymptomChecker onSymptomInput={handleSymptomInput} />
              </div>
              <div className="flex-1">
                <LocalResources />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <WellnessTips />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;