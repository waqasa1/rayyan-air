"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close menu when resizing from mobile to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "PACKAGES", path: "/packages" },
    { name: "GALLERY", path: "/gallery" },
    { name: "ABOUT", path: "/about" },
  ];

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 999,
          background: scrolled || isMenuOpen ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.4)",
          backdropFilter: "blur(14px)",
          borderBottom: `1px solid ${scrolled || isMenuOpen ? "var(--amber-border)" : "transparent"}`,
          transition: "all 0.35s ease",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: scrolled ? 60 : 80,
            transition: "height 0.3s ease",
          }}
        >
          <Logo />

          {/* Desktop Nav */}
          <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 36 }}>
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

          {/* Mobile Hamburger */}
          <button
            className="mobile-only hamburger-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              zIndex: 1000,
              gap: 5,
              padding: 10,
            }}
          >
            <div
              style={{
                width: 24,
                height: 2,
                background: "var(--navy)",
                transition: "0.3s",
                transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <div
              style={{
                width: 24,
                height: 2,
                background: "var(--navy)",
                transition: "0.3s",
                opacity: isMenuOpen ? 0 : 1,
              }}
            />
            <div
              style={{
                width: 24,
                height: 2,
                background: "var(--navy)",
                transition: "0.3s",
                transform: isMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className="hide-desktop"
        style={{
          position: "fixed",
          top: scrolled ? 60 : 80,
          left: 0,
          right: 0,
          bottom: 0,
          background: "var(--white)",
          zIndex: 998,
          display: isMenuOpen ? "flex" : "none",
          flexDirection: "column",
          padding: "40px 20px",
          gap: 24,
          overflowY: "auto",
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
            style={{
              fontFamily: '"Rajdhani", sans-serif',
              fontWeight: 700,
              fontSize: 24,
              letterSpacing: "0.1em",
              color: pathname === link.path ? "var(--amber)" : "var(--navy)",
            }}
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/packages"
          onClick={() => setIsMenuOpen(false)}
          style={{
            background: "var(--amber)",
            color: "#fff",
            fontFamily: '"Rajdhani", sans-serif',
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: "0.14em",
            padding: "16px",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          BOOK NOW
        </Link>
      </div>
    </>
  );
}

