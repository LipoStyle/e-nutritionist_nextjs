'use client';

import Link from 'next/link';
import Image from 'next/image';
import './LogoSection.css';

const LogoSection = () => {
  return (
    <div className="homepg-logo">
      <Link href="/" className="logo-link">
        <div className="logo-pack">
          <Image
            src="/logo.svg"
            alt="Logo"
            className="logo-img"
            width={50}
            height={50}
            priority
          />
          <div className="logo-text">
            <p className="author-name">Thymios Arvanitis</p>
            <p className="author-job">Nutritionist</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LogoSection;
