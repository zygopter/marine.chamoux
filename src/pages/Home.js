import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Home.css'; // Assurez-vous de créer ce fichier pour vos styles

function Home() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuRef = useRef(); // Référence au menu

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    };

    // Fermer le menu en cliquant en dehors
    useEffect(() => {
        const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    return (
        <div className="container">
            <nav className="top-bar">
            <div className="site-name">Marine CHAMOUX</div>
            <button className="hamburger" onClick={toggleMenu}>
            {/* Icône de menu hamburger ou simple texte */}
            &#9776; 
            </button>
            <div ref={menuRef} className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <a href="#about">À Propos</a>
            <a href="#skills">Compétences</a>
            <a href="#experiments">Expériences</a>
            <a href="#experiments">Projets</a>
            <a href="#experiments">Cabinet des curiosités</a>
            <a href="#experiments">Contact</a>
            {/* Autres liens si nécessaire */}
            </div>
        </nav>

        <aside className="sidebar">
            <div className="sidebar-photo">
            {/* Votre photo de profil ici */}
            <img src="/res/profil-picture.jpg" alt="Profile" className="profile-pic" />
            </div>
            <div className="sidebar-info">
                {/* Vos informations de contact ici */}
                <h2 className="sidebar-title">What about me?</h2>
                <p><FontAwesomeIcon icon={faEnvelope} /> chamoux.marine@gmail.com</p>
                <p><FontAwesomeIcon icon={faPhone} /> 06 80 89 96 48</p>
                {/* Autres informations de contact */}
            </div>
        </aside>

        <main className="main-content">
            {/* Contenu principal, comme l'intro, à propos, portfolio, contact */}
        </main>
        </div>
    );
}

export default Home;
