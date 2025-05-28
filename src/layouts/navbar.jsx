import React from 'react';
import images from '../constant/images';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/40">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo/Name */}
                    <div className="text-2xl font-bold text-white">
                        <a href="#hero"><img className='h-20 hover:scale-150' src={images.Logo} alt="" /></a>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-medium">
                            About
                        </a>
                       
                        <a href="#portfolio" className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-medium">
                            Portfolio
                        </a>
                        <a href="#skilss" className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-medium">
                            Skills
                        </a>
                        <a href="#contact" className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-medium">
                            Contact
                        </a>
                    </div>

                    {/* Hello Button */}
                    <div className="flex items-center">
                        <button className="bg-gray-800 hover:bg-gray-700 text-red-400 px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2">
                            Hello
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button className="text-gray-300 hover:text-red-400">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;