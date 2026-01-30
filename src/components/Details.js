import React from 'react';

const Details = () => {
    return (
        <section id="story" className="py-32 bg-[#030711] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Visual Side */}
                    <div className="relative order-2 lg:order-1">
                        <div className="glass-card aspect-square rounded-[40px] p-8 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />
                            <div className="relative h-full border border-white/10 rounded-[32px] flex items-center justify-center bg-[#0b1120]/50">
                                <span className="text-8xl opacity-20">🔬</span>
                                {/* Small floating cards for high-tech feel */}
                                <div className="absolute top-10 right-10 glass-card p-4 rounded-2xl animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                        <span className="text-xs font-mono text-slate-300 tracking-tighter">DATA_SYNC: ACTIVE</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-10 left-10 glass-card p-4 rounded-2xl animate-float" style={{ animationDelay: '2s' }}>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
                                        <span className="text-xs font-mono text-slate-300 tracking-tighter">AI_MODEL: v4.2.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative glow behind */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/20 blur-[100px] rounded-full" />
                    </div>

                    {/* Content Side */}
                    <div className="order-1 lg:order-2">
                        <div className="mb-8">
                            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Story</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
                                Challenging the <span className="text-gradient">Status Quo</span> for Patients Worldwide.
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
                                Proxmed was founded on a simple yet radical idea: that clinical trials are too slow, too expensive, and too inaccessible. By leveraging artificial intelligence and advanced computing, we're building the infrastructure for the next generation of medicine.
                            </p>

                            <div className="grid gap-6">
                                <div className="flex gap-5">
                                    <div className="w-12 h-12 shrink-0 rounded-2xl glass-card flex items-center justify-center text-accent text-xl font-bold">01</div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-1">Precision Data</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">Automated imaging pipelines ensure sub-millimeter accuracy in every data point collected.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-12 h-12 shrink-0 rounded-2xl glass-card flex items-center justify-center text-accent-secondary text-xl font-bold">02</div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-1">Patient-Centric AI</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">Reducing the burden on clinical sites while improving the experience for every trial participant.</p>
                                    </div>
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
