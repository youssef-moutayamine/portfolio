import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiExternalLink } from "react-icons/fi";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FiGithub, href: 'https://github.com/youssef-moutayamine', label: 'GitHub' },
        { icon: FiLinkedin, href: 'https://www.linkedin.com/in/youssef-moutayamine-25594b368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
        { icon: FiMail, href: 'mailto:moutayamineyoussef6@email.com', label: 'Email' },
    ];

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#portfolio' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    const services = [
        'Web Development',

    ];

    return (
        <footer className="bg-gray-900 text-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">
                            Youssef <span className="text-red-500">Moutayamine</span>
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Full Stack Developer passionate about creating innovative web solutions.
                            Let's build something amazing together.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors group"
                                        aria-label={social.label}

                                    >
                                        <IconComponent size={18} className="text-white" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-red-500">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors flex items-center group"
                                    >
                                        {link.name}
                                        <FiExternalLink size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-red-500">Services</h4>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={index} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-800 pt-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                <FiMail size={16} className="text-white" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Email</p>
                                <p className="text-white">moutayamineyoussef6@email.com</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                <FiPhone size={16} className="text-white" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Phone</p>
                                <p className="text-white">+212 621 749-514</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                <FiMapPin size={16} className="text-white" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Location</p>
                                <p className="text-white">Casablanca, Morocco</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {currentYear} Youssef Moutayamine. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Sitemap
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;