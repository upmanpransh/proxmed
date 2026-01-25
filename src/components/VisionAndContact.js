import React from 'react';
import { FaPaperPlane, FaEnvelope, FaBuilding, FaUser } from 'react-icons/fa';

const VisionAndContact = () => {
    return (
        <div className="relative">
            {/* Future Vision Section */}
            <section id="vision" className="py-24 relative">
                <div className="container mx-auto px-6">
                    <div className="glass-morphism rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-white/10">
                        {/* Background Animation Element */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-accent/20 to-transparent blur-3xl opacity-40 animate-pulse-slow pointer-events-none" />

                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                            <div className="reveal">
                                <h2 className="text-4xl md:text-5xl font-bold mb-8 font-outfit leading-tight">
                                    The Future of <span className="text-accent">Proxmed</span>
                                </h2>
                                <p className="text-xl text-text-dim mb-8 leading-relaxed">
                                    Bringing the latest advancements in AI and computing to clinical trials and healthcare — accelerating research and enabling real-time patient triage.
                                </p>
                                <div className="flex items-center space-x-4 text-accent font-semibold tracking-wide uppercase text-sm">
                                    <span className="w-12 h-[1px] bg-accent"></span>
                                    <span>Shaping the Next Frontier</span>
                                </div>
                            </div>
                            <div className="reveal hidden lg:block">
                                {/* Abstract futuristic visual */}
                                <div className="relative w-full aspect-square">
                                    <div className="absolute inset-0 border-2 border-accent/20 rounded-full animate-spin [animation-duration:30s]" />
                                    <div className="absolute inset-[15%] border-2 border-white/5 rounded-full animate-reverse-spin [animation-duration:20s]" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-glow" />
                                        <div className="text-8xl text-accent opacity-20">AI</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 bg-surface/20">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16 reveal">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit">Get in Touch</h2>
                        <p className="text-text-dim text-lg">Let's discuss how Proxmed can accelerate your clinical research.</p>
                    </div>

                    <div className="glass-morphism p-8 md:p-12 rounded-[2.5rem] border border-white/10 reveal shadow-2xl">
                        <form className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="relative group">
                                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dim group-focus-within:text-accent transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full bg-background border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-accent transition-all"
                                    />
                                </div>
                                <div className="relative group">
                                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dim group-focus-within:text-accent transition-colors" />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full bg-background border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-accent transition-all"
                                    />
                                </div>
                                <div className="relative group">
                                    <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dim group-focus-within:text-accent transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="Organization"
                                        className="w-full bg-background border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-accent transition-all"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col space-y-6">
                                <textarea
                                    rows="5"
                                    placeholder="Tell us about your project..."
                                    className="w-full bg-background border border-white/10 rounded-2xl p-6 text-white focus:outline-none focus:border-accent transition-all resize-none h-full"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="w-full bg-accent hover:shadow-[0_0_20px_var(--accent-color-glow)] text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 transition-all duration-300 hover:-translate-y-1 group"
                                >
                                    <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    <span>Send Message</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VisionAndContact;
