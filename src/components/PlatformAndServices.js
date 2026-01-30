import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import serviceOutcomes from '../assets/refined/service_outcomes.png';
import serviceEfficiency from '../assets/refined/service_efficiency.png';
import serviceViability from '../assets/refined/service_viability.png';

gsap.registerPlugin(ScrollTrigger);

const PlatformAndServices = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.platform-card', {
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: '.platform-card',
                    start: 'top 85%',
                }
            });

            gsap.from('.service-card', {
                y: 40,
                opacity: 0,
                duration: 1,
                maxHeight: 0,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.service-grid',
                    start: 'top 80%',
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const services = [
        {
            title: "Expert Clinical Imaging",
            image: serviceOutcomes
        },
        {
            title: "Data Collection Portals",
            image: serviceEfficiency
        },
        {
            title: "Post-Processed results",
            image: serviceViability
        }
    ];

    return (
        <section ref={containerRef} className="bg-white py-24 overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Our Story / Motivation Platform Card */}
                <div className="platform-card bg-[#580a1d] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden mb-32 shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight font-outfit uppercase">
                                Our Story &<br />Motivation
                            </h2>
                            <p className="text-white/80 text-xl font-medium max-w-lg mb-0 leading-relaxed italic">
                                "After working within the clinical trial field, we noticed that there are lots of gaps within the process... This motivated us to use our knowledge in computing, software development, and clinical imaging, all accessible within a single platform."
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Sub-Card 1 */}
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 flex flex-col group cursor-pointer hover:bg-white/15 transition-all">
                                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Why Proxmed?</h3>
                                <p className="text-white/70 leading-relaxed font-light">
                                    Proxmed was set up in 2022 to leverage the latest advancements in AI to accelerate all aspects of clinical trials and optimize data collection.
                                </p>
                            </div>

                            {/* Sub-Card 2 */}
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col group cursor-pointer hover:bg-white/10 transition-all opacity-80">
                                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter text-accent-rose">Our Vision</h3>
                                <p className="text-white/60 leading-relaxed font-light">
                                    Bring the advancements in AI to the clinical trials world to accelerate research and ultimately triage patients in real-time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#030711] mb-6 tracking-tight font-outfit uppercase">
                        Core Services
                    </h2>
                </div>

                <div className="service-grid grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((item, i) => (
                        <div key={i} className="service-card group cursor-pointer relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-xl">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                            <div className="absolute bottom-0 left-0 p-10 w-full">
                                <h3 className="text-white text-3xl font-bold leading-tight tracking-tight mb-0 uppercase">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PlatformAndServices;
