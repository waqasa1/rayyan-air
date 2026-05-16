"use client";

import { useState } from "react";

export default function GalleryPage() {
  const [filter, setFilter] = useState("ALL");

  const destinations = [
    { name: "Hunza Valley", cat: "PAKISTAN", grad: "linear-gradient(155deg,#1a3d5c,#2d7a6e,#1a5c38)", icon: "⛰", size: "tall" },
    { name: "Baltit Fort", cat: "HERITAGE", grad: "linear-gradient(155deg,#5c3a1a,#8B6914,#3d2810)", icon: "🏰", size: "normal" },
    { name: "Attaabad Lake", cat: "PAKISTAN", grad: "linear-gradient(155deg,#1a4a7a,#0d8a9e,#1a3d6e)", icon: "🏔", size: "normal" },
    { name: "Khunjerab Pass", cat: "PAKISTAN", grad: "linear-gradient(155deg,#2a2a3a,#6a7a8a,#1a1a2a)", icon: "🗻", size: "tall" },
    { name: "Karakoram Highway", cat: "PAKISTAN", grad: "linear-gradient(155deg,#1a2a1a,#4a6a3a,#2a3a2a)", icon: "🛣", size: "normal" },
    { name: "Karakul Lake", cat: "CHINA", grad: "linear-gradient(155deg,#1a2a5c,#3a5a9e,#8ab0d0)", icon: "🏔", size: "normal" },
    { name: "Kashgar Old Town", cat: "HERITAGE", grad: "linear-gradient(155deg,#5c3a1a,#c4783a,#8a4a1a)", icon: "🕌", size: "tall" },
    { name: "Id Kah Mosque", cat: "HERITAGE", grad: "linear-gradient(155deg,#1a3a1a,#3a7a3a,#2a5a2a)", icon: "🕌", size: "normal" },
    { name: "Sunday Bazaar", cat: "CHINA", grad: "linear-gradient(155deg,#4a2a1a,#8a5a2a,#c49a4a)", icon: "🏪", size: "normal" },
    { name: "Heavenly Lake", cat: "CHINA", grad: "linear-gradient(155deg,#0a1a4a,#1a4a9e,#4a7adc)", icon: "🌊", size: "tall" },
    { name: "Urumqi Grand Bazaar", cat: "CHINA", grad: "linear-gradient(155deg,#3a1a2a,#7a2a4a,#c44a6a)", icon: "🏛", size: "normal" },
    { name: "Xinjiang Museum", cat: "HERITAGE", grad: "linear-gradient(155deg,#1a1a2a,#2a2a5a,#4a4a8a)", icon: "🏛", size: "normal" },
  ];

  const filtered = filter === "ALL" ? destinations : destinations.filter((d) => d.cat === filter);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 20px 80px" }}>
      <div style={{ marginBottom: 48 }}>
        <div
          style={{
            fontFamily: '"Rajdhani", sans-serif',
            fontSize: 11,
            color: "var(--amber)",
            letterSpacing: "0.2em",
            fontWeight: 700,
            marginBottom: 12,
          }}
        >
          ◆ DESTINATION ARCHIVE
        </div>
        <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: "clamp(48px, 10vw, 68px)", color: "var(--navy)", marginBottom: 24 }}>GALLERY</h1>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {["ALL", "PAKISTAN", "CHINA", "HERITAGE"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                background: filter === f ? "var(--amber)" : "transparent",
                color: filter === f ? "#fff" : "var(--muted)",
                border: `1px solid ${filter === f ? "var(--amber)" : "var(--amber-border)"}`,
                fontFamily: '"Rajdhani", sans-serif',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.16em",
                padding: "6px 18px",
                transition: "all 0.2s",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="gallery-grid">

        {filtered.map((dest, i) => (
          <div
            key={i}
            className="galcard"
            style={{
              background: dest.grad,
              height: dest.size === "tall" ? 300 : 220,
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            {/* Pattern */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.07,
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.5) 0, rgba(255, 255, 255, 0.5) 1px, transparent 1px, transparent 8px)",
              }}
            />
            <div
              className="galoverlay"
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(6, 14, 28, 0.6)",
                opacity: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "opacity 0.3s",
              }}
            >
              <div
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: 16,
                  color: "var(--amber)",
                  letterSpacing: "0.2em",
                }}
              >
                VIEW DESTINATION
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: 18,
              }}
            >
              <div style={{ fontSize: 34, opacity: 0.5 }}>{dest.icon}</div>
              <div>
                <div
                  style={{
                    fontFamily: '"Rajdhani", sans-serif',
                    fontSize: 10,
                    color: "var(--amber)",
                    letterSpacing: "0.2em",
                    fontWeight: 700,
                    marginBottom: 3,
                  }}
                >
                  {dest.cat}
                </div>
                <div
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: 20,
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  {dest.name}
                </div>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                width: 18,
                height: 18,
                border: "1.5px solid rgba(232, 130, 26, 0.5)",
                borderLeft: "none",
                borderBottom: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 10,
                left: 10,
                width: 18,
                height: 18,
                border: "1.5px solid rgba(232, 130, 26, 0.5)",
                borderRight: "none",
                borderTop: "none",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
