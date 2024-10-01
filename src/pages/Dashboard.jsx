import React from 'react';
import Navbar from '../components/Navbar';
import SymptomChecker from '../components/SymptomChecker';
import WellnessTips from '../components/WellnessTips';
import LocalResources from '../components/LocalResources';

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto bg-gradient-to-br from-primary to-softGold ml-64">
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex h-[calc(100%-4rem)] gap-6">
            <div className="w-1/2 flex flex-col gap-6">
              <div className="flex-1">
                <SymptomChecker />
              </div>
              <div className="flex-1">
                <LocalResources />
              </div>
            </div>
            <div className="w-1/2">
              <WellnessTips />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;