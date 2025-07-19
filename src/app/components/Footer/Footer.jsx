'use client';

import { useEffect, useRef } from "react";
import "./Footer.css";

import Newsletter from "./Newsletter/Newsletter";
import QuickLinks from "./QuickLinks/QuickLinks";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import LogoNCopyright from "./Logo&Copyright/LogoNCopyright";

const Footer = () => {
  const socialMediaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (socialMediaRef.current) observer.observe(socialMediaRef.current);

    return () => {
      if (socialMediaRef.current) observer.unobserve(socialMediaRef.current);
    };
  }, []);

  return (
    <footer className="footer">
      <Newsletter />
      <QuickLinks />
      <div ref={socialMediaRef} className="social-media-icons-container lazy-load">
        <SocialMediaIcons />
      </div>
      <LogoNCopyright />
    </footer>
  );
};

export default Footer;
