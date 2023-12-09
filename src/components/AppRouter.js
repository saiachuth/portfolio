// AppRouter.js
import React, { useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import "../styles/AppRouter.css";
import { useSpring, animated } from "react-spring";
import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect } from "react";
import { scroller } from "react-scroll";



const AppRouter = () => {
    const fadeIn = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      config: { tension: 1, friction: 1 },
    });

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const homeRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 const scrollToSection = (sectionId) => {
   scroller.scrollTo(sectionId, {
     duration: 800,
     delay: 0,
     smooth: "easeInOutQuart",
   });
   setIsMenuOpen(false);
 };


  const handleScroll = () => {
    const sections = ["home", "about", "projects"]; // Add more section IDs
    const currentPosition = window.scrollY;

    const distances = sections.map((section) => {
      const target = document.getElementById(section);
      return Math.abs(target.offsetTop - currentPosition);
    });

    const minDistanceIndex = distances.indexOf(Math.min(...distances));
    const targetSection = sections[minDistanceIndex];

    // Scroll to the nearest section
    document.getElementById(targetSection).scrollIntoView({
      behavior: "smooth",
    });
  };
  

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <animated.div className='nav' style={fadeIn}>
      <div className='textcolor'>
        <nav className='navbar'>
          <div className='menu-icon' onClick={toggleMenu}>
            <FiMenu />
          </div>
          <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
            <li>
              <Link to='home' smooth={true} duration={1}>
                <button
                  className='neumorphic-button text-hover'
                  onClick={() => scrollToSection("home")}
                >
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link to='about' smooth={true} duration={0.1}>
                <button
                  className='neumorphic-button text-hover'
                  onClick={() => scrollToSection(aboutRef)}
                >
                  About
                </button>
              </Link>
            </li>
            <li>
              <Link to='projects' smooth={true} duration={0.01}>
                <button
                  className='neumorphic-button text-hover'
                  onClick={() => scrollToSection(projectsRef)}
                >
                  Projects
                </button>
              </Link>
            </li>
          </ul>
        </nav>
        <div ref={homeRef}>
          <Home />
        </div>

        <div ref={aboutRef}>
          <About />
        </div>

        <div ref={projectsRef}>
          <Projects />
        </div>
      </div>
    </animated.div>
  );
};

export default AppRouter;
