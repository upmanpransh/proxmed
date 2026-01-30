import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Intelligent Imaging",
            desc: "AI-driven imaging pipelines that automate data extraction and quality control in real-time.",
            icon: "🧬"
        },
        {
            title: "Predictive Analytics",
            desc: "Machine learning models that predict patient outcomes and optimize trial protocols.",
            icon: "📊"
        },
        {
            title: "Advanced Computing",
            desc: "High-performance computing infrastructure designed for large-scale medical datasets.",
            icon: "💻"
        }
    ];

    return (
        <section id="services" className="py-32 bg-[#030711] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Our <span className="text-gradient">Core Capabilities</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
                        We combine cutting-edge AI with deep clinical expertise to solve the hardest problems in medical research.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="glass-card p-10 rounded-3xl group relative overflow-hidden"
                        >
                            <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-300 inline-block">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed font-light group-hover:text-white/80 transition-colors">
                                {service.desc}
                            </p>

                            {/* Bottom Right Glow Decor */}
                            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default Services;
