import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './style.css';

function Animation() {
    return (
        <div class="animation">
            <DotLottieReact
                src="https://lottie.host/4ced090a-8f69-44dd-899b-99f26d7642d6/hO1R5ulBWy.json"
                loop
                autoplay
            />
        </div>
    );
}
export default Animation;