'use client';

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faTwitter,
  faLinkedin,
  faYoutube,
  faPinterest,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialMediaIcons.css";

const SocialMediaIcons = () => {
  const socialLinks = [
    { href: "https://www.instagram.com/the_enutritionist/", icon: faInstagram, class: "instagram" },
    { href: "https://www.tiktok.com/@enutritionist_", icon: faTiktok, class: "tiktok" },
    { href: "https://linkedin.com", icon: faLinkedin, class: "linkedin" },
    { href: "https://www.youtube.com/@e-nutritionist", icon: faYoutube, class: "youtube" },
    { href: "https://es.pinterest.com/thymiosarvanitis/", icon: faPinterest, class: "pinterest" },
    { href: "https://www.facebook.com/profile.php?id=61566553285016", icon: faFacebook, class: "facebook" },
    { href: "https://x.com/ThymiosArvNutri", icon: faTwitter, class: "x" }, // still using Twitter icon for X
  ];

  return (
    <section className="social-media-icons">
      {socialLinks.map(({ href, icon, class: className }) => (
        <a
          key={className}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-link ${className}`}
        >
          <FontAwesomeIcon icon={icon} className={`icon ${className}`} />
        </a>
      ))}
    </section>
  );
};

export default SocialMediaIcons;
