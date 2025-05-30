import React from 'react';
import images from '../../../constant/images';

const AboutSection = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="about" className="py-20 px-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-x-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About <span className="text-red-400">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-pink-400 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="relative z-10">
                            <div className="w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] lg:w-[28rem] lg:h-[28rem] mx-auto bg-gradient-to-br from-red-400 to-pink-400 rounded-[2.5rem] shadow-2xl flex items-center justify-center overflow-hidden">
                                <img src={images.Gif} alt="Gif" className="w-full h-full object-cover rounded-[2.5rem]" />
                            </div>
                        </div>
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-200/30 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-200/30 rounded-full blur-xl"></div>
                        <div className="absolute top-1/2 -right-8 w-16 h-16 bg-indigo-200/40 rounded-full blur-lg"></div>

                        <div className="absolute z-10 -bottom-8 -left-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                            <div className="text-2xl font-bold text-red-600">6+</div>
                            <div className="text-sm text-gray-600">Projects</div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Hi, my name is <span className="text-red-500">Youssef Moutayamine</span>.
                                I'm a passionate <span className="text-red-500">web developer</span>.
                            </h1>
                            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                                <p>
                                    I specialize in building modern, responsive web applications using the latest technologies.
                                    With a strong foundation in <span className="font-semibold text-red-600">JavaScript</span>,
                                    <span className="font-semibold text-red-600"> React</span>, and front-end development,
                                    I love turning creative ideas into real-world digital experiences.
                                </p>
                                <p>
                                    I am always eager to learn new skills, collaborate with others, and take on exciting
                                    challenges in the world of web development. When I'm not coding, I enjoy exploring
                                    new tech trends, contributing to open-source projects, and continuously improving my craft.
                                </p>
                                <p className="text-red-600 font-medium">
                                    Let's connect and create something amazing together!

                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/90 transition-all duration-300 shadow-lg">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-800">Frontend</h3>
                                <p className="text-sm text-gray-600">React, Vue, CSS</p>
                            </div>
                            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/90 transition-all duration-300 shadow-lg">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-800">Backend</h3>
                                <p className="text-sm text-gray-600">Node.js, APIs</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={scrollToContact}
                                className="bg-white/70 backdrop-blur-sm m-auto hover:bg-white text-red-600 font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl border border-red-200 flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                Let's Talk
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default AboutSection;
