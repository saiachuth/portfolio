// Projects.js
import React from "react";
import ProjectCard from "./ProjectCard";
import ichaterImage from "../assets/projects_logo/ichater.jpeg";
import landerImage from "../assets/projects_logo/lander.jpeg";
import opencvImage from "../assets/projects_logo/opencv.jpeg";
import typerImage from "../assets/projects_logo/typer.jpeg";
import "../styles/Projects.css";

const projects = [
  {
    title: "Typing Speed Tester",
    description:
      "Challenge yourself with this Typing Speed Tester web app! Built with ReactJS and styled using Bulma CSS, it offers real-time analysis, randomized texts, and a user-friendly interface. Improve your typing skills and track your progress effortlessly.",
    imageUrl: typerImage,
    projectLink: "https://github.com/saiachuth/Typing-Speed-Tester",
  },
  // Add more projects as needed
  {
    title: "Object Detection ",
    description:
      "This project showcases a robust and efficient Object DetectionA web application that uses a pretrained model to detect objects in animage.",
    imageUrl: opencvImage,
    projectLink: "https://github.com/saiachuth/Object-Detection",
  },
  {
    title: "AZ-Landing Page ",
    description:
      "This is a landing page for an ecommerce website built using HTML, CSS and JavaScript And React created on vite",
    imageUrl: landerImage,
    projectLink: "https://github.com/saiachuth/AZ-LandingPage",
  },
  {
    title: "iChatter ",
    description:
      "A socket.io duplex chatting app that uses react.js and node.js styled aesthetically and provides realtime chatting capabilities",
    imageUrl: ichaterImage,
    projectLink: "https://github.com/saiachuth/iChatter",
  },
];

const Projects = () => {
  return (
    <div className='projects-container'>
      <h2 className='projects-heading'>Projects</h2>
      <div className='projects-list'>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
