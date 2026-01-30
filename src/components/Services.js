import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const sectionRef = useRef(null);

    const serviceList = [
        {
            title: "Clinical Trial Imaging",
            desc: "High-precision processing and analysis of imaging data for ongoing clinical trials.",
            icon: "🔬",
            stat: "Optimized pipelines"
        },
        {
            title: "Data Collection",
            desc: "Streamlined collection of clinical data, ensuring sub-millimeter accuracy and integrity.",
            icon: "📊",
            stat: "Accelerated research"
        },
        {
            title: "Managed Access Portal",
            desc: "Organize datasets for existing trials and create secure gateways for collaboration.",
            icon: "🔒",
            stat: "Unified access"
        },
        {
            title: "Image Processing",
            desc: "Automated generation of relevant clinical statistics through advanced compute models.",
            icon: "⚙️",
            stat: "Real-time results"
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.service-header', {
                y: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            });

            gsap.from('.service-item', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.service-grid-real',
                    start: 'top 80%',
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="services" className="py-32 bg-[#0b1120] relative">
            <div className="container mx-auto px-6">
                <div className="service-header mb-20 text-center">
                    <span className="text-accent-rose font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Impact</span>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
                        Empowering Research
                    </h2>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">
                        Proxmed helps ongoing trials optimize their data collection and processing pipelines for faster, more accurate discoveries.
                    </p>
                </div>

                <div className="service-grid-real grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {serviceList.map((service, i) => (
                        <div key={i} className="service-item bg-white/5 border border-white/5 rounded-[2rem] p-8 hover:bg-white/[0.08] hover:border-accent-rose/30 transition-all duration-500 group">
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500 block">{service.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{service.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">{service.desc}</p>
                            <div className="pt-6 border-t border-white/5 text-accent-rose font-black text-[10px] uppercase tracking-widest">
                                {service.stat}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-br from-[#6d0e25] to-[#3a0814] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter">The Future of Proxmed</h3>
                        <p className="text-white/80 text-xl font-medium max-w-4xl mx-auto italic mb-0">
                            "Bring the advancements in AI and computing to the clinical trials and healthcare world to accelerate research and ultimately triage patients in real-time."
                        </p>
                    </div>
                    {/* Background visual */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--accent-rose),_transparent)] blur-[100px]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
