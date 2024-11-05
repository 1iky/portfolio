import { useEffect, useRef, useState } from 'react'
import React from 'react';
import Animation from './Animation.jsx';
import './style.css';
import button from './assets/box.png';
import textbox from './assets/chatbox_white.png';

export default function App() {
  const handleClick = () => {
    console.log('clicked');
  };

 
  return (
    <>
      <div className="header">
        <div className="nav">
          <div className='name'>Lily So</div>
          <div className='links'>
            <button className='about' onClick={handleClick}>
              <img
                src={button}
                alt='button'
              />
              <span className="button-text">about</span>
            </button>
            <button className='projects' onClick={handleClick}>
              <img
                src={button}
                alt='button'
              />
              <span className="button-text">projects</span>
            </button>
          </div>
        </div>
      </div>
      <div className="background-container">
        <div className="background-section">
          <div className="background-animation">
            <div className="chatbox">
              <div className="chatbox-text">
              <img src={textbox} class="background-img" alt="textbox" />
                <span class="text">
                  <span>
                    <span>Hi! I'm Lily.</span>
                    <span>I'm a computer science student!</span>
                    <span>I'm a software engineer!</span>
                  </span>
                </span>
              </div>
              <Animation />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

