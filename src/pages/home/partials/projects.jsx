import { image } from 'framer-motion/client';
import React, { useState } from 'react';
import images from '../../../constant/images';
import { FiExternalLink, FiGithub } from "react-icons/fi";

const PortfolioSection = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    
    const projects = [
        {
            id: 1,
            title: "Easyfolio",
            category: "Frontend",
            description: "A responsive e-commerce website with modern UI and essential features.",
            image: images.Easy,
            technologies: ["HTML", "SCSS", "Bootstrap"],
            liveUrl: "https://youssef-moutayamine.github.io/projet-final-youssef-moutayamine/",
            githubUrl: "https://github.com/youssef-moutayamine/projet-final-youssef-moutayamine",
            featured: true
        },
        {
            id: 2,
            title: "Calculator",
            category: "Frontend",
            description: "A basic calculator built with HTML, CSS, and JavaScript.",
            image: images.Calculator,
            technologies: ["HTML", "CSS", "JavaScript"],
            liveUrl: "https://youssef-moutayamine.github.io/Calculator/",
            githubUrl: "https://github.com/youssef-moutayamine/Calculator",
            featured: false
        },
        {
            id: 3,
            title: "Tic Tac Toe",
            category: "Frontend",
            description: "A simple two-player tic-tac-toe game in the browser.",
            image: images.Xo,
            technologies: ["HTML", "CSS", "JavaScript"],
            liveUrl: "https://youssef-moutayamine.github.io/tic-tac-toe/",
            githubUrl: "https://github.com/youssef-moutayamine/tic-tac-toe",
            featured: false
        },
        {
            id: 4,
            title: "Anime-finder",
            category: "Frontend",
            description: "A React app to search and explore anime information.",
            image: images.Anime,
            technologies: ["React", "Tailwind CSS"],
            liveUrl: "#",
            githubUrl: "https://github.com/youssef-moutayamine/anime-finder",
            featured: true
        },
        {
            id: 5,
            title: "Movies",
            category: "Frontend",
            description: "A simple app to browse and display movie data using React.",
            image: images.Movies,
            technologies: ["React", "Tailwind CSS"],
            liveUrl: "#",
            githubUrl: "https://github.com/youssef-moutayamine/Movies",
            featured: false
        },
        {
            id: 6,
            title: "Y-LIBRARY",
            category: "Frontend",
            description: "A library app built with React to display books and authors.",
            image: images.YLibrary,
            technologies: ["React", "Tailwind CSS"],
            liveUrl: "#",
            githubUrl: "https://github.com/youssef-moutayamine/Y-LIBRARY",
            featured: false
        }
    ];

    const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];
    
    const filteredProjects = activeFilter === 'All' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="portfolio" className="py-20 px-6 bg-gray-900">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My <span className="text-red-400">Projects</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full"></div>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                activeFilter === category
                                    ? 'bg-red-500 text-white shadow-lg transform scale-105'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-red-400'
                            } backdrop-blur-sm border border-gray-700`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Featured Projects */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                        <span className="text-red-400">Featured</span> Projects
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {filteredProjects.filter(project => project.featured).map((project) => (
                            <div key={project.id} className="group bg-gray-900/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.02]">
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute top-4 right-4 flex gap-2">
                                        <a 
                                            href={project.liveUrl}
                                            className="w-10 h-10 bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500 hover:text-white transform translate-y-2 group-hover:translate-y-0"
                                        >
                                            <FiExternalLink className="w-5 h-5" />
                                        </a>
                                        <a 
                                            href={project.githubUrl}
                                            className="w-10 h-10 bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500 hover:text-white transform translate-y-2 group-hover:translate-y-0 delay-75"
                                        >
                                            <FiGithub className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="bg-gray-800 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                                            {project.category}
                                        </span>
                                        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                                            Featured
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech, index) => (
                                            <span 
                                                key={index}
                                                className="bg-gray-800 text-red-400 px-3 py-1 rounded-full text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <a 
                                            href={project.liveUrl}
                                            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full text-center transition-all duration-200 transform hover:scale-105"
                                        >
                                            Live Demo
                                        </a>
                                        <a 
                                            href={project.githubUrl}
                                            className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-full text-center transition-all duration-200 transform hover:scale-105"
                                        >
                                            View Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* All Projects Grid */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                        All <span className="text-red-400">Projects</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.filter(project => !project.featured).map((project) => (
                            <div key={project.id} className="group bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 right-4 flex gap-2">
                                        <a 
                                            href={project.liveUrl}
                                            className="w-10 h-10 bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500 hover:text-white transform translate-y-2 group-hover:translate-y-0"
                                        >
                                            <FiExternalLink className="w-5 h-5" />
                                        </a>
                                        <a 
                                            href={project.githubUrl}
                                            className="w-10 h-10 bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500 hover:text-white transform translate-y-2 group-hover:translate-y-0 delay-75"
                                        >
                                            <FiGithub className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="bg-gray-800 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-300 mb-3 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, index) => (
                                            <span 
                                                key={index}
                                                className="bg-gray-800 text-red-400 px-3 py-1 rounded-full text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <a 
                                            href={project.liveUrl}
                                            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full text-center transition-all duration-200 transform hover:scale-105"
                                        >
                                            Live Demo
                                        </a>
                                        <a 
                                            href={project.githubUrl}
                                            className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full text-center transition-all duration-200 transform hover:scale-105"
                                        >
                                            View Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Like What You See?
                        </h3>
                        <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                            I'm always working on new projects and learning new technologies. 
                            Let's collaborate on something amazing together!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                className="bg-red-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-red-700 transition-all duration-200 transform hover:scale-105 border-2 border-white/20"
                                onClick={() => {
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Let's Work Together
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;