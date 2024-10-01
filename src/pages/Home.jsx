import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center py-20">
                <div className="w-full h-96">
                    <Canvas>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[0, 0, 5]} />
                        <mesh rotation={[0, 0, 0]}>
                            <sphereGeometry args={[1, 32, 32]} />
                            <meshStandardMaterial color="#2ECC71" />
                        </mesh>
                        <Stars
                            radius={110}
                            depth={50}
                            count={6000}
                            factor={9}
                            saturation={0}
                            fade={false}
                            // speed={2}
                        />
                        <OrbitControls enableZoom={false} />
                    </Canvas>
                </div>
                <h1 className="text-white font-heading text-4xl mt-8">Welcome to Melahealth</h1>
                <p className="text-center text-gray-300 mt-4 max-w-xl">
                    Your culturally sensitive virtual health assistant providing valuable resources and information.
                </p>
                <div className="mt-6">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-accent text-white px-6 py-2 rounded-full mr-4"
                    >
                        Get Started
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-softGold text-deepBlue px-6 py-2 rounded-full"
                    >
                        Learn More
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default Home;