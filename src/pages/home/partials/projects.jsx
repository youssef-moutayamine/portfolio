import React, { useState } from 'react';

const PortfolioSection = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            category: "Full Stack",
            description: "A modern e-commerce platform built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            liveUrl: "#",
            githubUrl: "#",
            featured: true
        },
        {
            id: 2,
            title: "Task Management App",
            category: "Frontend",
            description: "A productivity app with drag-and-drop functionality, real-time updates, and collaborative features.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            technologies: ["React", "Redux", "Tailwind CSS", "Firebase"],
            liveUrl: "#",
            githubUrl: "#",
            featured: false
        },
        {
            id: 3,
            title: "Weather Dashboard",
            category: "Frontend",
            description: "A responsive weather application with location-based forecasts, interactive charts, and beautiful animations.",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            technologies: ["Vue.js", "Chart.js", "Weather API", "CSS3"],
            liveUrl: "#",
            githubUrl: "#",
            featured: false
        },
        {
            id: 4,
            title: "Restaurant Booking System",
            category: "Full Stack",
            description: "Complete restaurant management system with table booking, menu management, and customer reviews.",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            technologies: ["React", "Express.js", "PostgreSQL", "JWT"],
            liveUrl: "#",
            githubUrl: "#",
            featured: true
        },
        {
            id: 5,
            title: "Social Media Dashboard",
            category: "Frontend",
            description: "Analytics dashboard for social media management with real-time data visualization and reporting.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            technologies: ["React", "D3.js", "REST API", "Material-UI"],
            liveUrl: "#",
            githubUrl: "#",
            featured: false
        },
        {
            id: 6,
            title: "Portfolio Website",
            category: "Frontend",
            description: "Personal portfolio website with modern design, smooth animations, and responsive layout.",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            technologies: ["React", "Tailwind CSS", "Framer Motion", "Netlify"],
            liveUrl: "#",
            githubUrl: "#",
            featured: false
        }
    ];

    const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];
    
    const filteredProjects = activeFilter === 'All' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="portfolio" className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        My <span className="text-purple-400">Projects</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                activeFilter === category
                                    ? 'bg-purple-500 text-white shadow-lg transform scale-105'
                                    : 'bg-white/70 text-gray-700 hover:bg-white/90 hover:text-purple-600'
                            } backdrop-blur-sm border hover:border-purple-200`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Featured Projects */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                        <span className="text-purple-400">Featured</span> Projects
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {filteredProjects.filter(project => project.featured).map((project) => (
                            <div key={project.id} className="group bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.02]">
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
                                            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-purple-500 hover:text-white transform translate-y-2 group-hover:translate-y-0"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                        <a 
                                            href={project.githubUrl}
                                            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-purple-500 hover:text-white transform translate-y-2 group-hover:translate-y-0 delay-75"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                                            {project.category}
                                        </span>
                                        <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium">
                                            Featured
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech, index) => (
                                            <span 
                                                key={index}
                                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <a 
                                            href={project.liveUrl}
                                            className="flex-1 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-full text-center transition-all duration-200 transform hover:scale-105"
                                        >
                                            Live Demo
                                        </a>
                                        <a 
                                            href={project.githubUrl}
                                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-full text-center transition-all duration-200 transform hover:scale-105"
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
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                        All <span className="text-purple-400">Projects</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.filter(project => !project.featured).map((project) => (
                            <div key={project.id} className="group bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute top-3 right-3 flex gap-2">
                                        <a 
                                            href={project.liveUrl}
                                            className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-purple-500 hover:text-white"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                        <a 
                                            href={project.githubUrl}
                                            className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-purple-500 hover:text-white"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {project.technologies.slice(0, 3).map((tech, index) => (
                                            <span 
                                                key={index}
                                                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex gap-2">
                                        <a 
                                            href={project.liveUrl}
                                            className="flex-1 bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg text-center text-sm transition-all duration-200"
                                        >
                                            Demo
                                        </a>
                                        <a 
                                            href={project.githubUrl}
                                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg text-center text-sm transition-all duration-200"
                                        >
                                            Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Like What You See?
                        </h3>
                        <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                            I'm always working on new projects and learning new technologies. 
                            Let's collaborate on something amazing together!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                                View All Projects
                            </button>
                            <button className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-purple-700 transition-all duration-200 transform hover:scale-105 border-2 border-white/20">
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