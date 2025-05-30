import React, { useState } from 'react';
import images from '../constant/images';
import SocialModal from '../components/SocialModal';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleHelloClick = () => {
        setIsModalOpen(true);
        setIsMobileMenuOpen(false); 
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false); 
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/40 overflow-x-hidden">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo/Name */}
                        <div className="text-2xl font-bold text-white">
                            <a href="#hero" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('hero');
                            }}>
                                <img className='h-20 hover:scale-150' src={images.Logo} alt="" />
                            </a>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            <button 
                                onClick={() => scrollToSection('about')}
                                className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-medium"
                            >
                                About
                            </button>
                           
                            <button 
                                onClick={() => scrollToSection('portfolio')}
                                className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-medium"
                            >
                                Portfolio
                            </button>
                            <button 
                                onClick={() => scrollToSection('skills')}
                                className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-medium"
                            >
                                Skills
                            </button>
                            <button 
                                onClick={() => scrollToSection('contact')}
                                className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-medium"
                            >
                                Contact
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center">
                            <button 
                                onClick={handleHelloClick}
                                className="bg-gray-800 hover:bg-gray-700 text-red-400 px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ml-2"
                            >
                                Hello
                            </button>
                            {/* Mobile Menu Button */}
                            <div className="md:hidden ml-2">
                                <button 
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="text-gray-300 hover:text-red-400"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
                        <div className="flex flex-col space-y-4">
                            <button 
                                onClick={() => scrollToSection('about')}
                                className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-medium text-left"
                            >
                                About
                            </button>
                            <button 
                                onClick={() => scrollToSection('portfolio')}
                                className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-medium text-left"
                            >
                                Portfolio
                            </button>
                            <button 
                                onClick={() => scrollToSection('skills')}
                                className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-medium text-left"
                            >
                                Skills
                            </button>
                            <button 
                                onClick={() => scrollToSection('contact')}
                                className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-medium text-left"
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Social Media Modal */}
            <SocialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Navbar;