import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
            });
        };

        const handleHover = () => {
            gsap.to(follower, {
                scale: 2.5,
                backgroundColor: 'rgba(6, 182, 212, 0.2)', // cyan-500/20
                duration: 0.3,
            });
        };

        const handleUnhover = () => {
            gsap.to(follower, {
                scale: 1,
                backgroundColor: 'rgba(6, 182, 212, 0.1)',
                duration: 0.3,
            });
        };

        window.addEventListener('mousemove', moveCursor);

        const interactiveElements = document.querySelectorAll('a, button, .interactive');
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleHover);
            el.addEventListener('mouseleave', handleUnhover);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleHover);
                el.removeEventListener('mouseleave', handleUnhover);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-10 h-10 border border-accent/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 bg-accent/5 backdrop-blur-[2px]"
            />
        </>
    );
};

export default CustomCursor;
