import React, { useState } from 'react';

const PortfolioSection = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    
    const projects = [
        {
            id: 1,
            title: "Easyfolio",
            category: "Frontend",
            description: "A responsive e-commerce website with modern UI and essential features.",
            image: "",
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
            image: "",
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
            image: "",
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
            image: "",
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
            image: "",
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
            image: "",
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
        <section id="portfolio" className="py-20 px-6 bg-gray-950">
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
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                        <a 
                                            href={project.githubUrl}
                                            className="w-10 h-10 bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500 hover:text-white transform translate-y-2 group-hover:translate-y-0 delay-75"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
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
                            <button className="bg-white text-red-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                                View All Projects
                            </button>
                            <button className="bg-red-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-red-700 transition-all duration-200 transform hover:scale-105 border-2 border-white/20">
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