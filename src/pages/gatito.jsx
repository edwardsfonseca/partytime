// src/components/Gatito.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../syles/gatito.css';

const Gatito = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updateEyePosition = (eye, mouseX, mouseY) => {
      if (eye) {
        const eyeRect = eye.getBoundingClientRect();
        const eyeX = eyeRect.left + eyeRect.width / 2;
        const eyeY = eyeRect.top + eyeRect.height / 2;

        const angle = Math.atan2(mouseY - eyeY, mouseX - eyeX);
        const rotateX = Math.cos(angle) * 10;
        const rotateY = Math.sin(angle) * 10;

        eye.style.transform = `translate(${rotateX}px, ${rotateY}px)`;
      }
    };

    updateEyePosition(leftEyeRef.current, mouseX, mouseY);
    updateEyePosition(rightEyeRef.current, mouseX, mouseY);
  }, [mouseX, mouseY]);

  return (
    <div className="gatito-container">
      <div className="gatito">
        <div className="cara">
          <div className="ojo" ref={leftEyeRef}>
            <div className="pupila"></div>
          </div>
          <div className="ojo" ref={rightEyeRef}>
            <div className="pupila"></div>
          </div>
          <div className="boca"></div>
          <div className="pelos izquierdo"></div>
          <div className="pelos derecho"></div>
        </div>
      </div>
    </div>
  );
};

export default Gatito;
