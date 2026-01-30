import React from 'react';
import videoSource from '../assets/background/body.mp4';

const BackgroundVideo = () => {
    return (
        <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden pointer-events-none bg-[#030711]">
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/80 z-10" />

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60"
            >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default BackgroundVideo;
