// src/App.js
import React, { useRef } from "react";
import "./App.css";
import "./styles/AppRouter.css"
import "./index.css"; // Include Tailwind CSS styles
import AppRouter from "./components/AppRouter";
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";

function App() {
  

  return (
    <div className='App'>
      {/* AppRouter */}
      <AppRouter />
      {/* About section */}


      {/* Home Section */}
      {/* (No need to include Home component here) */}

      {/* About Section */}

        {/* (No need to include About component here) */}
      </div>
    
  );
}

export default App;
