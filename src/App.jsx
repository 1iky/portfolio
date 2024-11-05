import { useEffect, useRef, useState } from 'react'
import React from 'react';
import Animation from './Animation.jsx';
import './style.css';
import button from './assets/box.png';
import textbox from './assets/chatbox_white.png';
import lily from './assets/lily.png';
import contacts from './assets/contacts.png';
import caret from './assets/caret-right.png';
import envelope from './assets/envelope.png';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';

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
          <div className="contact-container">
            <img src={caret} className="caret" alt="caret" />
            <button className="contact-button button1" onClick={handleClick}></button>
            <button className="contact-button button2" onClick={handleClick}></button>
            <button className="contact-button button3" onClick={handleClick}></button>
          </div>
          <div className="about-content"> 
            <h2>About Me</h2>
            <div className='about-container'>
              <img src={lily} className='about-item' alt="Picture of Lily" />
              <div className='about-item'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni atque ipsam, nemo error earum eius nostrum accusamus nisi enim est dolores eos odio perferendis, possimus et dolore nam aut commodi! ▶</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

