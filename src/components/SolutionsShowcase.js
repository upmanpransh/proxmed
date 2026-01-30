import React, { useState } from 'react';
import solutionsMockup from '../assets/refined/solutions_mockup.png';

const SolutionsShowcase = () => {
    const [activeSolution, setActiveSolution] = useState(0);

    const solutions = [
        {
            title: "Neurovascular",
            desc: "Enhance stroke, trauma, and aneurysm care",
            id: "neuro"
        },
        {
            title: "Cardiac & Vascular",
            desc: "Advanced imaging for heart and vascular disease",
            id: "cardiac"
        },
        {
            title: "Radiology",
            desc: "AI-powered clinical decision support for radiologists",
            id: "radiology"
        },
        {
            title: "Life Sciences",
            desc: "Accelerating research and clinical trial outcomes",
            id: "life"
        }
    ];

    return (
        <section className="bg-[#f2f2f2] py-32 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left Side: Device Mockups */}
                    <div className="relative group perspective-1000">
                        <div className="relative z-10 animate-float">
                            <img
                                src={solutionsMockup}
                                alt="Medical AI on devices"
                                className="w-full h-auto drop-shadow-[0_35px_60px_rgba(0,0,0,0.15)] rounded-[2rem]"
                            />
                        </div>
                        {/* Decorative shadow/glow */}
                        <div className="absolute -bottom-10 left-12 right-12 h-20 bg-black/5 blur-[50px] rounded-full -z-10" />
                    </div>

                    {/* Right Side: Content */}
                    <div className="lg:pl-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#030711] mb-16 tracking-tight font-outfit">
                            Cutting-edge solutions
                        </h2>

                        <div className="space-y-10">
                            {solutions.map((sol, index) => (
                                <div
                                    key={sol.id}
                                    onMouseEnter={() => setActiveSolution(index)}
                                    className="group cursor-pointer"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${activeSolution === index ? 'text-[#be123c]' : 'text-[#9ca3af] group-hover:text-[#4b5563]'}`}>
                                            {sol.title}
                                        </h3>
                                        {activeSolution === index && (
                                            <div className="w-10 h-10 rounded-full border border-[#be123c] flex items-center justify-center text-[#be123c] animate-in fade-in zoom-in duration-300">
                                                <span className="text-xl">↗</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className={`overflow-hidden transition-all duration-500 ${activeSolution === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-[#4b5563] text-xl font-medium tracking-tight mt-2">
                                            {sol.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SolutionsShowcase;
