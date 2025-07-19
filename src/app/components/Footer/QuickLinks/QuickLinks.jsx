'use client';

import { useEffect } from "react";
import { useLanguage } from "../../../../context/LanguageContext"; // ✅ Adjusted for Next.js alias
import quickLinksTranslations from "./translations"; // 🔁 Your JSON translation object
import "./QuickLinks.css";

const QuickLinks = () => {
  const { selectedLanguage } = useLanguage();
  const translation = quickLinksTranslations[selectedLanguage] || quickLinksTranslations["en"];

  const links = [
    {
      title: translation.policies,
      items: [
        { name: translation.termsOfService, path: "/terms-of-service" },
        { name: translation.privacyPolicy, path: "/privacy-policy" },
        { name: translation.cookiesPolicy, path: "/cookies-policy" },
      ],
    },
    {
      title: translation.pages,
      items: [
        { name: translation.services, path: "/services" },
        { name: translation.blogs, path: "/blogs" },
        { name: translation.about, path: "/about" },
        { name: translation.contact, path: "/contactus" },
      ],
    },
    {
      title: translation.contactInfo,
      items: [
        { name: translation.email, path: "mailto:thimiosarvanitis@gmail.com" },
        { name: translation.phone, path: "tel:+34613497305" },
        { name: translation.address, path: "#" },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            entry.target.classList.remove("lazy-load");
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll(".lazy-load");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selectedLanguage]);

  return (
    <section className="quick-links-container">
      {links.map((link) => (
        <div key={link.title} className="quick-links-section">
          <h3 className="quick-links-title lazy-load">{link.title}</h3>
          <ul>
            {link.items.map((item, index) => (
              <li key={index} className="quick-link-item lazy-load">
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default QuickLinks;
