"use client"

import { useEffect, useRef } from "react";
import "./chart.css";

const Kure = () => {
  const sphereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sphereRef.current) return;
    const slices = 9;
    const angle = 360 / slices;
    
    for (let i = 0; i < slices - 1; i++) {
      const slice = document.createElement("div");
      slice.style.position = "absolute";
      slice.style.border = "solid 1px #fff";
      slice.style.borderRadius = "50%";
      slice.style.height = "300px";
      slice.style.width = "300px";
      slice.style.opacity = "0.8";
      slice.style.transform = `rotateY(${angle * i}deg)`;
      sphereRef.current.appendChild(slice);
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="sphere" ref={sphereRef}>
        <div className="equator"></div>
        <div className="tropic cancer"></div>
        <div className="tropic capricorn"></div>
      </div>
    </div>
  );
};

export default Kure;
