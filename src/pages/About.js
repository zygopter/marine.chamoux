import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import './About.css'

function About() {
  return (
    <div className="container-about">
        {/* Contenu de la page À Propos */}
        <a href="/res/cv-marinechamoux-SWEngineeringManager.pdf" download className="cv-download-button">
            <span className="button-text">Available for new challenges</span>
            <span className="button-icon">
                <FontAwesomeIcon icon={faDownload} /> {/* Remplacez faDownload par l'icône de votre choix */}
            </span>
        </a>
        <div className='titre'>
            <h2 className='titre1'>Software engineering manager</h2>
            <h2 className='titre2'>& Product Owner in Robotics</h2>
            <h1 className='name'>Marine Chamoux</h1>
            <div className="description">
            <p>
                I have been leading the HRI team in the software department at Aldebaran for almost 7 years now, addressing the challenges of social robotics to enhance the social intelligence and the attractiveness and naturalness of our robots.
            </p>
            <p>
                I started as a software engineer in Softbank Robotics 10 years ago, to make our robots capable of recognizing human's emotions, after graduating from Polytech Sorbonne engineering school in robotics.
            </p>
            <p>
                Passionate about cognitive science, data science, and technology, my desire is to provide software that offers a clear, understandable, and expressive human-robot interaction.
            </p>
            <p>
                I strongly believe in the synergy between industry and research, trying to build successful collaboration with researchers and universities all over the world.
            </p>
            <p>
                Publications: <a href="https://www.researchgate.net/scientific-contributions/Marine-Chamoux-2191095408" target="_blank" rel="noopener noreferrer">ResearchGate</a>
            </p>
            </div>
        </div>
    </div>
  );
}

export default About;
