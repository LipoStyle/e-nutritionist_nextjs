'use client'

import { useState, useEffect } from "react";
import "./Header.css";

import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Navbar from "./NavBar/Navbar";
import LogoSection from "./LogoSection/LogoSection";
import LanguagePicker from "../buttons/LanguagePicker";
import DarkModeToggle from "../buttons/DarkModeToggle";
import CTAButton from "../buttons/CTAButton";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 840);
      if (window.innerWidth > 840) {
        setBurgerOpen(false); // Close menu if switching to desktop
      }
    };

    const handleScroll = () => {
      setScrolling((prev) => window.scrollY > 50);
    };

    // Initialize
    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleBurger = () => {
    setBurgerOpen((prev) => !prev);
  };

  const closeNavbar = () => {
    setBurgerOpen(false);
  };

  return (
    <header className={`header ${scrolling ? "hidden" : ""}`}>
      {/* 🔹 Top Bar */}
      <div className="header-top">

        {/* Desktop: Left - Features */}
        {!isMobile && (
          <div className="header-features">
            <DarkModeToggle />
            <LanguagePicker />
          </div>
        )}

        {/* Desktop: Middle - Nav | Mobile: Burger Icon */}
        {isMobile ? (
          <BurgerMenu isOpen={burgerOpen} toggleBurger={toggleBurger} />
        ) : (
          <Navbar isOpen={false} closeNavbar={closeNavbar} isMobile={false} />
        )}

        {/* Right - CTA (Always Visible) */}
        <CTAButton text="Book a Consultation" link="/book-consultation" />
      </div>

      {/* 🔹 Bottom Row: Logo (Always Visible) */}
      <div className="header-bottom">
        <LogoSection />
      </div>

      {/* 🔹 Mobile Nav Slide Panel */}
      {isMobile && (
        <Navbar
          isOpen={burgerOpen}
          closeNavbar={closeNavbar}
          isMobile={true}
        />
      )}
    </header>
  );
};

export default Header;
