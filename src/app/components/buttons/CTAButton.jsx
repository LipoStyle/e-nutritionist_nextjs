'use client';

import Link from "next/link";
import "./CTAButton.css";

const CTAButton = ({ text, link }) => {
  return (
    <Link href={link} className="cta-button">
      {text}
    </Link>

  );
};

export default CTAButton;
