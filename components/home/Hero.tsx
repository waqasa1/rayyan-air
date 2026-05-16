"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import GridBg from "../GridBg";
import Crosshair from "../Crosshair";

export default function Hero() {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    setTimeout(() => setVis(true), 120);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "calc(100vh - 70px)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: `radial-gradient(ellipse at 65% 45%, rgba(20,50,120,0.28) 0%, transparent 55%),
          radial-gradient(ellipse at 15% 65%, rgba(26,92,56,0.18) 0%, transparent 50%),
          linear-gradient(180deg, var(--bg) 0%, #0A1A30 60%, var(--bg) 100%)`,
      }}
    >
      <GridBg />
      <Crosshair top={80} right={60} />
      {/* Diagonal accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: "30%",
          width: 1,
          height: "100%",
          background: `linear-gradient(180deg, transparent, var(--amber-border), transparent)`,
          transform: "rotate(8deg) scaleX(1)",
        }}
      />
      {/* Coords readout */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          right: 44,
          fontFamily: '"Rajdhani", sans-serif',
          fontSize: 11,
          color: "var(--amber)",
          letterSpacing: "0.14em",
          opacity: 0.55,
          lineHeight: 1.8,
        }}
      >
        <div>LAT: 36°50′24″N</div>
        <div>LON: 75°24′36″E</div>
        <div style={{ color: "var(--muted)", marginTop: 4 }}>KHUNJERAB PASS · 15,400 FT</div>
      </div>
      {/* Mission badge bottom left */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          left: 44,
          fontFamily: '"Rajdhani", sans-serif',
          fontSize: 10,
          color: "var(--muted)",
          letterSpacing: "0.15em",
        }}
      >
        PCAA LICENSED · AOC CERTIFIED · UNHCR PARTNER
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 44px",
          position: "relative",
          zIndex: 2,
          width: "100%",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        {/* Status badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            border: "1px solid var(--amber-border)",
            padding: "5px 16px",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--amber)",
              animation: "pulse 2s infinite",
            }}
          />
          <span
            style={{
              fontFamily: '"Rajdhani", sans-serif',
              fontSize: 11,
              color: "var(--amber)",
              letterSpacing: "0.2em",
              fontWeight: 700,
            }}
          >
            MISSION STATUS: ACTIVE · SILK ROAD EXPEDITION 2025
          </span>
        </div>

        <h1
          style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: "clamp(58px, 10.5vw, 116px)",
            lineHeight: 0.88,
            color: "#fff",
            letterSpacing: "0.02em",
            marginBottom: 10,
            maxWidth: 760,
          }}
        >
          NORTHERN
          <br />
          <span style={{ color: "var(--amber)" }}>PAKISTAN</span>
          <br />& XINJIANG
        </h1>

        <div
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: "italic",
            fontSize: 19,
            color: "var(--cream)",
            opacity: 0.75,
            maxWidth: 480,
            lineHeight: 1.55,
            marginBottom: 44,
          }}
        >
          Where ancient Silk Road heritage meets the world's most dramatic mountain corridors. Experience luxury at the
          roof of the world.
        </div>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link
            href="/packages"
            className="clip-path-btn-lg"
            style={{
              background: "var(--amber)",
              color: "#fff",
              fontFamily: '"Rajdhani", sans-serif',
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.16em",
              padding: "13px 34px",
              textDecoration: "none",
            }}
          >
            REQUEST ITINERARY
          </Link>
          <Link
            href="/gallery"
            className="btn-ghost"
            style={{
              background: "transparent",
              color: "var(--cream)",
              border: "1px solid rgba(255,255,255,0.25)",
              fontFamily: '"Rajdhani", sans-serif',
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.16em",
              padding: "13px 34px",
              textDecoration: "none",
            }}
          >
            VIEW GALLERY
          </Link>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 90,
          background: "linear-gradient(transparent, var(--bg))",
        }}
      />
    </div>
  );
}
