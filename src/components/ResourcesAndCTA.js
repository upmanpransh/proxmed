import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import waveBg from '../assets/refined/wave_bg.png';

gsap.registerPlugin(ScrollTrigger);

const ResourcesAndCTA = () => {
    const sectionRef = useRef(null);

    const resources = [
        {
            type: "Press release",
            title: "RapidAI Extends the Reach of Deep Clinical AI with Five New FDA Clearances",
            desc: "New clearances expand the Rapid Enterprise™ Platform, advancing radiology precision, and elevating neurology and vascular care through deep clinical AI.",
            id: 1
        },
        {
            type: "Press release",
            title: "Lumina 3D by RapidAI Named to TIME's List of the Best Inventions of 2025",
            desc: "This recognition highlights our commitment to advancing deep clinical AI that enhances physician performance and operational efficiency.",
            id: 2
        },
        {
            type: "Article",
            title: "Using AI to improve stroke outcomes in rural Missouri: \"We can save your life.\"",
            desc: "This story highlights how rural hospitals like TCMH in Missouri are using its AI-powered stroke software to improve local stroke outcomes.",
            id: 3
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.resource-card', {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.resource-grid',
                    start: 'top 80%',
                }
            });

            gsap.from('.final-cta-card', {
                scale: 0.95,
                opacity: 0,
                duration: 1.2,
                ease: 'expo.out',
                scrollTrigger: {
                    trigger: '.final-cta-card',
                    start: 'top 85%',
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-white py-24">
            <div className="container mx-auto px-6">

                {/* Resources Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#030711] tracking-tight font-outfit">
                        Get to know Rapid in the real world
                    </h2>
                    <button className="px-8 py-3 rounded-full border border-black text-black font-bold uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all flex items-center gap-2">
                        View all resources <span>↗</span>
                    </button>
                </div>

                {/* Resource Grid */}
                <div className="resource-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
                    {resources.map((res) => (
                        <div key={res.id} className="resource-card group cursor-pointer bg-white rounded-3xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                            {/* Card Image Area */}
                            <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 bg-[#030711]">
                                <img src={waveBg} alt="" className="w-full h-full object-cover mix-blend-screen opacity-40 group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white text-3xl font-black tracking-tighter uppercase italic">RapidAI</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>

                            {/* Card Content */}
                            <div className="px-4 pb-4">
                                <span className={`inline-block px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider mb-6 ${res.type === 'Article' ? 'bg-[#be123c] text-white' : 'bg-[#be123c] text-white'}`}>
                                    {res.type}
                                </span>
                                <div className="flex justify-between items-start gap-4 mb-4">
                                    <h3 className="text-xl md:text-2xl font-bold text-[#030711] leading-snug group-hover:text-[#be123c] transition-colors">
                                        {res.title}
                                    </h3>
                                    <div className="w-8 h-8 rounded-full border border-slate-200 flex flex-shrink-0 items-center justify-center text-slate-400 group-hover:border-[#be123c] group-hover:text-[#be123c] transition-all">
                                        <span className="text-sm">↗</span>
                                    </div>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                    {res.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final CTA Section */}
                <div className="final-cta-card relative bg-[#030711] rounded-[3rem] p-12 md:p-32 text-center overflow-hidden shadow-2xl">
                    {/* Background Wave */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                        <img src={waveBg} alt="" className="w-full h-full object-cover mix-blend-screen transform rotate-180 scale-150" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#030711] via-transparent to-[#030711]" />
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-7xl font-bold text-white mb-16 tracking-tight font-outfit leading-tight">
                            Ready to see the<br />difference for yourself?
                        </h2>
                        <button className="bg-[#be123c] hover:bg-[#a00e32] text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_30px_rgba(190,18,60,0.4)] flex items-center gap-3 mx-auto">
                            Request a Demo <span>↗</span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ResourcesAndCTA;
