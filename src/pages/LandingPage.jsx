import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import AIDrivenSection from '../components/AIDrivenSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      {/* <AboutSection />
      <FeaturesSection />
      <AIDrivenSection />
      <Footer /> */}
    </div>
  );
};

export default LandingPage;
