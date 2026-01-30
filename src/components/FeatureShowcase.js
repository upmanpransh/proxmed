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
                    duration: `random(3, 5)`,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: i * 0.3
                });
            });

            // Pulse animation for the central hub glow
            gsap.to('.hub-glow', {
                opacity: 0.8,
                scale: 1.15,
                duration: 3,
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
        <section ref={sectionRef} className="py-40 bg-[#030711] relative overflow-hidden flex items-center justify-center">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/20 via-transparent to-transparent rounded-full blur-3xl" />
                <div className="absolute w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:60px_60px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-40">

                    {/* Left Column */}
                    <div className="flex flex-col gap-16 lg:gap-24">
                        {leftFeatures.map((feat, idx) => (
                            <div key={idx} className="flex items-center space-x-8 group">
                                <div className="text-right hidden sm:block">
                                    <p className="text-white font-bold group-hover:text-accent transition-colors duration-300 text-lg">{feat.text}</p>
                                    <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mt-1 font-bold">Proxmed Infrastructure</p>
                                </div>
                                <div className="feature-circle w-20 h-20 bg-[#0b1120] text-accent glass-card rounded-full flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(99,102,241,0.1)] group-hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] transition-all duration-500 border border-white/5 group-hover:border-accent/50">
                                    {feat.icon}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Central Hub */}
                    <div ref={hubRef} className="relative group">
                        {/* Glow Behind */}
                        <div className="hub-glow absolute inset-0 bg-accent/20 rounded-full blur-3xl -z-10 group-hover:bg-accent/30 transition-all duration-500" />

                        <div className="w-72 h-72 md:w-[400px] md:h-[400px] glass-card rounded-full flex flex-col items-center justify-center p-12 shadow-[0_0_60px_rgba(0,0,0,0.5)] border border-white/10 group-hover:border-accent/20 transition-all duration-700 bg-[#030711]/50 backdrop-blur-2xl">
                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl overflow-hidden mb-8 border border-white/5 p-4 bg-[#0b1120]">
                                <img src={logo} alt="Proxmed Hub" className="w-full h-full object-contain" />
                            </div>
                            <div className="text-center pt-8 border-t border-white/5">
                                <p className="text-[10px] md:text-xs text-slate-400 font-bold tracking-[0.3em] uppercase mb-2">Central Intelligence</p>
                                <p className="text-lg md:text-xl text-white font-bold tracking-tight">Proxmed Ecosystem</p>
                            </div>
                        </div>

                        {/* Orbiting particles */}
                        <div className="absolute top-0 left-0 w-full h-full animate-spin-slow pointer-events-none">
                            <div className="absolute top-0 left-1/2 w-3 h-3 bg-accent rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full animate-spin-slow pointer-events-none [animation-duration:15s] [animation-direction:reverse]">
                            <div className="absolute bottom-0 right-[20%] w-2 h-2 bg-accent-secondary rounded-full shadow-[0_0_15px_rgba(14,165,233,0.8)]" />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-16 lg:gap-24">
                        {rightFeatures.map((feat, idx) => (
                            <div key={idx} className="flex items-center space-x-8 group">
                                <div className="feature-circle w-20 h-20 bg-[#0b1120] text-accent-secondary glass-card rounded-full flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(14,165,233,0.1)] group-hover:shadow-[0_0_40px_rgba(14,165,233,0.3)] transition-all duration-500 border border-white/5 group-hover:border-accent-secondary/50">
                                    {feat.icon}
                                </div>
                                <div className="text-left hidden sm:block">
                                    <p className="text-white font-bold group-hover:text-accent-secondary transition-colors duration-300 text-lg">{feat.text}</p>
                                    <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mt-1 font-bold">Clinical Precision</p>
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
