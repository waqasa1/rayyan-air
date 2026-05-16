"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import GridBg from "../GridBg";
import Crosshair from "../Crosshair";

export default function Hero() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "calc(100vh - 70px)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/* Background Plane Image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/plane_karakoram.png"
          alt="Rayyan Air Private Jet over Karakoram"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Gradient Overlays for readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%),
                         linear-gradient(0deg, rgba(255, 255, 255, 0.5) 0%, transparent 40%)`,
          }}
        />
      </div>

      <GridBg opacity={0.12} />
      <Crosshair top={80} right={60} className="hide-mobile" />
      {/* Diagonal accent line */}
      <div
        className="hide-mobile"
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
        className="hide-mobile"
        style={{
          position: "absolute",
          bottom: 36,
          right: 44,
          fontFamily: '"Rajdhani", sans-serif',
          fontSize: 11,
          color: "var(--navy)",
          letterSpacing: "0.14em",
          opacity: 0.7,
          lineHeight: 1.8,
        }}
      >
        <div>LAT: 36°50′24″N</div>
        <div>LON: 75°24′36″E</div>
        <div style={{ color: "var(--muted)", marginTop: 4 }}>KHUNJERAB PASS · 15,400 FT</div>
      </div>
      {/* Mission badge bottom left */}
      <div
        className="hide-mobile"
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
        className="hero-content"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "60px 24px",
          position: "relative",
          zIndex: 2,
          width: "100%",
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
            marginBottom: 24,
            background: "rgba(255,255,255,0.6)",
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
              fontSize: 10,
              color: "var(--amber)",
              letterSpacing: "0.15em",
              fontWeight: 700,
            }}
          >
            MISSION STATUS: ACTIVE
          </span>
        </div>

        <h1
          style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: "clamp(54px, 12vw, 116px)",
            lineHeight: 0.88,
            color: "var(--navy)",
            letterSpacing: "0.02em",
            marginBottom: 16,
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
            fontSize: "clamp(17px, 4vw, 20px)",
            color: "var(--cream)",
            opacity: 0.9,
            maxWidth: 480,
            lineHeight: 1.5,
            marginBottom: 40,
          }}
        >
          Where ancient Silk Road heritage meets the world's most dramatic mountain corridors. Experience luxury at the
          roof of the world.
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
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
              flex: "0 1 auto",
              textAlign: "center",
              minWidth: 180,
            }}
          >
            REQUEST ITINERARY
          </Link>
          <Link
            href="/gallery"
            className="btn-ghost"
            style={{
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(4px)",
              color: "var(--navy)",
              border: "1px solid var(--amber-border)",
              fontFamily: '"Rajdhani", sans-serif',
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.16em",
              padding: "13px 34px",
              textDecoration: "none",
              flex: "0 1 auto",
              textAlign: "center",
              minWidth: 180,
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
