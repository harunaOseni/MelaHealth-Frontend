import React from 'react';
import { FaStethoscope, FaLightbulb, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaStethoscope />,
      title: 'Symptom Checker',
      description: 'Check Your Symptoms with Culturally Relevant Guidance.',
      buttonText: 'Start Symptom Check',
      onClick: () => {
        // Navigate to Symptom Checker page or trigger modal
      },
    },
    {
      icon: <FaLightbulb />,
      title: 'Wellness Tips',
      description: 'Personalized Wellness Tips for Nutrition, Exercise, and Mental Health.',
      buttonText: 'Explore Wellness Tips',
      onClick: () => {
        // Navigate to Wellness Tips page
      },
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Local Resources',
      description: 'Find Local Clinics and Support Programs Nearby.',
      buttonText: 'Find Clinics Near Me',
      onClick: () => {
        // Navigate to Local Resources page
      },
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Appointment Scheduling',
      description: 'Schedule Appointments with Local Providers Easily.',
      buttonText: 'Book an Appointment',
      onClick: () => {
        // Navigate to Appointment Scheduling page
      },
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-heading text-deepBlue text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              buttonText={feature.buttonText}
              onClick={feature.onClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;