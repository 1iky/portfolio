import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './projects.css';
import './index.css';
import button from './assets/box.png';
import hamburger from './assets/hamburger.png';
import thoughtfulties from './assets/thoughtfulties.png';
import wiggletale from './assets/wiggletale.png';
import portfolio from './assets/portfolio.png';
import bettertogether from './assets/bettertogether.png';
import colourfulcritterquest from './assets/colourfulcritterquest.png';
import fintelligent from './assets/fintelligent.png';
import Alignify from './assets/Alignify.png';


export default function Projects() {
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
                    <button className="projects">
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
                    <button className='projects'>
                    <img
                        src={button}
                        alt='button'
                    />
                    <span className="button-text">projects</span>
                    </button>
                </div>
                </div>
            </div>
            {/* Projects */}
            <div className="title-box">
                <div className='title-box-inner'>
                    <h1 className='project-list-title'>Projects (๑'ᵕ'๑)⸝*</h1>
                </div>
            </div>
    
            <div className='projects-container'>
                <div className='projects-list'>
                    {/* Project 1 Fintelligent*/}
                    <div className='project'>
                        <div className='project-image'>
                            <img src={fintelligent} alt='project-image'/>
                        </div>
                        <div className='project-details'>
                            <div className='project-header'>
                                <h2 className='project-title'>
                                    Fintelligent
                                </h2>
                                <div className='project-tags'>
                                    <span className='tag'>React</span>
                                    <span className='tag'>Office Javascript API</span>
                                    <span className='tag'>FastAPI</span>
                                    <span className='tag'>Pandas</span>
                                    <span className='tag'>OpenAI API</span>
                                </div>
                            </div>
                            <p className='project-description'>
                                ✦ Fintelligent is an AI-powered Excel add-in that integrates a natural language interface for users to ask questions, explain formulas, and generate insights using OpenAI's GPT-4, while automating financial workflows and enhancing data analysis
                                <br></br>
                                ✦ Built using FastAPI, OpenAI API, React, Office JavaScript API, and Pandas, ensuring smooth integration and enhanced user experience.
                                <br></br>
                                ✦ Streamlined data entry, formatting, and repetitive calculations to enhance workflow efficiency.
                                
                            </p>
                            <div className='project-links'>
                                <a href='https://github.com/1iky/Fintelligent' target='_blank' rel='noreferrer' className='project-button'>
                                    Visit github 
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Project 2 Alignify*/}
                    <div className='project'>
                        <div className='project-image'>
                            <img src={Alignify} alt='project-image'/>
                        </div>
                        <div className='project-details'>
                            <div className='project-header'>
                                <h2 className='project-title'>
                                    Alignify
                                </h2>
                                <div className='project-tags'>
                                    <span className='tag'>C++</span>
                                    <span className='tag'>Qt</span>
                                </div>
                            </div>
                            <p className='project-description'>
                                ✦ Developed a Qt and C++ app that simplifies group scheduling by showing shared calendars and availability.
                                <br></br>
                                ✦ Automatically identifies the best times for meetings and highlights potential attendees based on their schedules.
                                <br></br>
                                ✦ Implemented Object-Oriented Programming (OOP) and the MVC design pattern for maintainable and scalable code.
                            </p>
                            <div className='project-links'>
                            <a href='https://github.com/1iky/Alignify' target='_blank' rel='noreferrer' className='project-button'>
                                    Visit github 
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Project 1 Wiggletale*/}
                    <div className='project'>
                        <div className='project-image'>
                            <img src={wiggletale} alt='project-image'/>
                        </div>
                        <div className='project-details'>
                            <div className='project-header'>
                                <h2 className='project-title'>
                                    wiggletale.com
                                </h2>
                                <div className='project-tags'>
                                    <span className='tag'>HTML</span>
                                    <span className='tag'>CSS</span>
                                    <span className='tag'>Shopify Liquid</span>
                                </div>
                            </div>
                            <p className='project-description'>
                                ✦ Designed and developed a complete Shopify website, including custom branding and feature implementation to enhance user experience and align with the brand's identity.
                                <br></br>
                                ✦ This project involved crafting a unique logo, customizing theme elements, optimizing navigation, and integrating essential Shopify tools for a seamless shopping experience.
                            </p>
                            <div className='project-links'>
                                <a href='https://wiggletale.com' target='_blank' rel='noreferrer' className='project-button'>
                                    Visit Site 
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Project 2 UXL Better Together*/}
                    <div className='project'>
                        <div className='project-image'>
                            <img src={bettertogether} alt='project-image'/>
                        </div>
                        <div className='project-details'>
                            <div className='project-header'>
                                <h2 className='project-title'>
                                    Better Together
                                </h2>
                                <div className='project-tags'>
                                    <span className='tag'>UXL Choice Winner</span>
                                    <span className='tag'>Figma</span>
                                </div>
                            </div>
                            <p className='project-description'>
                                ✦ Winner of the UXL Choice Award at the 2024 UX Laurier Designathon
                                <br></br>
                                ✦ Figma prototype of a mobile app that connects families together through daily updates, shared photos, and marking hotspot locations.
                            </p>
                            <div className='project-links'>
                                <a href='https://www.figma.com/proto/5h7Xu0VANvsjymbNvfwDsf/Better-Together?page-id=0%3A1&node-id=1-32&node-type=canvas&viewport=425%2C259%2C0.19&t=2qShZp2qcJovtJr8-1&scaling=min-zoom&content-scaling=fixed' target='_blank' rel='noreferrer' className='project-button'>
                                    Visit Figma 
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Project 3 Personal Website*/}
                    <div className='project'>
                        <div className='project-image'>
                            <img src={portfolio} alt='project-image'/>
                        </div>
                        <div className='project-details'>
                            <div className='project-header'>
                                <h2 className='project-title'>
                                    lilyso.netlify.app
                                </h2>
                                <div className='project-tags'>
                                    <span className='tag'>React</span>
                                </div>
                            </div>
                            <p className='project-description'>
                                ✦ Personal portfolio website showcasing my projects and skills!
                            </p>
                            <div className='project-links'>
                                <a href='https://lilyso.netlify.app/' target='_blank' rel='noreferrer' className='project-button'>
                                    Visit Site 
                                </a>
                                <a href='https://github.com/1iky/portfolio' target='_blank' rel='noreferrer' className='project-button'>
                                    Visit github 
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Project 4 Colourful Critter Quest*/}
                    <div className='project'>
                        <div className='project-image'>
                            <img src={colourfulcritterquest} alt='project-image'/>
                        </div>
                        <div className='project-details'>
                            <div className='project-header'>
                                <h2 className='project-title'>
                                    Colourful Critter Quest
                                </h2>
                                <div className='project-tags'>
                                    <span className='tag'>python</span>
                                    <span className='tag'>pygame</span>
                                </div>
                            </div>
                            <p className='project-description'>
                                ✦ An educational children's game created for CS2212 that helps kids recognize and spell animals, understand basic colour theory, and practice simple mathematical calculations.
                            </p>
                            <div className='project-links'>
                                <a href='https://github.com/1iky/Colourful-Critter-Quest' target='_blank' rel='noreferrer' className='project-button'>
                                    Visit github 
                                </a>
                            </div>
                        </div>
                    </div>
                     {/* Project5 Thoughtful Ties*/}
                     <div className='project'>
                        <div className='project-image'>
                            <img src={thoughtfulties} alt='project-image'/>
                        </div>
                        <div className='project-details'>
                            <div className='project-header'>
                                <h2 className='project-title'>
                                    Thoughtful Ties
                                </h2>
                                <div className='project-tags'>
                                    <span className='tag'>React Native</span>
                                    <span className='tag'>Expo</span>
                                </div>
                            </div>
                            <p className='project-description'>
                                ✦ Thoughtful Ties is a platform that connects the elderly with one another
                                <br></br>
                                ✦ Designed and developed the frontend layout 
                            </p>
                            <div className='project-links'>
                                <a href='https://github.com/1iky/ThoughtfulTies' target='_blank' rel='noreferrer' className='project-button'>
                                    Visit github 
                                </a>
                                <a href='https://devpost.com/software/thoughtful-ties' target='_blank' rel='noreferrer' className='project-button'>
                                    Visit devpost 
                                </a>
                            </div>
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

