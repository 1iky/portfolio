import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './index.css';

function Animation() {
    return (
        <div class="animation">
        <DotLottieReact
            src="https://lottie.host/4ced090a-8f69-44dd-899b-99f26d7642d6/hO1R5ulBWy.json"
            loop
            autoplay
            style={{ 
                width: '300px', 
                height: '1/1', 
                objectFit: 'contain'
            }}
        />
        </div>
    );
}
export default Animation;