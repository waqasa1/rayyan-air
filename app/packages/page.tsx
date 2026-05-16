"use client";

import { useState } from "react";
import GridBg from "../../components/GridBg";
import Crosshair from "../../components/Crosshair";
import BookingForm from "../../components/packages/BookingForm";

export default function PackagesPage() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  const itin = [
    {
      day: "DAY 01",
      title: "Islamabad to Gilgit to Hunza",
      loc: "NORTHERN AREAS, PAKISTAN",
      items: [
        "Fly to Gilgit, drive to Hunza — home to majestic peaks and timeless heritage",
        "Savor exquisite lunch and dinner at the vibrant New Five Star Hotel",
        "Explore Baltit Fort & Altit Fort — centuries-old architecture with breathtaking panoramic views",
      ],
    },
    {
      day: "DAY 02",
      title: "Hunza → Sost → Khunjerab Pass → Tashkurgan",
      loc: "BORDER CROSSING · CHINA ENTRY",
      items: [
        "Stop at Luxus Resort, Attaabad Lake — where luxury blends seamlessly with serenity",
        "Journey along the legendary Karakoram Highway, crossing the world's highest paved border at Khunjerab Pass (15,400 ft)",
        "Arrive in Tashkurgan — a historic Silk Road city surrounded by snow-capped peaks",
        "Stay at Tashkurgan Premier Hotel with unparalleled mountain views and ultimate comfort",
      ],
    },
    {
      day: "DAY 03",
      title: "Departure from Tashkurgan to Kashgar",
      loc: "XINJIANG PROVINCE, CHINA",
      items: [
        "En route: Karakul Lake & White Sand Lake — Pamir Mountains reflected in crystal-clear waters",
        "Stay at the luxurious New Five Star Hotel in Kashgar",
        "Savor authentic Uyghur cuisine at Nuran and other top-tier restaurants",
      ],
    },
    {
      day: "DAY 04",
      title: "Explore Kashgar",
      loc: "KASHGAR OLD CITY",
      items: [
        "Id Kah Mosque — one of China's largest and most magnificent mosques",
        "Kashgar Old Town — ancient labyrinthine streets frozen in Silk Road history",
        "The iconic Sunday Bazaar — the legendary market connecting civilizations",
      ],
    },
    {
      day: "DAY 05",
      title: "Kashgar → Evening Flight to Urumqi",
      loc: "AIR TRANSFER · XINJIANG",
      items: [
        "Visit the mystical Apak Hoja Tomb — sacred Islamic mausoleum with stunning architecture",
        "Guangzhou New City and International Bus Station exploration",
        "Evening: Board flight from Kashgar to Urumqi, arriving later in the evening",
      ],
    },
    {
      day: "DAYS 06–07",
      title: "Urumqi — Heart of Xinjiang",
      loc: "URUMQI, XINJIANG CAPITAL",
      items: [
        "Grand Five-Star Hotel in Urumqi — world-class hospitality meets elegance",
        "Grand Bazaar, Xinjiang Museum and Caravan Culture immersive experiences",
        "Heavenly Lake — one of China's most spectacular natural wonders",
        "Dine at EDEN Café and The Silk Road Restaurant — Silk Road culinary excellence",
      ],
    },
    {
      day: "DAY 08",
      title: "Return Journey — Homeward Bound",
      loc: "CHINA SOUTHERN · ISLAMABAD",
      items: [
        "China Southern Flight arriving at Islamabad International Airport at 11:10am",
        "Conclude your journey carrying memories of civilizations, mountains and the Silk Road to last a lifetime",
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <div
        style={{
          background: `radial-gradient(ellipse at 60% 50%, rgba(20, 50, 120, 0.05) 0%, transparent 60%), linear-gradient(180deg, var(--bg) 0%, #F3F4F6 100%)`,
          padding: "90px 44px 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <GridBg />
        <Crosshair top={40} right={80} opacity={0.1} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div
            style={{
              fontFamily: '"Rajdhani", sans-serif',
              fontSize: 11,
              color: "var(--amber)",
              letterSpacing: "0.2em",
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            ◆ PACKAGE 01 · SILK ROAD EXPEDITION
          </div>
          <h1
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: "clamp(50px, 8vw, 96px)",
              color: "var(--navy)",
              lineHeight: 0.88,
              marginBottom: 22,
            }}
          >
            NORTHERN PAKISTAN
            <br />
            <span style={{ color: "var(--amber)" }}>&</span> XINJIANG SPLENDORS
          </h1>
          <div
            style={{ display: "flex", gap: 28, flexWrap: "wrap", fontFamily: '"Rajdhani", sans-serif', fontSize: 13, color: "var(--muted)", fontWeight: 700 }}
          >
            {["8 DAYS · 7 NIGHTS", "2 COUNTRIES", "5-STAR THROUGHOUT", "$70,000 HEALTH COVERAGE", "VIP BORDER CROSSINGS"].map(
              (t, i) => (
                <span key={i} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span style={{ color: "var(--amber)" }}>▸</span>
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Content grid */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px 100px", display: "grid", gridTemplateColumns: "1fr 390px", gap: 60, alignItems: "start" }}>
        {/* Itinerary */}
        <div>
          <div
            style={{
              fontFamily: '"Rajdhani", sans-serif',
              fontSize: 11,
              color: "var(--amber)",
              letterSpacing: "0.2em",
              fontWeight: 700,
              marginBottom: 8,
            }}
          >
            ◆ DETAILED ITINERARY
          </div>
          <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 52, color: "var(--navy)", marginBottom: 36 }}>
            MISSION BRIEFING
          </h2>
          {itin.map((item, i) => (
            <div
              key={i}
              style={{
                borderLeft: `3px solid ${open === i ? "var(--amber)" : "var(--amber-border)"}`,
                paddingLeft: 26,
                paddingTop: 22,
                paddingBottom: 22,
                cursor: "pointer",
                transition: "border-color 0.3s",
                borderBottom: "1px solid var(--border-faint)",
              }}
              onClick={() => toggle(i)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <div>
                  <div
                    style={{
                      fontFamily: '"Rajdhani", sans-serif',
                      fontSize: 11,
                      color: "var(--amber)",
                      letterSpacing: "0.2em",
                      fontWeight: 700,
                      marginBottom: 3,
                    }}
                  >
                    {item.day}
                  </div>
                  <div
                    style={{
                      fontFamily: '"Rajdhani", sans-serif',
                      fontSize: 17,
                      color: "var(--navy)",
                      fontWeight: 600,
                      marginBottom: 3,
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontFamily: '"Rajdhani", sans-serif',
                      fontSize: 11,
                      color: "var(--muted)",
                      letterSpacing: "0.14em",
                    }}
                  >
                    {item.loc}
                  </div>
                </div>
                <div
                  style={{
                    width: 26,
                    height: 26,
                    flexShrink: 0,
                    border: "1px solid var(--amber-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    color: "var(--amber)",
                    marginTop: 2,
                  }}
                >
                  {open === i ? "−" : "+"}
                </div>
              </div>
              {open === i && (
                <div style={{ marginTop: 16 }}>
                  {item.items.map((pt, j) => (
                    <div key={j} style={{ display: "flex", gap: 12, marginBottom: 9, alignItems: "start" }}>
                      <div
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "var(--amber)",
                          marginTop: 7,
                          flexShrink: 0,
                        }}
                      />
                      <div
                        style={{
                          fontFamily: '"Rajdhani", sans-serif',
                          fontSize: 14,
                          color: "var(--navy)",
                          lineHeight: 1.55,
                        }}
                      >
                        {pt}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Booking form */}
        <div style={{ position: "sticky", top: 100 }}>
          <BookingForm />
          {/* Facilities list */}
          <div style={{ marginTop: 14, background: "var(--bg-card)", border: "1px solid var(--amber-border)", padding: 22 }}>
            <div
              style={{
                fontFamily: '"Rajdhani", sans-serif',
                fontSize: 11,
                color: "var(--amber)",
                letterSpacing: "0.2em",
                fontWeight: 700,
                marginBottom: 14,
              }}
            >
              TOUR FACILITIES INCLUDED
            </div>
            {[
              "$70,000 Medical Coverage",
              "Visa Assistance Included",
              "First Aid Support On-Route",
              "24/7 WeChat Communication",
              "VIP Border Crossings",
              "Private Transportation Throughout",
            ].map((f, i, arr) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  padding: "8px 0",
                  borderBottom: i < arr.length - 1 ? "1px solid var(--border-faint)" : "none",
                }}
              >
                <div style={{ color: "#4CAF50", fontSize: 15, fontWeight: 700 }}>✓</div>
                <div style={{ fontFamily: '"Rajdhani", sans-serif', fontSize: 14, color: "var(--navy)" }}>
                  {f}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
