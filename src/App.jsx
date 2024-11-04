import { useState } from 'react'
import React from 'react';
import Animation from './Animation.jsx';
import './style.css';
import button from './assets/box.png';


export default function App() {
  const handleClick = () => {
    console.log('clicked');
  };


  return (
    <>
      <div class="header">
        <div class="nav">
          <div class='name'>Lily So</div>
          <div class='links'>
            <button class='about' onClick={handleClick}>
              <img
                src={button}
                alt='button'
              />
              <span class="button-text">about</span>
            </button>
            <button class='projects' onClick={handleClick}>
              <img
                src={button}
                alt='button'
              />
              <span class="button-text">projects</span>
            </button>
          </div>
        </div>
      </div>
      <div class="background-container">
        <div class="background-section">
          <div class="animation">
            <Animation />
          </div>
        </div>
      </div>
    </>
  )
}

