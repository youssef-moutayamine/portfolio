import React from 'react';
import { motion, useSpring, useScroll } from "framer-motion";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            id="scroll-indicator"
            style={{
                scaleX,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                originX: 0,
                background: "linear-gradient(to right, #ef4444, #dc2626)",
                zIndex: 1000,
            }}
        />
    );
};

export default ScrollProgress; 