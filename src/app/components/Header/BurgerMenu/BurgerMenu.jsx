'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import './BurgerMenu.css';

import DarkModeToggle from '../../buttons/DarkModeToggle';
import LanguagePicker from '../../buttons/LanguagePicker';
import CTAButton from '../../buttons/CTAButton';

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleLanguageChange = (lang) => {
    const segments = pathname.split('/');
    segments[1] = lang;
    router.push(segments.join('/'));
    setMenuOpen(false);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* 🔹 Mobile Top Bar: CTA + Burger */}
      <div className="burger-top-bar mobile-only">
        <div
          className={`burger-button ${menuOpen ? 'burger-active' : ''}`}
          onClick={toggleMenu}
        >
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </div>

      {/* 📱 Slide Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-features">
          <DarkModeToggle />
          <LanguagePicker onChange={handleLanguageChange} />
        </div>

        <nav className="mobile-nav" onClick={handleLinkClick}>
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/blogs" className="nav-link">Blogs</Link>
          <Link href="/recipes" className="nav-link">Recipes</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </>
  );
};

export default BurgerMenu;
