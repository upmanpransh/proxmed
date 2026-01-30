import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Enterprise Platform', href: '#platform' },
        { name: 'Clinical Solutions', href: '#solutions' },
        { name: 'Impact by Role', href: '#impact' },
        { name: 'Customer Success', href: '#success' },
        { name: 'About Us', href: '#about' },
    ];

    const topLinks = [
        { name: 'RapidU Login', href: '#' },
        { name: 'Customer Support', href: '#' },
        { name: 'Contact Us', href: '#' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#030711]/90 backdrop-blur-xl border-b border-white/5 py-2' : 'bg-transparent py-4'}`}>
            {/* Top Menu Bar (Desktop) */}
            <div className={`hidden lg:block border-b border-white/5 transition-all duration-500 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100 pb-2 mb-4'}`}>
                <div className="container mx-auto px-6 flex justify-end space-x-6">
                    {topLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-[11px] text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 uppercase tracking-wider font-bold">
                            {link.name}
                        </a>
                    ))}
                    <button className="text-[11px] text-slate-400 hover:text-white transition-colors uppercase tracking-wider font-bold">Search</button>
                </div>
            </div>

            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3 group">
                    <span className="text-white font-bold text-2xl tracking-tight font-outfit uppercase">Proxmed</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-200 hover:text-white transition-colors duration-200 text-[13px] font-bold tracking-tight"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="hidden lg:flex items-center">
                    <a
                        href="#contact"
                        className="bg-[#be123c] hover:bg-[#9f1239] text-white px-6 py-2.5 rounded-full text-[12px] font-bold transition-all duration-300 uppercase tracking-wider flex items-center gap-2"
                    >
                        Request a Demo
                        <span className="text-lg leading-none mt-[-2px]">↗</span>
                    </a>
                </div>

                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
                    >
                        {isMobileMenuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-[#030711]/95 border-b border-white/10 p-6 animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col items-center justify-center space-y-8 h-full">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white text-2xl font-bold tracking-tight hover:text-accent transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex flex-col items-center gap-4 pt-8 border-t border-white/10 w-full">
                            {topLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-slate-400 text-sm font-bold uppercase tracking-widest"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <a
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="bg-[#be123c] text-white px-8 py-4 rounded-full text-lg font-bold uppercase tracking-wider mt-8"
                        >
                            Request a Demo
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
