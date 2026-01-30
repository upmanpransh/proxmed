import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import waveBg from '../assets/refined/wave_bg.png';

gsap.registerPlugin(ScrollTrigger);

const ResourcesAndCTA = () => {
    const sectionRef = useRef(null);

    const resources = [
        {
            type: "Clinical Focus",
            title: "Optimizing Data Collection for Ongoing Trials",
            desc: "Helping research teams automate datasets and accelerate clinical imaging workflows.",
            id: 1
        },
        {
            type: "Innovation",
            title: "Leveraging AI for Accelerated Research",
            desc: "Using distributed systems and software expertise to triage patients in real-time.",
            id: 2
        },
        {
            type: "Technology",
            title: "Integrating Distributed Systems in Healthcare",
            desc: "A single, managed-access portal for imaging data and post-processed statistics.",
            id: 3
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Remove opacity animation to prevent "stuck" states
            gsap.from('.resource-card', {
                y: 30,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.resource-grid',
                    start: 'top 90%',
                }
            });

            gsap.from('.final-cta-card', {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.final-cta-card',
                    start: 'top 90%',
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-white py-32 relative z-[20] block">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-6">
                    <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase font-outfit">
                        Insights & Innovations
                    </h2>
                    <button className="px-10 py-4 rounded-xl border-2 border-black/5 text-black font-black uppercase text-[11px] tracking-[0.25em] hover:bg-black hover:text-white transition-all flex items-center gap-3">
                        View all resources <span className="text-lg">↗</span>
                    </button>
                </div>

                {/* Resource Grid */}
                <div className="resource-grid grid grid-cols-1 md:grid-cols-3 gap-12 mb-48">
                    {resources.map((res) => (
                        <div
                            key={res.id}
                            style={{ opacity: 1, visibility: 'visible' }}
                            className="resource-card group bg-white rounded-[2.5rem] p-8 shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-black/[0.03] hover:shadow-[0_60px_120px_rgba(0,0,0,0.15)] transition-all duration-700 hover:-translate-y-3 flex flex-col h-full opacity-100"
                        >
                            {/* Card Image Area */}
                            <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-10 bg-black flex-shrink-0 shadow-inner">
                                <img
                                    src={waveBg}
                                    alt=""
                                    className="w-full h-full object-cover mix-blend-screen opacity-60 group-hover:scale-110 transition-transform duration-1000 grayscale-[0.5] group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white text-4xl font-black tracking-tighter uppercase italic drop-shadow-2xl">PROXMED</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>

                            {/* Card Content */}
                            <div className="flex flex-col flex-grow">
                                <div className="mb-8">
                                    <span className="inline-block px-5 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] bg-[#be123c] text-white shadow-xl shadow-rose-900/40">
                                        {res.type}
                                    </span>
                                </div>

                                <div className="flex justify-between items-start gap-6 mb-6">
                                    <h3 className="text-2xl md:text-3xl font-black text-black leading-tight group-hover:text-[#be123c] transition-colors duration-300 uppercase tracking-tighter">
                                        {res.title}
                                    </h3>
                                    <div className="w-12 h-12 rounded-2xl border-2 border-black/5 flex flex-shrink-0 items-center justify-center text-black/20 group-hover:border-[#be123c] group-hover:text-[#be123c] group-hover:bg-rose-50 transition-all duration-500 transform group-hover:rotate-12">
                                        <span className="text-xl font-bold">↗</span>
                                    </div>
                                </div>

                                <p className="text-slate-600 text-base leading-relaxed font-bold mt-auto opacity-80">
                                    {res.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final CTA Section */}
                <div className="final-cta-card relative bg-black rounded-[4rem] p-20 md:p-32 text-center overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.4)]">
                    {/* Background Wave */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
                        <img src={waveBg} alt="" className="w-full h-full object-cover mix-blend-screen transform rotate-180 scale-125 hover:scale-150 transition-transform duration-[20s]" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-5xl md:text-8xl font-black text-white mb-20 tracking-tighter font-outfit leading-[1.0] uppercase">
                            Ready to accelerate<br />clinical research?
                        </h2>
                        <button className="bg-[#be123c] hover:bg-[#ff1e56] text-white px-16 py-8 rounded-[2rem] text-sm font-black uppercase tracking-[0.3em] transition-all hover:scale-105 shadow-[0_20px_60px_rgba(190,18,60,0.6)] flex items-center gap-6 mx-auto group">
                            Get Linked With Us <span className="text-2xl group-hover:translate-x-2 transition-transform">↗</span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ResourcesAndCTA;
