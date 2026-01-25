import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
    const heroRef = useRef(null);
    const circleRef = useRef(null);
    const headlineRef = useRef(null);
    const subheadlineRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Headline Animation
            gsap.from(headlineRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                delay: 0.2
            });

            // Subheadline Animation
            gsap.from(subheadlineRef.current, {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                delay: 0.4
            });

            // CTA Animation
            gsap.from(ctaRef.current, {
                y: 20,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                delay: 0.6
            });

            // Background Circular Graphic Animation
            gsap.to(circleRef.current, {
                rotate: 360,
                duration: 20,
                repeat: -1,
                ease: 'none'
            });

            // Glowing pulse for the background
            gsap.to('.hero-glow', {
                opacity: 0.6,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px]" />

                {/* RapidAI Inspired Circular Graphic */}
                <div
                    ref={circleRef}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none"
                >
                    <div className="absolute inset-0 border-[1px] border-accent/30 rounded-full" />
                    <div className="absolute inset-[10%] border-[1px] border-accent/20 rounded-full" />
                    <div className="absolute inset-[25%] border-[1px] border-accent/15 rounded-full" />
                    <div className="absolute inset-[40%] border-[1px] border-accent/10 rounded-full" />

                    {/* Animated dots on circles */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full shadow-[0_0_15px_var(--accent-color)]" />
                    <div className="absolute bottom-1/4 right-[5%] w-2 h-2 bg-accent/50 rounded-full" />
                    <div className="absolute top-1/3 left-[2%] w-2 h-2 bg-accent/30 rounded-full" />
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <div
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-morphism mb-8 border border-accent/20 animate-pulse-slow"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        <span className="text-xs font-semibold tracking-widest uppercase text-accent">Pioneering AI in Clinical Trials</span>
                    </div>

                    <h1
                        ref={headlineRef}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-outfit"
                    >
                        Proxmed — Challenging the <span className="text-accent underline decoration-accent/30 underline-offset-8">Status Quo</span> in Clinical Trials
                    </h1>

                    <p
                        ref={subheadlineRef}
                        className="text-xl md:text-2xl text-text-dim mb-10 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Accelerating clinical trials using AI, advanced computing, and intelligent imaging pipelines.
                    </p>

                    <div
                        ref={ctaRef}
                        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                    >
                        <a
                            href="#services"
                            className="px-8 py-4 bg-accent hover:shadow-[0_0_30px_var(--accent-color-glow)] text-white rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto text-lg"
                        >
                            Explore Platform
                        </a>
                        <a
                            href="#story"
                            className="px-8 py-4 glass-morphism border-white/20 hover:border-accent/50 text-white rounded-full font-bold transition-all duration-300 w-full sm:w-auto text-lg"
                        >
                            Our Story
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-accent" />
            </div>
        </section>
    );
};

export default Hero;
