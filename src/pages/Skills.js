import React, { useState, useEffect } from 'react';

import './Skills.css'


function SkillBar({ skill, percentage }) {
    const [width, setWidth] = useState('0%');
  
    useEffect(() => {
      // Déclenchez l'animation au chargement du composant
      const handleAnimation = () => {
        setWidth(`100%`);
      };
      handleAnimation();
    }, [percentage]);
  
    return (
      <div className="skill">
        <div className="skill-name">{skill}</div>
        <div className="skill-bar">
          <div 
            className="skill-percentage" 
            style={{ 
                width,
                clipPath: `inset(0 calc(${100 - percentage}%) 0 0)`
            }}
          ></div>
        </div>
      </div>
    );
  }
  
  

function Skills() {
    return (
      <div className="container-skills">
        <div className='titre'>
            <h2 className='titre1'>What I am good at</h2>
            <h1 className='name'>Expertise</h1>
        </div>
        <h3 className='technical-skills'>Software development</h3>
        <div className='skills-bars'>
        <SkillBar skill="C++" percentage={70} />
        <SkillBar skill="Android, Kotlin" percentage={70} />
        <SkillBar skill="React" percentage={50} />
        <SkillBar skill="Human-Robot Interaction" percentage={70} />
        <SkillBar skill="Robotics, RaaS" percentage={50} />
        <SkillBar skill="IA, Perception, IA tooling" percentage={50} />
        <SkillBar skill="Git, Github, Gitlab" percentage={70} />
        <SkillBar skill="SAFe, Agile" percentage={50} />
        <SkillBar skill="Jira, Confluence, Redmine" percentage={50} />
        </div>
      </div>
    );
}
  
export default Skills;