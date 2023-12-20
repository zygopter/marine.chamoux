import React from 'react';
import './Curiosities.css'; // Assurez-vous de créer ce fichier CSS

function Curiosities() {
    const artworks = [
        // Remplacez ces exemples par les vraies informations sur vos œuvres d'art
        { id: 1, title: "Artwork 1", imageUrl: "/res/poster-HRI-miyazaki.png" },
        { id: 2, title: "Artwork 2", imageUrl: "/res/poster-HRI-modigliani.png" },
        { id: 3, title: "Artwork 3", imageUrl: "/res/isabelle.png" },
        { id: 3, title: "Artwork 3", imageUrl: "/res/isabelle.png" },
        { id: 3, title: "Artwork 3", imageUrl: "/res/isabelle.png" },
        { id: 3, title: "Artwork 3", imageUrl: "/res/isabelle.png" },
        // ... autres œuvres
    ];

    const digitalArt = [
        // Remplacez ces exemples par les vraies informations sur vos œuvres d'art
        { id: 1, title: "Artwork 1", imageUrl: "/res/poster-HRI-miyazaki.png" },
        { id: 2, title: "Artwork 2", imageUrl: "/res/poster-HRI-modigliani.png" },
        { id: 3, title: "Artwork 3", imageUrl: "/res/isabelle.png" },
        { id: 3, title: "Artwork 3", imageUrl: "/res/isabelle.png" },
        { id: 3, title: "Artwork 3", imageUrl: "/res/isabelle.png" },
        { id: 3, title: "Artwork 3", imageUrl: "/res/isabelle.png" },
        // ... autres œuvres
    ];

    return (
        <div className="curiosities-container">
            <h2>Cabinet de Curiosités</h2>
            <h3>Drawings & paintings</h3>
            <div className="artworks-gallery">
                {artworks.map(artwork => (
                    <div key={artwork.id} className="artwork-item">
                        <img src={artwork.imageUrl} alt={artwork.title} />
                        <p>{artwork.title}</p>
                    </div>
                ))}
            </div>
            <h3>Digital art</h3>
            <div className="artworks-gallery">
                {digitalArt.map(artwork => (
                    <div key={artwork.id} className="artwork-item">
                        <img src={artwork.imageUrl} alt={artwork.title} />
                        <p>{artwork.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Curiosities;
