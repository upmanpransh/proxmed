import React from 'react';
import videoSource from '../assets/background/body.mp4';

const BackgroundVideo = () => {
    return (
        <div className="absolute inset-0 w-full h-full -z-20 overflow-hidden pointer-events-none bg-[#0a0a0a]">
            {/* 80% Black Overlay (User updated to 80%) */}
            <div className="absolute inset-0 bg-black/90 z-10" />

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default BackgroundVideo;
