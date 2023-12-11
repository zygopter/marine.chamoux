import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faHouse, faLaptop, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './Home.css'; // Assurez-vous de créer ce fichier pour vos styles
import NavButton from  '../components/NavButton';
import Footer from  '../components/Footer';
import About from './About';
import Skills from './Skills';

function Home() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuRef = useRef(); // Référence au menu
    const [activeTab, setActiveTab] = useState('home'); // 'home' est l'onglet par défaut

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    };

    const topBarRef = useRef(null);
    const sidebarPhotoRef = useRef(null);
    const footerRef = useRef(null);
    const [remainingHeight, setRemainingHeight] = useState(0);

    const updateRemainingHeight = () => {
        const topBarHeight = topBarRef.current?.offsetHeight || 0;
        const sidebarPhotoHeight = sidebarPhotoRef.current?.offsetHeight || 0;
        const footerHeight = footerRef.current?.offsetHeight || 0;
        const totalUsedHeight = topBarHeight + sidebarPhotoHeight + footerHeight;

        setRemainingHeight(window.innerHeight - totalUsedHeight);
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

    useEffect(() => {
        updateRemainingHeight();
        window.addEventListener('resize', updateRemainingHeight);
        return () => window.removeEventListener('resize', updateRemainingHeight);
    }, []);

    return (
        <div className="container">
            <nav ref={topBarRef} className="top-bar">
                <h1 className="site-name">Marine  <span class="site-name-color-part">&#8226;</span> CV</h1>
                {/* <button className="nav-button" onClick="location.href='#home';">About</button>
                <button className="nav-button" onClick="location.href='#home';">Skills</button> */}
                <button className="hamburger" onClick={toggleMenu}>
                    {/* Icône de menu hamburger ou simple texte */}
                    &#9776; 
                </button>
                <div ref={menuRef} className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <NavButton name="home" setActiveTab={setActiveTab} activeTab={activeTab}>About</NavButton>
                    <NavButton name="skills" setActiveTab={setActiveTab} activeTab={activeTab}>Skills</NavButton>
                    <NavButton name="experience" setActiveTab={setActiveTab} activeTab={activeTab}>Experience</NavButton>
                    <NavButton name="projects" setActiveTab={setActiveTab} activeTab={activeTab}>Projects</NavButton>
                    <NavButton name="curiosities" setActiveTab={setActiveTab} activeTab={activeTab}>Curiosities cabinet</NavButton>
                    <NavButton name="contact" setActiveTab={setActiveTab} activeTab={activeTab}>Contact</NavButton>
                </div>
            </nav>

            <div className="content-area">
                <aside className="sidebar">
                    <div ref={sidebarPhotoRef} className="sidebar-photo">
                    {/* Votre photo de profil ici */}
                    <img src="/res/profil-picture.jpg" alt="Profile" className="profile-pic" />
                    </div>
                    <div style={{ height: remainingHeight }} className="sidebar-text">
                        <div className="sidebar-info">
                            {/* Vos informations de contact ici */}
                            <h2 className="sidebar-title">What about me?</h2>
                            <p><FontAwesomeIcon icon={faCircleUser}/>Marine chamoux</p>
                            <p><FontAwesomeIcon icon={faHouse} />Paris, France</p>
                            <p><FontAwesomeIcon icon={faEnvelope}/>
                                <a href="mailto:chamoux.marine@gmail.com">chamoux.marine@gmail.com</a>
                            </p>
                            <p><FontAwesomeIcon icon={faPhone} />06 80 89 96 48</p>
                            {/* Autres informations de contact */}
                        </div>
                        <div className="social-links">
                            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://twitter.com/myLittleChaMou" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://www.linkedin.com/in/marine-chamoux/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                        <div className="hack">
                        </div>
                    </div>
                </aside>

                <main className="main-content">
                    {activeTab === 'home' && <About />}
                    {activeTab === 'skills' && <Skills />}
                    {activeTab === 'experience' && <About />}
                    {/* ... autres conditions pour afficher les sections ... */}
                </main>
            </div>
            <Footer ref={footerRef}/>
        </div>
    );
}

export default Home;
