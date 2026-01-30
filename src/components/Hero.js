import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Importing assets
import preview1 from '../assets/refined/preview_1.png';
import preview2 from '../assets/refined/preview_2.png';
import preview3 from '../assets/refined/preview_3.png';
import waveBg from '../assets/refined/wave_bg.png';

const Hero = () => {
    const heroRef = useRef(null);

    const images = [preview1, preview2, preview3];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Simple robust fade-in
            gsap.to('.hero-fade-in', {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.2
            });

            // Subtle parallax/float for cards
            gsap.to('.hero-card', {
                y: '-=10',
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                stagger: 0.2
            });

            // Slow background drift
            gsap.to('.particle-bg', {
                x: '-5%',
                duration: 30,
                repeat: -1,
                yoyo: true,
                ease: 'none'
            });
        }, heroRef);
        return () => ctx.revert();
    }, []);

    const bottomTabs = [
        "Clinical Solutions", "Deep Clinical AI", "Enterprise Platform", "AI Programs", "Impact", "Mobile App"
    ];

    return (
        <section
            id="home"
            ref={heroRef}
            className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-32 overflow-hidden bg-[#030711] z-10"
        >
            {/* Particle Wave Background Layer */}
            <div className="particle-bg absolute inset-0 -z-10 pointer-events-none opacity-40 scale-110">
                <img
                    src={waveBg}
                    alt=""
                    className="w-full h-full object-cover mix-blend-screen"
                />
                {/* Darker gradients to blend the wave edges */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#030711] via-transparent to-[#030711]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#030711] via-transparent to-[#030711]" />
            </div>

            <div className="container mx-auto px-6 relative z-20">
                {/* Headline Section */}
                <div className="hero-fade-in opacity-0 translate-y-8 text-center mb-16 max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-10 tracking-tight leading-[1.1] font-outfit">
                        A <span className="italic font-light">history</span> of shaping guidelines<br />
                        The <span className="italic font-light">future</span> of transformative care
                    </h1>

                    <button className="inline-flex items-center gap-5 text-slate-300 hover:text-white transition-all group">
                        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-all bg-white/5">
                            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-white border-b-8 border-b-transparent ml-1" />
                        </div>
                        <span className="text-xl font-medium tracking-tight">See how we enhance clinical decision-making</span>
                    </button>
                </div>

                {/* Triple Card Layout */}
                <div className="hero-fade-in opacity-0 translate-y-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-24 max-w-6xl mx-auto items-center">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className={`hero-card relative rounded-3xl overflow-hidden glass-card aspect-[4/5] shadow-2xl transition-all duration-700 bg-[#0b1120] border border-white/10 ${i === 1 ? 'md:-translate-y-12 z-20 md:scale-110 md:aspect-square border-accent/40' : 'opacity-60 grayscale hover:grayscale-0 hover:opacity-100'}`}
                        >
                            <img src={img} alt={`Medical Preview ${i + 1}`} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                        </div>
                    ))}
                </div>

                {/* Bottom Pill Links */}
                <div className="hero-fade-in opacity-0 translate-y-8 flex flex-wrap justify-center gap-4">
                    {bottomTabs.map((tab, i) => (
                        <button
                            key={i}
                            className="bg-white hover:bg-slate-200 text-black px-8 py-3 rounded-full text-[12px] font-extrabold uppercase tracking-widest transition-all hover:-translate-y-1 flex items-center gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                        >
                            <span>{tab}</span>
                            <span className="text-sm font-light">↘</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
