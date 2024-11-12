import { useState } from 'react'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Animation from './Animation.jsx';
import './index.css';
import button from './assets/box.png';
import textbox from './assets/chatbox_white.png';
import lily from './assets/lily.png';
import caret from './assets/caret-right.png';
import hamburger from './assets/hamburger.png';

export default function Home() {
    const navigate = useNavigate();

    const handleAboutClick = () => {
        navigate('/about');
        console.log('Navigate to about');
    };

    const handleProjectClick = () => {
        navigate('/projects');
        console.log('Navigate to projects');
    };

    const handleClick = () => {
        console.log('Clicked');
    };
  
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <>
        <div className="header">
          <div className="nav">
            <div className='name'>Lily So</div>
            <div className="mobile-nav">
              {/* Hamburger Menu Button */}
              <button className="hamburger-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <img src={hamburger} alt="menu"/>
              </button>
  
              {/* Mobile Menu Dropdown */}
              <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
                <button className="about" onClick={handleAboutClick}>
                  <span className="button-text">about</span>
                </button>
                <button className="projects" onClick={handleProjectClick}>
                  <span className="button-text">projects</span>
                </button>
              </div>
          </div>
            {/* desktop menu links*/}
            <div className={'links'}>
              <button className='about' onClick={handleAboutClick}>
                <img
                  src={button}
                  alt='button'
                />
                <span className="button-text">about</span>
              </button>
              <button className='projects' onClick={handleProjectClick}>
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
                      <span>ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧</span>
                    </span>
                  </span>
                </div>
                <Animation />
              </div>
            </div>
            <div className="contact-container">
              <img src={caret} className="caret" alt="caret" />
              <a href="https://github.com/1iky" target="_blank">
                <button className="contact-button button1" onClick={handleClick}></button>
              </a>
              <a href="mailto:lilyso6255@gmail.com">
                <button className="contact-button button2" onClick={handleClick}></button>
              </a>
              <a href="https://www.linkedin.com/in/lily-so/"target="_blank">
                <button className="contact-button button3" onClick={handleClick}></button>
              </a>
            </div>
            <div className="about-content"> 
              <h2>About Me (๑'ᵕ'๑)⸝*</h2>
              <div className='about-container'>
                <img src={lily} className='about-item' alt="Picture " />
                <p className='about-item'>Hi! I'm Lily, a third year computer science student at Western University. I’m all about solving problems, learning new things, and applying what I know to real projects. Always looking for opportunities to grow and challenge myself! <br /> <br /> Feel free to reach out – I don't bite... ✧</p>
              </div>
            </div>
          </div>
        </div>
        <div className='footer'>
          <div className='footer-text'>hehe (๑ᵔ⤙ᵔ๑)</div>
        </div>
      </>
    )
  }
  
  