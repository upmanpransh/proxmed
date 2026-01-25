import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaShareAlt, FaSearch, FaShieldAlt, FaHandshake, FaMedal, FaNetworkWired } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const FeatureShowcase = () => {
    const sectionRef = useRef(null);
    const hubRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Floating animation for feature circles
            const circles = gsap.utils.toArray('.feature-circle');
            circles.forEach((circle, i) => {
                gsap.to(circle, {
                    y: "random(-15, 15)",
                    x: "random(-10, 10)",
                    duration: `random(2, 4)`,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: i * 0.3
                });
            });

            // Pulse animation for the central hub glow
            gsap.to('.hub-glow', {
                opacity: 0.8,
                scale: 1.1,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const features = [
        { icon: <FaNetworkWired />, text: "Automated Workflows", side: "left" },
        { icon: <FaHandshake />, text: "Expert Collaboration", side: "left" },
        { icon: <FaShieldAlt />, text: "Secure Pipelines", side: "left" },
        { icon: <FaSearch />, text: "Intelligent Search", side: "right" },
        { icon: <FaShareAlt />, text: "Data Interconnectivity", side: "right" },
        { icon: <FaMedal />, text: "Clinical Validation", side: "right" },
    ];

    const leftFeatures = features.filter(f => f.side === "left");
    const rightFeatures = features.filter(f => f.side === "right");

    return (
        <section ref={sectionRef} className="py-32 relative overflow-hidden flex items-center justify-center">
            {/* Background Radial Effect (Placeholder for dots in image) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-[800px] h-[800px] bg-gradient-radial from-accent/20 via-transparent to-transparent rounded-full" />
                <div className="absolute w-full h-full bg-[radial-gradient(circle,var(--accent-color)_1px,transparent_1px)] [background-size:40px_40px] opacity-10" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">

                    {/* Left Column */}
                    <div className="flex flex-col gap-12 lg:gap-20">
                        {leftFeatures.map((feat, idx) => (
                            <div key={idx} className="flex items-center space-x-6 group">
                                <div className="text-right hidden sm:block">
                                    <p className="text-white font-bold group-hover:text-accent transition-colors duration-300">{feat.text}</p>
                                    <p className="text-text-dim text-xs uppercase tracking-widest mt-1">Proxmed Systems</p>
                                </div>
                                <div className="feature-circle w-16 h-16 bg-white rounded-full flex items-center justify-center text-background text-2xl shadow-[0_0_20px_var(--accent-color-glow)] border-2 border-transparent group-hover:border-accent transition-all duration-300">
                                    {feat.icon}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Central Hub */}
                    <div ref={hubRef} className="relative group">
                        {/* Glow Behind */}
                        <div className="hub-glow absolute inset-0 bg-accent/30 rounded-full blur-3xl -z-10 group-hover:bg-accent/40 transition-all duration-500" />

                        <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full flex flex-col items-center justify-center p-8 shadow-[0_0_50px_var(--accent-color-glow)] border-4 border-white/10">
                            <img src={logo} alt="Proxmed Hub" className="w-[180px] object-contain mb-4" />
                            <p className="text-[10px] md:text-xs text-background font-bold tracking-[0.2em] uppercase text-center border-t border-black/10 pt-4 mt-2">
                                Challenging the status quo
                            </p>
                        </div>

                        {/* Orbiting particles (decor) */}
                        <div className="absolute top-0 left-0 w-full h-full animate-spin-slow pointer-events-none">
                            <div className="absolute top-0 left-1/2 w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_var(--accent-color)]" />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-12 lg:gap-20">
                        {rightFeatures.map((feat, idx) => (
                            <div key={idx} className="flex items-center space-x-6 group">
                                <div className="feature-circle w-16 h-16 bg-white rounded-full flex items-center justify-center text-background text-2xl shadow-[0_0_20px_var(--accent-color-glow)] border-2 border-transparent group-hover:border-accent transition-all duration-300">
                                    {feat.icon}
                                </div>
                                <div className="text-left hidden sm:block">
                                    <p className="text-white font-bold group-hover:text-accent transition-colors duration-300">{feat.text}</p>
                                    <p className="text-text-dim text-xs uppercase tracking-widest mt-1">Advanced Trials</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeatureShowcase;
