import React from "react";
import "../styles/About.css";
import javascriptLogo from "../assets/skills_logo/javascript.png";
import htmlLogo from "../assets/skills_logo/html.webp";
import pythonLogo from "../assets/skills_logo/python.png";
import cssLogo from "../assets/skills_logo/css.png";
import tailwindLogo from "../assets/skills_logo/tailwind.png";
import dockerLogo from "../assets/skills_logo/docker.png";
import reactLogo from "../assets/skills_logo/React.png";
import nodeLogo from "../assets/skills_logo/nodejs.png";
import expressLogo from "../assets/skills_logo/Expressjs.png";
import mongodbLogo from "../assets/skills_logo/mongodb.png";
import Kuber from "../assets/skills_logo/Kubernetes.png";
import sql from "../assets/skills_logo/sql.png";
import jenkins from "../assets/skills_logo/jenkins.png";
import fire from "../assets/skills_logo/firebase.png";
import java from "../assets/skills_logo/java.png";
import { useSpring, animated } from "react-spring";
import { Element } from "react-scroll";
import { TweenMax, Power3 } from "gsap";



const About = () => {

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 280, friction: 120 },
  });


  
  const skills = [
    { name: "JavaScript", logo: javascriptLogo },
    { name: "Python", logo: pythonLogo },
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "Tailwind CSS", logo: tailwindLogo },
    { name: "Docker", logo: dockerLogo },
    { name: "React", logo: reactLogo },
    { name: "Node.js", logo: nodeLogo },
    { name: "Express", logo: expressLogo },
    { name: "MongoDB", logo: mongodbLogo },
    { name: "Kubernetes", logo: Kuber },
    { name: "SQL", logo: sql },
    { name: "Jenkins", logo: jenkins },
    { name: "Firebase", logo: fire },
    { name: "Java", logo: java },

    // ... add other skills with their respective logos
  ];

  return (
    <Element name='about'>
      <div id='about'>
        <animated.div className='about-container' style={fadeIn}>
          <h2 className='about-heading'>About Me</h2>
          <p className='about-content'>
            I am a passionate web developer and a DevOps enthusiast with
            experience in building innovative web applications. My journey
            involves not only crafting efficient and user-friendly code but also
            exploring the realms of DevOps to streamline development pipelines.
          </p>

          {/* Add the button/link for the resume */}
          <div class='resume-cont'>
            <a
              href='https://drive.google.com/file/d/188pPTc-6gXt7CSJ5xikSMmIzKp24ey9O/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              class='cta-button'
            >
              <span>View Resume</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='48'
                height='48'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#ff5555'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='feather feather-file-text'
              >
                <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'></path>
                <polyline points='14 2 14 8 20 8'></polyline>
                <line x1='16' y1='13' x2='8' y2='13'></line>
                <line x1='16' y1='17' x2='8' y2='17'></line>
                <polyline points='10 9 9 9 8 9'></polyline>
              </svg>
            </a>
          </div>

          <div className='skills-container'>
            <h3 className='about-content'>Skills</h3>
            <div className='skills-list'>
              {skills.map((skill, index) => (
                <div key={index} className='skill'>
                  <img src={skill.logo} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </animated.div>
      </div>
    </Element>
  );
};

export default About;
