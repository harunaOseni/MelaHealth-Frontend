import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="sticky top-0 bg-primary shadow-md z-50">
            <nav className="container mx-auto flex justify-between p-4">
                <div className="text-deepBlue font-heading text-xl">
                    Melahealth
                </div>
                {/* <ul className="flex space-x-4">
                    <li><Link to="/symptom-checker" className="text-deepBlue hover:text-accent">Symptom Checker</Link></li>
                    <li><Link to="/wellness-tips" className="text-deepBlue hover:text-accent">Wellness Tips</Link></li>
                    <li><Link to="/local-resources" className="text-deepBlue hover:text-accent">Local Resources</Link></li>
                    <li><Link to="/appointment" className="text-deepBlue hover:text-accent">Appointment Scheduling</Link></li>
                </ul> */}
            </nav>
        </header>
    );
};

export default Header;