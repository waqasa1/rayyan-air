"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "PACKAGES", path: "/packages" },
    { name: "GALLERY", path: "/gallery" },
    { name: "ABOUT", path: "/about" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.4)",
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${scrolled ? "var(--amber-border)" : "transparent"}`,
        transition: "all 0.35s ease",
        padding: "0 40px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
        <Logo />
        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="navlink"
              style={{
                fontFamily: '"Rajdhani", sans-serif',
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.16em",
                color: pathname === link.path ? "var(--amber)" : "var(--navy)",
                borderBottom: `2px solid ${pathname === link.path ? "var(--amber)" : "transparent"}`,
                paddingBottom: 3,
                transition: "all 0.2s",
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/packages"
            className="clip-path-btn"
            style={{
              background: "var(--amber)",
              color: "#fff",
              fontFamily: '"Rajdhani", sans-serif',
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.14em",
              padding: "9px 22px",
            }}
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </nav>
  );
}
