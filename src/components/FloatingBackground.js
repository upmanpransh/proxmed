import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FloatingBackground = () => {
    const bgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const blobs = gsap.utils.toArray('.bg-blob');

            blobs.forEach((blob, i) => {
                // Random movement for each blob
                gsap.to(blob, {
                    x: "random(-100, 100)",
                    y: "random(-100, 100)",
                    duration: `random(10, 20)`,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: i * 0.5
                });

                // Periodic scale change
                gsap.to(blob, {
                    scale: "random(0.8, 1.5)",
                    duration: `random(8, 15)`,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            });
        }, bgRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={bgRef} className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-background">
            {/* Top Right Blob */}
            <div className="bg-blob absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-accent/10 blur-[120px]" />

            {/* Middle Left Blob */}
            <div className="bg-blob absolute top-[40%] -left-[15%] w-[40vw] h-[40vw] rounded-full bg-accent/5 blur-[100px]" />

            {/* Bottom Right Blob */}
            <div className="bg-blob absolute -bottom-[10%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-accent/15 blur-[130px]" />

            {/* Bottom Left Blob (Extra glow for "down side") */}
            <div className="bg-blob absolute bottom-[5%] -left-[5%] w-[35vw] h-[35vw] rounded-full bg-accent/10 blur-[110px]" />

            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
    );
};

export default FloatingBackground;
