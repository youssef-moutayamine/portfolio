import React, { useState } from 'react';
import HeroSection from './partials/hero';
import AboutSection from './partials/about';
import ContactSection from './partials/contact';
import SkillsSection from './partials/skills';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioSection from './partials/projects';
import ScrollAnimation from '../../components/ScrollAnimation';

const HomePage = () => {
    const [showSections, setShowSections] = useState(false);

    const handleHeroAnimationComplete = () => {
        setShowSections(true);
    };

    return (
        <div className="min-h-screen bg-gray-950 overflow-x-hidden overflow-y-hidden">
            <HeroSection onAnimationComplete={handleHeroAnimationComplete} />
            <AnimatePresence>
                {showSections && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <ScrollAnimation>
                            <AboutSection/>
                        </ScrollAnimation>
                        <ScrollAnimation>
                            <PortfolioSection/>
                        </ScrollAnimation>
                        <ScrollAnimation>
                            <SkillsSection/>
                        </ScrollAnimation>
                        <ScrollAnimation>
                            <ContactSection/>
                        </ScrollAnimation>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HomePage;
