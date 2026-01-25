import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaMicrochip, FaDatabase, FaShieldAlt, FaChartLine } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Details = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade in animations for sections
            gsap.utils.toArray('.reveal').forEach((el) => {
                gsap.from(el, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
            });

            // Stats counting animation
            gsap.utils.toArray('.stat-number').forEach((el) => {
                const val = parseInt(el.innerText);
                gsap.from(el, {
                    innerText: 0,
                    duration: 2,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%'
                    },
                    snap: { innerText: 1 },
                    onUpdate: function () {
                        el.innerHTML = Math.ceil(this.targets()[0].innerText);
                    }
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const stats = [
        { label: 'Founded', value: '2022', suffix: '' },
        { label: 'Optimization', value: '40', suffix: '%' },
        { label: 'Trial Efficiency', value: '2.5', suffix: 'x' },
        { label: 'Secure Portals', value: '100', suffix: '%' },
    ];

    const impactCards = [
        {
            icon: <FaDatabase className="text-3xl" />,
            title: "Optimised Pipelines",
            desc: "Streamlined data collection & processing pipelines for faster trial cycles."
        },
        {
            icon: <FaChartLine className="text-3xl" />,
            title: "Unified Platform",
            desc: "A single ecosystem for statistics, imaging data, and post-processed analytics."
        },
        {
            icon: <FaShieldAlt className="text-3xl" />,
            title: "Enhanced Accessibility",
            desc: "Secure, managed access to critical trial data across global teams."
        },
        {
            icon: <FaMicrochip className="text-3xl" />,
            title: "Clinical Excellence",
            desc: "Real-world clinical trial optimization leveraging advanced AI architectures."
        }
    ];

    return (
        <div ref={sectionRef}>
            {/* Our Story Section */}
            <section id="story" className="py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="reveal">
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-outfit">Our Story</h2>
                            <div className="space-y-6 text-text-dim text-lg leading-relaxed">
                                <p>
                                    After working within the clinical trial field, we noticed that there are many gaps in existing processes. These workflows can be automated and accelerated with a unified platform.
                                </p>
                                <p>
                                    This motivated us to combine our expertise in computing, software development, distributed systems, and clinical imaging into a single, accessible platform designed for modern clinical trials.
                                </p>
                            </div>
                        </div>

                        <div className="reveal grid grid-cols-2 gap-6">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="glass-morphism p-8 rounded-3xl border border-white/5 hover:border-accent/30 transition-colors group">
                                    <div className="text-4xl font-bold text-accent mb-2 font-outfit flex items-baseline">
                                        <span className="stat-number">{stat.value}</span>
                                        <span className="text-2xl ml-1">{stat.suffix}</span>
                                    </div>
                                    <div className="text-text-dim uppercase tracking-wider text-xs font-semibold group-hover:text-white transition-colors">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Proxmed Section */}
            <section id="why" className="py-24 bg-surface/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mb-20 reveal">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-outfit">Why Proxmed?</h2>
                        <p className="text-xl text-text-dim leading-relaxed">
                            Proxmed was created to leverage the latest advancements in AI and high-performance computing to accelerate every aspect of clinical trials — from data collection to image processing and analytics.
                        </p>
                    </div>

                    <div id="impact" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {impactCards.map((card, idx) => (
                            <div
                                key={idx}
                                className="reveal glass-morphism p-8 rounded-3xl border border-white/5 hover:border-accent/40 transition-all duration-500 group hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-outfit">{card.title}</h3>
                                <p className="text-text-dim text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                                    {card.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Details;
