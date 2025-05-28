import React, { useState } from 'react';
import HeroSection from './partials/hero';
import AboutSection from './partials/about';
import ContactSection from './partials/contact';
import SkillsSection from './partials/skills';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioSection from './partials/projects';

const HomePage = () => {
    const [showSections, setShowSections] = useState(false);

    const handleHeroAnimationComplete = () => {
        setShowSections(true);
    };

    return (
        <>
            <HeroSection onAnimationComplete={handleHeroAnimationComplete} />
            <AnimatePresence>
                {showSections && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <AboutSection/>
                        <SkillsSection/>
                        {/* <PortfolioSection/> */}
                        <ContactSection/>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default HomePage;
