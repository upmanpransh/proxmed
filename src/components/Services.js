import React from 'react';
import { FaCloudUploadAlt, FaDatabase, FaLock, FaMicroscope } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaCloudUploadAlt />,
            title: "Clinical Trial Imaging & Data Collection",
            desc: "Robust, scalable systems for harvesting and centralising multi-modal clinical trial data."
        },
        {
            icon: <FaDatabase />,
            title: "Organised Dataset Management",
            desc: "Comprehensive tools for cleaning, tagging, and indexing large-scale medical datasets."
        },
        {
            icon: <FaLock />,
            title: "Secure Managed Access Portals",
            desc: "Granular control and audit-ready data sharing environments for researcher collaboration."
        },
        {
            icon: <FaMicroscope />,
            title: "Advanced Image Processing",
            desc: "Automated quantification and statistical generation using state-of-the-art AI models."
        }
    ];

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-20 reveal">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit">Our Services</h2>
                    <p className="text-text-dim max-w-2xl mx-auto text-lg">
                        Empowering research through specialized infrastructure and intelligent automation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="group p-10 rounded-[2.5rem] glass-morphism border border-white/5 hover:border-accent/30 transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Hover Background Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                                <div className="w-20 h-20 shrink-0 bg-surface-light rounded-3xl flex items-center justify-center text-4xl text-accent shadow-xl group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                    {service.icon}
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl font-bold mb-4 font-outfit group-hover:text-accent transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-text-dim text-lg leading-relaxed group-hover:text-white/80 transition-colors">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Right Glow Decor */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
