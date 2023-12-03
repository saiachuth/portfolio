import React, { useRef } from "react";
import Home from "./Home";
import "../styles/AppRouter.css";
import About from "./About";
import Projects from "./Projects";


const AppRouter = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="nav">
    <div className='text-white lg:w-full'>
      <nav className='bg-gray-900 p-4 text-white mx-auto lg:w-full'>
        <ul className='flex justify-around'>
          <li className='mr-6'>
            <button
              className='hover:text-gray-300'
              onClick={() => scrollToSection(homeRef)}
            >
              Home
            </button>
          </li>
          <li className='mr-6'>
            <button
              className='hover:text-gray-300'
              onClick={() => scrollToSection(aboutRef)}
            >
              About
            </button>
          </li>
          <li className='mr-6'>
            <button
              className='hover:text-gray-300'
              onClick={() => scrollToSection(projectsRef)}
            >
              Projects
            </button>
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

      {/* Additional sections */}
      {/* ... */}
    </div>
    </div>
  );
};

export default AppRouter;