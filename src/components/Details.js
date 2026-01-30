import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Details = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.detail-text', {
                x: -50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            });

            gsap.from('.story-card', {
                scale: 0.9,
                opacity: 0,
                duration: 1.2,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="story" className="py-32 bg-[#030711] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Visual Side */}
                    <div className="relative order-2 lg:order-1">
                        <div className="story-card glass-morphism rounded-[3rem] p-10 min-h-[500px] flex flex-col justify-between border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full" />

                            <div className="relative z-10">
                                <span className="text-accent-rose font-black tracking-[0.3em] uppercase text-xs mb-6 block">Established 2022</span>
                                <h3 className="text-4xl font-bold text-white mb-6 uppercase tracking-tight">Our Motivation</h3>
                                <p className="text-slate-400 text-lg leading-relaxed italic">
                                    "After working within the clinical trial field, we noticed that there are lots of gaps within the process... This motivated us to start thinking and working on the ways we could use our knowledge and experience in computing, software development, distributed systems, and clinical imaging, all accessible within a single platform."
                                </p>
                            </div>

                            <div className="mt-12 grid grid-cols-2 gap-6 relative z-10">
                                <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                                    <div className="text-3xl font-bold text-white mb-2">2022</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Founding Year</div>
                                </div>
                                <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                                    <div className="text-3xl font-bold text-accent-rose mb-2">Unified</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Platform Access</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="order-1 lg:order-2 detail-text">
                        <span className="text-accent-rose font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Story</span>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight uppercase font-outfit">
                            Filling the gaps in <span className="text-accent-rose italic font-light">Clinical Trials</span>.
                        </h2>
                        <p className="text-slate-300 text-xl leading-relaxed mb-10 font-medium">
                            Proxmed was set up to leverage the latest advancements in computing and AI technology to accelerate all aspects of clinical trials. We bridge the gap between complex software development and clinical imaging.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-6 group cursor-default">
                                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-rose text-2xl group-hover:bg-accent-rose group-hover:text-white transition-all duration-500">
                                    <span>🧠</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-black text-xl mb-2 uppercase tracking-tight">AI & Computing Evolution</h4>
                                    <p className="text-slate-400 text-base leading-relaxed">Leveraging the latest advancements to automate and accelerate research processes.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 group cursor-default">
                                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-rose text-2xl group-hover:bg-accent-rose group-hover:text-white transition-all duration-500">
                                    <span>🌐</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-black text-xl mb-2 uppercase tracking-tight">Distributed Systems</h4>
                                    <p className="text-slate-400 text-base leading-relaxed">Ensuring distributed clinical imaging and software are accessible within a single platform.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;
