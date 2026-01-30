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
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-16 tracking-tight font-outfit">
                    Our impact, quantified
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">

                    {/* Top Left: Hospitals */}
                    <div className="md:col-span-5 impact-card bg-gradient-to-br from-[#6d0e25] to-[#3a0814] rounded-[2.5rem] p-12 flex flex-col justify-end min-h-[320px] shadow-2xl border border-white/5">
                        <div className="space-y-2">
                            <span className="text-6xl md:text-7xl font-bold text-white tracking-tighter">2,500+</span>
                            <p className="text-2xl text-white/80 font-medium">hospitals</p>
                        </div>
                    </div>

                    {/* Top Middle: FDA */}
                    <div className="md:col-span-3 impact-card bg-[#0b1120] rounded-[2.5rem] p-12 flex flex-col justify-start relative overflow-hidden border border-white/5 shadow-xl">
                        <div className="relative z-10">
                            <span className="text-5xl font-bold text-white block mb-2">14 FDA</span>
                            <p className="text-xl text-slate-400">cleared modules</p>
                        </div>
                        {/* FDA Approved Stamp Effect */}
                        <div className="absolute -bottom-2 -right-2 transform rotate-[-15deg] opacity-20">
                            <div className="border-4 border-accent-rose text-accent-rose px-6 py-2 rounded-xl font-black text-4xl tracking-widest uppercase">
                                Approved
                            </div>
                        </div>
                    </div>

                    {/* Right: Daily Scans (Tall Card) */}
                    <div className="md:col-span-4 md:row-span-2 impact-card bg-[#0b1120] rounded-[2.5rem] p-10 flex flex-col items-center justify-between border border-white/5 shadow-2xl relative overflow-hidden">
                        <div className="w-full h-2/3 flex items-center justify-center p-4">
                            <img
                                src={impactAngiography}
                                alt="Vascular 3D Reconstruction"
                                className="h-full object-contain animate-float"
                            />
                        </div>
                        <div className="w-full text-center mt-8">
                            <span className="text-6xl md:text-7xl font-bold text-white tracking-tighter block mb-2">20k+</span>
                            <p className="text-xl text-slate-400">daily scans</p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>

                    {/* Bottom Left: Brain Scans Visualization */}
                    <div className="md:col-span-5 impact-card bg-[#0b1120] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-xl group">
                        <img
                            src={impactScans}
                            alt="Brain Scans Grid"
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                        />
                    </div>

                    {/* Bottom Middle: Publications */}
                    <div className="md:col-span-3 impact-card bg-gradient-to-br from-[#6d0e25] to-[#3a0814] rounded-[2.5rem] p-10 flex flex-col justify-center border border-white/5 shadow-xl">
                        <div className="text-center">
                            <span className="text-5xl font-bold text-white block mb-2">700+</span>
                            <p className="text-xl text-white/70">publications</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ImpactQuantified;
