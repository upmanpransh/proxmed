import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">P</span>
                            </div>
                            <span className="text-white font-bold text-2xl font-outfit">Proxmed</span>
                        </div>
                        <p className="text-text-dim text-lg mb-8 max-w-sm">
                            Challenging the Status Quo in Clinical Trials through AI and advanced computing.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-text-dim hover:text-accent transition-colors"><FaTwitter size={24} /></a>
                            <a href="#" className="text-text-dim hover:text-accent transition-colors"><FaLinkedin size={24} /></a>
                            <a href="#" className="text-text-dim hover:text-accent transition-colors"><FaGithub size={24} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-outfit uppercase tracking-widest text-sm">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#home" className="text-text-dim hover:text-accent transition-colors">Home</a></li>
                            <li><a href="#story" className="text-text-dim hover:text-accent transition-colors">Our Story</a></li>
                            <li><a href="#why" className="text-text-dim hover:text-accent transition-colors">Why Proxmed</a></li>
                            <li><a href="#services" className="text-text-dim hover:text-accent transition-colors">Services</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-outfit uppercase tracking-widest text-sm">Legal</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-text-dim hover:text-accent transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-text-dim hover:text-accent transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="text-text-dim hover:text-accent transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center text-text-dim text-sm">
                    <p>© {currentYear} Proxmed Inc. All rights reserved.</p>
                    <p className="mt-4 md:mt-0 flex items-center">
                        Built with <span className="text-accent mx-2 mt-[-2px]">♥</span> for clinical research.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
