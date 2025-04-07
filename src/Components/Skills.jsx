import React from 'react'
import '../CSS/Skills.css'
import figma from '../Assets/figma.png'
import illustrator from '../Assets/illustrator.png'
import html from '../Assets/html.png'
import css from '../Assets/css.png'
import js from '../Assets/js.png'
import react from '../Assets/react.png'
import postgres from '../Assets/postgres.png'
import java from '../Assets/java.png'
import github from '../Assets/github.png'
import nodeJS from '../Assets/nodeJS.png'
import vercel from '../Assets/vercel.png'
import typescript from '../Assets/typescript.png'
import drizzle from '../Assets/drizzle.png'
import tailwind from '../Assets/tailwind.png'



const Skills = () => {
  return (
    <>
     <div className="skills-container">
      <ul>
        <li><img src={figma} alt="figma image" />
     
        <span className="skill-name">Figma</span>
       
        <span className="skill-description">UI/UX Design</span>
        </li>

        <li><img src={illustrator} alt="skills img" />
       
        <span className="skill-name">Adobe Illustrator</span>
    
        <span className="skill-description">UI/UX Design</span>
        </li>

        <li><img src={html} alt="skills img" />
     
     <span className="skill-name">HTML</span>
    
     <span className="skill-description">Web Structure</span>
     </li>

     <li><img src={css} alt="skills img" />
    
     <span className="skill-name">CSS</span>
 
     <span className="skill-description">Web Styling</span>
     </li>

     <li><img src={js} alt="skills img" />
     
     <span className="skill-name">Javascript</span>
    
     <span className="skill-description">Web Interactivity</span>
     </li>

     <li><img src={react} alt="skills img" />
    
     <span className="skill-name">React JS</span>
 
     <span className="skill-description">Dynamic Web Apps</span>
     </li>

     <li><img src={postgres} alt="skills img" />
     
     <span className="skill-name">PostgresSQL</span>
    
     <span className="skill-description">Database Management</span>
     </li>

     <li><img src={java} alt="skills img" />
    
     <span className="skill-name">Java</span>
 
     <span className="skill-description">Object-Oriented Programming</span>
     </li>

     <li><img src={github} alt="skills img" />
     
     <span className="skill-name">Github</span>
    
     <span className="skill-description">Version Control</span>
     </li>

     <li><img src={nodeJS} alt="skills img" />
    
     <span className="skill-name">Node JS</span>
 
     <span className="skill-description">Server-Side Development</span>
     </li>
     <li><img src={vercel} alt="skills img" />
     
     <span className="skill-name">Vercel</span>
    
     <span className="skill-description">Web Hosting</span>
     </li>

     <li><img src={typescript} alt="skills img" />
    
     <span className="skill-name">TypeScript</span>
 
     <span className="skill-description">Web Interactivity</span>
     </li>
     <li><img src={drizzle} alt="skills img" />
     
     <span className="skill-name">Drizzle</span>
    
     <span className="skill-description">ORM</span>
     </li>

     <li><img src={tailwind} alt="skills img" />
    
     <span className="skill-name">Tailwind</span>
 
     <span className="skill-description">Utility-First Styling</span>
     </li>
      </ul>
     </div>
     
    </>
  );
};

export default Skills;
