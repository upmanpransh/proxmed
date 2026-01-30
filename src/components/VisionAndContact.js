import React from 'react';
import { FaPaperPlane, FaEnvelope, FaBuilding } from 'react-icons/fa';

const VisionAndContact = () => {
    return (
        <div className="bg-[#030711] relative overflow-hidden">
            {/* Future Vision Section */}
            <section id="vision" className="py-40 relative">
                <div className="container mx-auto px-6">
                    <div className="glass-card rounded-[4rem] p-12 md:p-24 relative overflow-hidden border border-white/5">
                        {/* Background Decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-accent/10 to-transparent blur-3xl pointer-events-none" />

                        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <span className="text-accent-rose font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Our Vision</span>
                                <h2 className="text-5xl md:text-6xl font-bold text-white mb-10 tracking-tight leading-tight uppercase font-outfit">
                                    Accelerating the <br /><span className="text-accent-rose italic font-light">Future of Research</span>.
                                </h2>
                                <p className="text-xl text-slate-400 mb-12 leading-relaxed font-light">
                                    Bring the advancements in AI and computing to the clinical trials and healthcare world to accelerate research and ultimately triage patients in real-time. Proxmed is where human expertise meets machine intelligence.
                                </p>
                                <div className="flex items-center space-x-6">
                                    <div className="w-16 h-[1px] bg-accent-rose"></div>
                                    <span className="text-white font-bold tracking-widest uppercase text-xs font-outfit">Real-time Patient Triaging</span>
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                {/* Abstract futuristic visual */}
                                <div className="relative w-full aspect-square">
                                    <div className="absolute inset-0 border border-white/5 rounded-full animate-spin-slow [animation-duration:60s]" />
                                    <div className="absolute inset-[10%] border border-accent/10 rounded-full animate-spin-slow [animation-duration:40s] [animation-direction:reverse]" />
                                    <div className="absolute inset-[25%] border border-white/5 rounded-full animate-spin-slow [animation-duration:20s]" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" />
                                        <div className="text-9xl font-bold text-white/5 select-none font-outfit">AI</div>
                                    </div>

                                    {/* Data nodes */}
                                    <div className="absolute top-[10%] left-1/2 w-4 h-4 bg-accent rounded-full pulse-glow" />
                                    <div className="absolute bottom-[20%] right-[10%] w-3 h-3 bg-accent-secondary rounded-full pulse-glow" />
                                    <div className="absolute bottom-[15%] left-[15%] w-2 h-2 bg-white/50 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 pb-40">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-5 gap-16 items-start">
                        <div className="lg:col-span-2">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight font-outfit">
                                Start your <span className="text-gradient">journey</span> with us.
                            </h2>
                            <p className="text-slate-400 text-lg mb-10 font-bold leading-relaxed italic">
                                Ready to accelerate your clinical research? Our team of experts is here to help you deploy the future of clinical AI for optimized data pipelines.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-accent text-xl group-hover:bg-accent group-hover:text-white transition-all">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Email Us</p>
                                        <p className="text-white font-bold">hello@proxmed.ai</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-accent-secondary text-xl group-hover:bg-accent-secondary group-hover:text-white transition-all">
                                        <FaBuilding />
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Visit Us</p>
                                        <p className="text-white font-bold">San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                            <div className="glass-card p-10 md:p-16 rounded-[3rem] border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -z-10 group-hover:bg-accent/10 transition-all" />

                                <form className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">Your Name</label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className="w-full bg-[#0b1120]/50 border border-white/5 rounded-2xl py-5 px-6 text-white focus:outline-none focus:border-accent/50 transition-all font-light"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">Email Address</label>
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    placeholder="john@company.com"
                                                    className="w-full bg-[#0b1120]/50 border border-white/5 rounded-2xl py-5 px-6 text-white focus:outline-none focus:border-accent/50 transition-all font-light"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">Your Message</label>
                                        <textarea
                                            rows="5"
                                            placeholder="How can we help you?"
                                            className="w-full bg-[#0b1120]/50 border border-white/5 rounded-2xl p-8 text-white focus:outline-none focus:border-accent/50 transition-all resize-none font-light"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#be123c] hover:bg-[#ff1e56] text-white py-5 rounded-[1.5rem] font-black uppercase tracking-[0.2em] flex items-center justify-center space-x-4 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(190,18,60,0.4)] group"
                                    >
                                        <span>Send Inquiry</span>
                                        <FaPaperPlane size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VisionAndContact;
