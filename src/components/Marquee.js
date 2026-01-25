import React from 'react';

const Marquee = ({ text, speed = 20 }) => {
    return (
        <div className="relative flex overflow-x-hidden glass-morphism border-y border-white/5 py-4 select-none">
            <div className="animate-marquee whitespace-nowrap flex items-center">
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="text-3xl md:text-5xl font-bold font-outfit text-white/10 mx-8 uppercase tracking-[0.2em]">
                        {text} <span className="text-accent/20 mx-4">•</span>
                    </span>
                ))}
            </div>

            <div className="absolute top-4 animate-marquee2 whitespace-nowrap flex items-center">
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="text-3xl md:text-5xl font-bold font-outfit text-white/10 mx-8 uppercase tracking-[0.2em]">
                        {text} <span className="text-accent/20 mx-4">•</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
