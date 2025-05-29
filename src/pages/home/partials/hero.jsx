import React, { useState, useEffect } from 'react';
import Welcome from '../../../components/Welcome';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = ({ onAnimationComplete }) => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Add no-scroll class when component mounts
        document.body.classList.add('no-scroll');

        // Remove no-scroll class when animation completes
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    const handleAnimationComplete = () => {
        setShowContent(true);
        document.body.classList.remove('no-scroll');
        if (onAnimationComplete) {
            onAnimationComplete();
        }
    };

    return (
        <div id='hero' className="min-h-screen bg-gray-950 relative">
            {/* Initial Welcome Animation */}
            <AnimatePresence>
                {!showContent && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-gray-950 z-50"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Welcome onAnimationComplete={handleAnimationComplete} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <motion.section 
                className="pt-32 pb-20 px-4 sm:px-6 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={{ duration: 1 }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
                            <span className="text-gray-100">Youssef </span>
                            <span className="text-red-400">Moutayamine</span>
                        </h1>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-8">
                             Full Stack Developer
                        </h2>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
                            "My work matters."
                        </p>
                    </div>
                   
                    {/* Decorative Elements */}
                    <div className="mt-20 relative">
                        {/* Floating Cards Preview */}
                        <div className="absolute right-4 sm:right-10 top-32 sm:top-10 bg-gray-900 rounded-2xl shadow-lg p-4 sm:p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300 z-10">
                            <div className="w-32 sm:w-48 h-24 sm:h-32 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg mb-4"></div>
                            <div className="space-y-2">
                                <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                                <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                            </div>
                        </div>
                        {/* Another floating card */}
                        <div className="absolute left-4 sm:left-10 bottom-4 sm:bottom-10 bg-gray-900 rounded-2xl shadow-lg p-3 sm:p-4 transform -rotate-2 hover:rotate-0 transition-transform duration-300 z-10">
                            <div className="w-24 sm:w-32 h-16 sm:h-20 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg mb-3"></div>
                            <div className="space-y-1">
                                <div className="h-2 bg-gray-700 rounded w-full"></div>
                                <div className="h-2 bg-gray-700 rounded w-2/3"></div>
                            </div>
                        </div>
                        {/* Subtle background shapes */}
                        <div className="absolute inset-0 -z-10">
                            <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-red-900/30 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-red-800/30 rounded-full blur-3xl"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 sm:w-80 h-56 sm:h-80 bg-gray-800/20 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default HeroSection;