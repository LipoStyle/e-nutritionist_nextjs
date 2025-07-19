// components/testobserver/ObserverSection.jsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import './ObserverSection.css';

const ObserverSection = ({ children, className = '' }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Animate only once
        }
      },
      {
        threshold: 0.2, // 20% visible triggers animation
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`observer-section ${isVisible ? 'show' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default ObserverSection;
