'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../../../../context/LanguageContext";
import DarkModeToggle from "../../buttons/DarkModeToggle";
import LanguagePicker from "../../buttons/LanguagePicker";
import "./NavBar.css";

const Navbar = ({ isOpen, closeNavbar, isMobile }) => {
  const pathname = usePathname();
  const { selectedLanguage } = useLanguage();

  const isActive = (path) => pathname === path;

  const translations = {
    en: {
      home: "Home",
      services: "Services",
      blogs: "Blogs",
      recipes: "Recipes",
      about: "About",
      contact: "Contact",
    },
    es: {
      home: "Inicio",
      services: "Servicios",
      blogs: "Blog",
      recipes: "Recetas",
      about: "Acerca de",
      contact: "Contacto",
    },
    el: {
      home: "Αρχική",
      services: "Υπηρεσίες",
      blogs: "Άρθρα",
      recipes: "Συνταγές",
      about: "Σχετικά",
      contact: "Επικοινωνία",
    },
  };

  const t = translations[selectedLanguage] || translations.en;

  return (
    <nav className={`navbar ${isOpen ? "active" : ""}`}>
      {isMobile && (
        <div className="navbar-utilities">
          <DarkModeToggle />
          <LanguagePicker />
        </div>
      )}
      <div className="navbar-links">
        <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`} onClick={closeNavbar}>{t.home}</Link>
        <Link href="/services" className={`nav-link ${isActive("/services") ? "active" : ""}`} onClick={closeNavbar}>{t.services}</Link>
        <Link href="/blogs" className={`nav-link ${isActive("/blogs") ? "active" : ""}`} onClick={closeNavbar}>{t.blogs}</Link>
        <Link href="/recipes" className={`nav-link ${isActive("/recipes") ? "active" : ""}`} onClick={closeNavbar}>{t.recipes}</Link>
        <Link href="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`} onClick={closeNavbar}>{t.about}</Link>
        <Link href="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`} onClick={closeNavbar}>{t.contact}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
