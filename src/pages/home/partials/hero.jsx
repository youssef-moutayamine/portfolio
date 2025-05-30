import React, { useState, useEffect } from 'react';
import Welcome from '../../../components/Welcome';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp, FiGithub, FiLinkedin } from "react-icons/fi";
import { useMotionValue, useSpring } from 'framer-motion';

const HeroSection = ({ onAnimationComplete }) => {
    const [showContent, setShowContent] = useState(false);

    // Cursor-following card logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 120, damping: 20 });
    const springY = useSpring(y, { stiffness: 120, damping: 20 });

    const handleMouseMove = (e) => {
        const section = e.currentTarget;
        const rect = section.getBoundingClientRect();
        // Offset so card is always in top right, but moves with cursor
        const offsetX = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
        const offsetY = Math.min(Math.max(e.clientY - rect.top, 0), rect.height);
        // Card base position (top right, 40px from top, 40px from right)
        x.set(offsetX - rect.width + 160); // 160px is card width + margin
        y.set(offsetY - 40); // 40px from top
    };

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
        <div id='hero' className="min-h-screen bg-gray-950 relative overflow-x-hidden overflow-y-hidden max-w-full">
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
                onMouseMove={handleMouseMove}
                onMouseLeave={() => { x.set(0); y.set(0); }}
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
                   
                    {/* Floating Card - Top Right, follows cursor */}
                    <motion.div
                        className="hidden sm:block absolute"
                        style={{
                            top: 40,
                            right: 40,
                            x: springX,
                            y: springY,
                            zIndex: 30,
                        }}
                        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                    >
                        <div className="bg-gray-900 rounded-2xl shadow-lg p-6 max-w-xs w-40 h-28 flex flex-col justify-center items-center">
                            <div className="w-24 h-10 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg mb-2"></div>
                            <div className="h-2 bg-gray-700 rounded w-3/4 mb-1"></div>
                            <div className="h-2 bg-gray-700 rounded w-1/2"></div>
                        </div>
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="mt-20 relative min-h-[300px]">
                        {/* Desktop/Tablet: Two cards */}
                        <div className="hidden sm:block">
                            <div className="absolute right-0 top-32 sm:top-10 bg-gray-900 rounded-2xl shadow-lg p-4 sm:p-6 z-30 max-w-xs mr-4">
                                <div className="w-28 sm:w-44 h-20 sm:h-28 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg mb-4"></div>
                                <div className="space-y-2">
                                    <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                                    <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                                </div>
                            </div>
                            <div className="absolute left-0 bottom-4 sm:bottom-10 bg-gray-900 rounded-2xl shadow-lg p-3 sm:p-4 z-30 max-w-xs ml-4">
                                <div className="w-20 sm:w-28 h-12 sm:h-16 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg mb-3"></div>
                                <div className="space-y-1">
                                    <div className="h-2 bg-gray-700 rounded w-full"></div>
                                    <div className="h-2 bg-gray-700 rounded w-2/3"></div>
                                </div>
                            </div>
                        </div>
                        {/* Subtle background shapes */}
                        <div className="absolute inset-0 -z-10 max-w-full overflow-x-hidden">
                            <div className="absolute top-1/4 left-1/4 w-36 sm:w-56 h-36 sm:h-56 bg-red-900/30 rounded-full blur-3xl max-w-full"></div>
                            <div className="absolute bottom-1/4 right-1/4 w-44 sm:w-72 h-44 sm:h-72 bg-red-800/30 rounded-full blur-3xl max-w-full"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-64 h-40 sm:h-64 bg-gray-800/20 rounded-full blur-3xl max-w-full"></div>
                        </div>
                    </div>
                </div>
            </motion.section>
            {/* Back to Top, GitHub, and LinkedIn Icons */}
            <div className="fixed left-4 bottom-4 z-30 flex flex-col items-center gap-2">
                <button
                    className="bg-gray-800/80 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition-colors duration-200"
                    aria-label="Back to top"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    type="button"
                >
                    <FiArrowUp className="w-6 h-6" />
                </button>
                <a
                    href="https://github.com/youssef-moutayamine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/80 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition-colors duration-200"
                    aria-label="GitHub"
                >
                    <FiGithub className="w-6 h-6" />
                </a>
                <a
                    href="https://www.linkedin.com/in/youssef-moutayamine/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/80 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition-colors duration-200"
                    aria-label="LinkedIn"
                >
                    <FiLinkedin className="w-6 h-6" />
                </a>
            </div>
        </div>
    );
};

export default HeroSection;