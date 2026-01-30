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
            title: "Enhance patient outcomes",
            image: serviceOutcomes
        },
        {
            title: "Drive operational efficiency",
            image: serviceEfficiency
        },
        {
            title: "Strengthen financial viability",
            image: serviceViability
        }
    ];

    return (
        <section ref={containerRef} className="bg-white py-24 overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Premier Platform Card */}
                <div className="platform-card bg-[#580a1d] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden mb-32 shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight font-outfit">
                                Premier platform,<br />meaningful performance
                            </h2>
                            <p className="text-white/80 text-xl font-medium max-w-lg mb-0 leading-relaxed">
                                The Rapid Enterprise™ Platform enables the cross-disciplinary deployment of deep clinical AI, bringing the value of clinically backed decision support to various healthcare professionals.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Sub-Card 1 */}
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 flex items-center justify-between group cursor-pointer hover:bg-white/15 transition-all">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Rapid Insights</h3>
                                    <p className="text-white/60">Custom performance analytics platform</p>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-all">
                                    <span className="text-xl">↗</span>
                                </div>
                            </div>

                            {/* Sub-Card 2 */}
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-all opacity-80">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Third-party integration</h3>
                                    <p className="text-white/60 text-sm">Interoperability framework connecting the healthcare ecosystem</p>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-all">
                                    <span className="text-xl">↗</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Background visual detail */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#be123c]/20 to-transparent pointer-events-none" />
                </div>

                {/* Optimized Service Lines Section */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#030711] mb-6 tracking-tight font-outfit">
                        Optimized service lines
                    </h2>
                    <p className="text-slate-500 text-xl font-medium max-w-3xl mx-auto">
                        Power your service lines with AI-driven precision—boost revenue, attract top talent, and enhance patient care.
                    </p>
                </div>

                <div className="service-grid grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((item, i) => (
                        <div key={i} className="service-card group cursor-pointer relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-xl">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-10 w-full">
                                <h3 className="text-white text-3xl font-bold leading-tight tracking-tight mb-0">
                                    {item.title.split(' ').map((word, idx) => (
                                        <React.Fragment key={idx}>
                                            {word}{' '}{idx === 1 && <br />}
                                        </React.Fragment>
                                    ))}
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
