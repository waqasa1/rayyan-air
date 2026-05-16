import Link from "next/link";
import GridBg from "../GridBg";

export default function TourTeaser() {
  const days = [
    { n: "01", title: "Islamabad → Gilgit → Hunza", sub: "Baltit Fort · Altit Fort · Five Star Hotel" },
    { n: "02", title: "The High Pass Crossing", sub: "Attaabad Lake · Khunjerab Pass 15,400ft · Tashkurgan" },
    { n: "03–04", title: "Enchanting Kashgar", sub: "Karakul Lake · Id Kah Mosque · Sunday Bazaar" },
    { n: "05–07", title: "Urumqi & Beyond", sub: "Heavenly Lake · Grand Bazaar · Xinjiang Museum" },
  ];
  return (
    <section style={{ padding: "100px 44px", background: "var(--bg-card)", position: "relative" }}>
      <GridBg opacity={0.025} size={50} />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              fontFamily: '"Rajdhani", sans-serif',
              fontSize: 11,
              color: "var(--amber)",
              letterSpacing: "0.2em",
              fontWeight: 700,
              marginBottom: 10,
            }}
          >
            ◆ SILK ROAD EXPEDITION · PACKAGE 01
          </div>
          <h2
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: "clamp(44px, 6vw, 76px)",
              color: "var(--navy)",
            }}
          >
            THE 8-DAY ODYSSEY
          </h2>
          <div
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontStyle: "italic",
              fontSize: 18,
              color: "var(--muted)",
              marginTop: 8,
            }}
          >
            An expertly curated luxury expedition across borders, through high mountain passes and ancient trading cities.
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, marginBottom: 20 }}>
          {days.map((d, i) => (
            <Link
              key={i}
              href="/packages"
              className="daycard"
              style={{
                display: "block",
                background: "var(--bg-card)",
                border: "1px solid var(--amber-border)",
                padding: "26px 30px",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 4,
                  height: "100%",
                  background: "var(--amber)",
                }}
              />
              <div
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: 52,
                  color: "rgba(232, 130, 26, 0.1)",
                  lineHeight: 1,
                }}
              >
                DAY {d.n}
              </div>
              <div
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  fontSize: 17,
                  color: "var(--cream)",
                  fontWeight: 600,
                  marginBottom: 5,
                }}
              >
                {d.title}
              </div>
              <div
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  fontSize: 13,
                  color: "var(--muted)",
                  letterSpacing: "0.04em",
                }}
              >
                {d.sub}
              </div>
            </Link>
          ))}
        </div>
        {/* Urumqi feature block */}
        <div
          style={{
            background: "linear-gradient(135deg, #0A1628 0%, #081220 100%)",
            border: "1px solid rgba(232, 130, 26, 0.4)",
            padding: "36px 40px",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 40,
            alignItems: "center",
          }}
        >
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
              DAYS 06 — 08 · LUXURY RETURN VOYAGE
            </div>
            <div
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: 38,
                color: "#fff",
                marginBottom: 12,
              }}
            >
              URUMQI & BEYOND
            </div>
            <div
              style={{
                fontFamily: '"Rajdhani", sans-serif',
                fontSize: 14,
                color: "rgba(255, 255, 255, 0.55)",
                lineHeight: 1.7,
              }}
            >
              Explore Apak Hoja Tomb before flying to Urumqi. Immerse yourself in the vibrant Grand Bazaar, Heavenly Lake
              and Xinjiang Museum. Dine at EDEN Café and The Silk Road Restaurant before your private return flight.
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
            {[
              ["✈", "AIR TRANSFER"],
              ["🏨", "FIVE STAR"],
              ["🏛", "HERITAGE"],
              ["🛡", "VIP SECURE"],
            ].map(([icon, label]) => (
              <div
                key={label}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(232, 130, 26, 0.3)",
                  padding: "12px 14px",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                <div style={{ fontSize: 18, marginBottom: 4 }}>{icon}</div>
                <div
                  style={{
                    fontFamily: '"Rajdhani", sans-serif',
                    fontSize: 9,
                    color: "var(--amber)",
                    letterSpacing: "0.16em",
                    fontWeight: 700,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <Link
            href="/packages"
            className="btn-ghost"
            style={{
              display: "inline-block",
              color: "var(--amber)",
              border: "1px solid var(--amber)",
              fontFamily: '"Rajdhani", sans-serif',
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.16em",
              padding: "13px 40px",
              clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
              textDecoration: "none",
            }}
          >
            VIEW FULL ITINERARY & BOOK
          </Link>
        </div>
      </div>
    </section>
  );
}
