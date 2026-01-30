import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import impactAngiography from '../assets/refined/impact_angiography.png';
import impactScans from '../assets/refined/impact_scans.png';
import waveBg from '../assets/refined/wave_bg.png';

const ImpactQuantified = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.impact-card', {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#030711] py-32 relative overflow-hidden">
            {/* Background Particle Wave Integration */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 transform -scale-x-100">
                <img src={waveBg} alt="" className="w-full h-full object-cover mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030711] via-transparent to-[#030711]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight font-outfit">
                            Our impact, quantified
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl">
                            We help ongoing trials optimize their data collection and processing pipelines for faster, better research.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">

                    {/* Top Left: Creation Year */}
                    <div className="md:col-span-5 impact-card bg-gradient-to-br from-[#6d0e25] to-[#3a0814] rounded-[2.5rem] p-12 flex flex-col justify-end min-h-[320px] shadow-2xl border border-white/5">
                        <div className="space-y-2">
                            <span className="text-6xl md:text-7xl font-bold text-white tracking-tighter">Est. 2022</span>
                            <p className="text-2xl text-white/80 font-medium italic">Founded to leverage AI in trials</p>
                        </div>
                    </div>

                    {/* Top Middle: Single Platform */}
                    <div className="md:col-span-3 impact-card bg-[#0b1120] rounded-[2.5rem] p-12 flex flex-col justify-start relative overflow-hidden border border-white/5 shadow-xl">
                        <div className="relative z-10">
                            <span className="text-4xl font-bold text-white block mb-2 leading-tight">Unified Platform</span>
                            <p className="text-lg text-slate-400">All statistics and imaging in one secure place</p>
                        </div>
                        <div className="absolute -bottom-2 -right-2 transform rotate-[-15deg] opacity-20">
                            <div className="border-4 border-accent-rose text-accent-rose px-6 py-2 rounded-xl font-black text-2xl tracking-widest uppercase">
                                Optimized
                            </div>
                        </div>
                    </div>

                    {/* Right: Real-time Triage (Tall Card) */}
                    <div className="md:col-span-4 md:row-span-2 impact-card bg-[#0b1120] rounded-[2.5rem] p-10 flex flex-col items-center justify-between border border-white/5 shadow-2xl relative overflow-hidden">
                        <div className="w-full h-2/3 flex items-center justify-center p-4">
                            <img
                                src={impactAngiography}
                                alt="Vascular 3D Reconstruction"
                                className="h-full object-contain animate-float"
                            />
                        </div>
                        <div className="w-full text-center mt-8">
                            <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter block mb-2">Real-time</span>
                            <p className="text-lg text-slate-400 italic">Advanced triage in healthcare</p>
                        </div>
                    </div>

                    {/* Bottom Left: Data Pipelines */}
                    <div className="md:col-span-3 impact-card bg-gradient-to-br from-[#6d0e25] to-[#3a0814] rounded-[2.5rem] p-10 flex flex-col justify-center border border-white/5 shadow-xl">
                        <div className="text-center">
                            <span className="text-5xl font-bold text-white block mb-2">Optimized</span>
                            <p className="text-lg text-white/70">Data collection pipelines</p>
                        </div>
                    </div>

                    {/* Bottom Right: Imaging Visualization */}
                    <div className="md:col-span-5 impact-card bg-[#0b1120] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-xl group">
                        <img
                            src={impactScans}
                            alt="Brain Scans Grid"
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ImpactQuantified;
