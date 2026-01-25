import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaPalette, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const Navbar = () => {
    const { currentTheme, setCurrentTheme, themes } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isPaletteOpen, setIsPaletteOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Our Story', href: '#story' },
        { name: 'Why Proxmed', href: '#why' },
        { name: 'Services', href: '#services' },
        { name: 'Impact', href: '#impact' },
        { name: 'Future Vision', href: '#vision' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-morphism py-3' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="w-10 h-10 rounded-lg" />
                    <span className="text-white font-bold text-2xl tracking-tight font-outfit">Proxmed</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-text-dim hover:text-accent transition-colors duration-200 text-sm font-medium nav-link-underline"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Right Side Actions (Desktop) */}
                <div className="hidden lg:flex items-center space-x-6">
                    {/* Palette Selector */}
                    <div className="relative">
                        <button
                            onClick={() => setIsPaletteOpen(!isPaletteOpen)}
                            className="p-2 text-text-dim hover:text-accent transition-colors"
                        >
                            <FaPalette size={22} className="hover:rotate-12 transition-transform" />
                        </button>
                        {isPaletteOpen && (
                            <div className="absolute right-0 mt-4 p-4 bg-background/90 border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex space-x-4 backdrop-blur-xl animate-in fade-in zoom-in duration-200 z-50">
                                {Object.keys(themes).map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => {
                                            setCurrentTheme(t);
                                            setIsPaletteOpen(false);
                                        }}
                                        className={`w-8 h-8 rounded-full border-2 transition-all duration-300 hover:scale-125 hover:shadow-[0_0_15px_var(--accent-color)] ${currentTheme === t ? 'border-white scale-110 shadow-[0_0_10px_var(--accent-color)]' : 'border-transparent'}`}
                                        style={{ backgroundColor: themes[t].color }}
                                        title={themes[t].name}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    <a
                        href="#contact"
                        className="bg-accent hover:shadow-[0_0_20px_var(--accent-color-glow)] text-white px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:-translate-y-1 block shadow-lg"
                    >
                        Get in Touch
                    </a>
                </div>

                {/* Mobile Menu & Palette Toggle */}
                <div className="lg:hidden flex items-center space-x-3">
                    <div className="relative">
                        <button
                            onClick={() => setIsPaletteOpen(!isPaletteOpen)}
                            className="p-2 text-text-dim hover:text-accent transition-colors"
                        >
                            <FaPalette size={22} />
                        </button>
                        {isPaletteOpen && (
                            <div className="absolute right-0 mt-4 p-4 bg-background/95 border border-white/10 rounded-2xl shadow-2xl flex space-x-3 backdrop-blur-xl animate-in fade-in zoom-in duration-200 z-50">
                                {Object.keys(themes).map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => {
                                            setCurrentTheme(t);
                                            setIsPaletteOpen(false);
                                        }}
                                        className={`w-7 h-7 rounded-full border-2 transition-all ${currentTheme === t ? 'border-white scale-110' : 'border-transparent'}`}
                                        style={{ backgroundColor: themes[t].color }}
                                        title={themes[t].name}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
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
                <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-white/10 p-6 animate-fade-in">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-text-dim hover:text-accent text-lg font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="bg-accent text-white px-6 py-3 rounded-xl text-center font-semibold transition-all"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
