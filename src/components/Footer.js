import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#030711] border-t border-white/5 pt-32 pb-16 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-12 gap-16 mb-24">
                    <div className="md:col-span-5">
                        <div className="flex items-center space-x-3 mb-8 group">
                            <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 group-hover:border-accent/50 transition-colors bg-[#0b1120] p-1.5 font-bold">
                                <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-white font-bold text-3xl tracking-tight font-outfit">Proxmed</span>
                        </div>
                        <p className="text-slate-400 text-lg mb-10 max-w-md font-light leading-relaxed">
                            Pioneering the next generation of clinical research through advanced AI and intelligent imaging pipelines.
                        </p>
                        <div className="flex space-x-6">
                            {[
                                { icon: <FaTwitter />, url: "https://twitter.com/proxmed" },
                                { icon: <FaLinkedin />, url: "https://linkedin.com/company/proxmed" },
                                { icon: <FaGithub />, url: "https://github.com/proxmed" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-accent/50 transition-all text-xl"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2 md:col-start-8">
                        <h4 className="text-white font-bold mb-8 font-outfit uppercase tracking-[0.2em] text-[10px]">Solutions</h4>
                        <ul className="space-y-5">
                            <li><a href="#services" className="text-slate-400 hover:text-accent transition-colors text-[15px] font-light">Imaging Core</a></li>
                            <li><a href="#services" className="text-slate-400 hover:text-accent transition-colors text-[15px] font-light">Predictive Models</a></li>
                            <li><a href="#services" className="text-slate-400 hover:text-accent transition-colors text-[15px] font-light">Data Infrastructure</a></li>
                            <li><a href="#services" className="text-slate-400 hover:text-accent transition-colors text-[15px] font-light">Clinical AI</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-white font-bold mb-8 font-outfit uppercase tracking-[0.2em] text-[10px]">Company</h4>
                        <ul className="space-y-5">
                            <li><a href="#story" className="text-slate-400 hover:text-accent transition-colors text-[15px] font-light">Our Story</a></li>
                            <li><a href="#vision" className="text-slate-400 hover:text-accent transition-colors text-[15px] font-light">Future Vision</a></li>
                            <li><a href="#contact" className="text-slate-400 hover:text-accent transition-colors text-[15px] font-light">Careers</a></li>
                            <li><a href="#contact" className="text-slate-400 hover:text-accent transition-colors text-[15px] font-light">Press Kit</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center text-slate-500 text-[13px] font-medium tracking-tight">
                    <div className="flex flex-col md:row items-center gap-6">
                        <p>© {currentYear} Proxmed Inc. Built for the future of medicine.</p>
                        <div className="flex gap-8">
                            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
                            <div className="text-3xl font-black text-white group cursor-pointer inline-flex items-center">
                                PROXMED<span className="text-accent ml-1 transition-all group-hover:animate-pulse">.</span>
                            </div>
                        </div>
                    </div>
                    <p className="mt-8 md:mt-0 flex items-center bg-white/5 px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest text-slate-400 border border-white/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                        Network Status: Operational
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
