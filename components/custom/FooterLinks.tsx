"use client";

import React from "react";
import Link from "next/link";

interface FooterLinksProps {
  links?: { label: string; href: string }[]; // label + href
}

const FooterLinks: React.FC<FooterLinksProps> = ({
  links = [
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Copyright", href: "/copyright" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Sitemap", href: "/sitemap" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
}) => {
  return (
    <ul className="flex flex-wrap justify-start gap-4 text-sm text-gray-600">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className="hover:text-gray-900 transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;
