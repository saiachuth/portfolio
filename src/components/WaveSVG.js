// src/components/WaveSVG.js
import React from "react";
import "../styles/WaveSVG.css";

const WaveSVG = () => {
  return (
    <div className='wave-cont'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='rgb(17, 24, 39)'
          fill-opacity='1'
          d='M0,192L80,186.7C160,181,320,171,480,181.3C640,192,800,224,960,240C1120,256,1280,256,1360,256L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
        ></path>
      </svg>
    </div>
  );
};

export default WaveSVG;
