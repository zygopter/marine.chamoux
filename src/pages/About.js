import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import './About.css'

function About() {
  return (
    <div>
        {/* Contenu de la page À Propos */}
        <a href="/res/cv-marinechamoux-SWEngineeringManager.pdf" download className="cv-download-button">
            <span className="button-text">Available for new challenges</span>
            <span className="button-icon">
                <FontAwesomeIcon icon={faDownload} /> {/* Remplacez faDownload par l'icône de votre choix */}
            </span>
        </a>
        <h2>Software engineering manager & Product Owner in Robotics</h2>
        <h1>Marine Chamoux</h1>
    </div>
  );
}

export default About;
