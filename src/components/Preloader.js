// Preloader.js
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import '../assets/css/preloader.css';
const Preloader = () => {
    return (
        <div className="preloader">
            <div className="animation-container">
                <DotLottieReact
                    src="/animations/animation.lottie"
                    loop
                    autoplay
                />
            </div>
        </div>
    );
};

export default Preloader;
