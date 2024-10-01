import React from 'react';
import aboutImage from '../assets/hero-background.jpeg';

const AboutSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
                {/* Text */}
                <div className="lg:w-1/2 p-6">
                    <h2 className="text-3xl font-heading text-deepBlue mb-4">Your Virtual Health Assistant</h2>
                    <p className="text-gray-700 text-lg">
                        MelaHealth provides culturally relevant health information and resources, designed to meet the needs of
                        communities of color. Whether it’s hypertension, diabetes, or overall wellness, we offer personalized
                        support tailored just for you.
                    </p>
                </div>
                {/* Image */}
                <div className="lg:w-1/2 p-6">
                    <img
                        src={aboutImage}
                        alt="Diverse family in a healthcare setting"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;