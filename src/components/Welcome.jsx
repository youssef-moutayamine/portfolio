"use client"

import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import { useContext, useEffect, useState } from "react"
import SplitText from "./SplitText"

export default function Welcome({ onAnimationComplete }) {
    const count = useMotionValue(0)
    const rounded = useTransform(count, value => Math.round(value))
    const [showWelcome, setShowWelcome] = useState(false)

    useEffect(() => {
        const controls = animate(count, 100, { 
            duration: 5,
            onComplete: () => {
                setShowWelcome(true)
                setTimeout(() => {
                    if (onAnimationComplete) {
                        onAnimationComplete()
                    }
                }, 3000)
            }
        })
        return () => controls.stop()
    }, [])

    const handleLetterAnimationComplete = () => {
        setTimeout(() => {
            if (onAnimationComplete) {
                onAnimationComplete()
            }
        }, 500)
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <motion.pre style={text}>{rounded}</motion.pre>
            {showWelcome && (
                <div className="text-center">
                    <div className="flex items-center justify-center gap-3">
                        <SplitText
                            text="Welcome to"
                            className="text-6xl font-bold text-white"
                            delay={50}
                            duration={0.8}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40, rotateX: -90 }}
                            to={{ opacity: 1, y: 0, rotateX: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                            onLetterAnimationComplete={handleLetterAnimationComplete}
                        />
                        <SplitText
                            text="My Portfolio"
                            className="text-6xl font-bold text-red-600"
                            delay={50}
                            duration={0.8}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40, rotateX: -90 }}
                            to={{ opacity: 1, y: 0, rotateX: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

const text = {
    fontSize: 64,
    color: "#e7000b",
} 
