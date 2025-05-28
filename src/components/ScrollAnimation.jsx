import { useState, useEffect } from "react"

export default function ScrollProgressAnimation() {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = window.scrollY / totalHeight
            setScrollProgress(Math.min(progress, 1))
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <div
                id="scroll-indicator"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    backgroundColor: "#e0e0e0",
                    zIndex: 1000,
                }}
            >
                <div
                    style={{
                        width: `${scrollProgress * 100}%`,
                        height: "100%",
                        backgroundColor: "#ff0088",
                        transition: "width 0.1s ease-out",
                    }}
                />
            </div>
            
            {/* Demo content to show the animation working */}
            <div style={{ height: "300vh", padding: "2rem" }}>
                <div style={{ 
                    maxWidth: "800px", 
                    margin: "0 auto",
                    paddingTop: "2rem",
                    fontSize: "1.2rem",
                    lineHeight: "1.6"
                }}>
                    <h1 style={{ marginBottom: "2rem" }}>Portfolio Content</h1>
                    <p>Scroll down to see the progress bar animation at the top!</p>
                    <div style={{ height: "50vh" }}></div>
                    <h2>About Section</h2>
                    <div style={{ height: "50vh" }}></div>
                    <h2>Projects Section</h2>
                    <div style={{ height: "50vh" }}></div>
                    <h2>Contact Section</h2>
                    <div style={{ height: "50vh" }}></div>
                </div>
            </div>
        </>
    )
}