'use client';

import { useEffect, useRef } from 'react';
import './LogoNCopyright.css';
import LogoSection from '../../Header/LogoSection/LogoSection'; // ✅ Adjust path as needed

const LogoNCopyright = () => {
  const currentYear = new Date().getFullYear();
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (logoRef.current) observer.observe(logoRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (logoRef.current) observer.unobserve(logoRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="logo-and-copyright">
      <div ref={logoRef} className="logo-section lazy-load">
        <LogoSection />
      </div>
      <p ref={textRef} className="copyright-text">
        © {currentYear} All Rights Reserved
      </p>
    </section>
  );
};

export default LogoNCopyright;
