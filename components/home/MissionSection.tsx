import Image from "next/image";

export default function MissionSection() {
  const pts = [
    [
      "GLOBAL CONNECTIVITY",
      "Building a thriving tourism corridor connecting Pakistan with China, Middle East and Central Asia, tapping into their booming industries.",
    ],
    [
      "SHARED PROSPERITY",
      "Linking civilizations through tourism and trade for shared prosperity along the historic Silk Road routes.",
    ],
    [
      "TOURISM DIPLOMACY",
      "Strengthening bilateral ties through tourism-driven diplomacy, positioning Pakistan as a strategic bridge in regional trade.",
    ],
  ];
  return (
    <section style={{ padding: "100px 44px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "420px 1fr", gap: 80, alignItems: "center" }}>
        {/* Officer card */}
        <div style={{ position: "relative" }}>
          <div
            className="clip-path-card"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--amber-border)",
              padding: 36,
            }}
          >
            <div
              style={{
                background: "var(--navy)",
                padding: "7px 14px",
                marginBottom: 24,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid var(--amber-border)",
              }}
            >
              <span
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  fontSize: 10,
                  color: "var(--amber)",
                  letterSpacing: "0.2em",
                  fontWeight: 700,
                }}
              >
                OFFICER PROFILE · RAYYAN AIR
              </span>
              <span style={{ fontFamily: '"Rajdhani", sans-serif', fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em" }}>
                ID: RA-001
              </span>
            </div>
            {/* CEO Image */}
            <div
              style={{
                width: "100%",
                height: 250,
                marginBottom: 20,
                background: "linear-gradient(145deg, #162540 0%, #0d1e35 100%)",
                border: "2px solid var(--amber-border)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/pilot_and_ceo.jpeg"
                alt="Captain F.S. Bhatti"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "rgba(232, 130, 26, 0.9)",
                  padding: "4px 0",
                  textAlign: "center",
                  fontFamily: '"Rajdhani", sans-serif',
                  fontSize: 9,
                  color: "#fff",
                  letterSpacing: "0.15em",
                  fontWeight: 700,
                  zIndex: 1,
                }}
              >
                CPT. F.S. BHATTI
              </div>
            </div>
            <div
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 22,
                color: "var(--cream)",
                fontWeight: 600,
                marginBottom: 2,
              }}
            >
              Captain F.S. Bhatti
            </div>
            <div
              style={{
                fontFamily: '"Rajdhani", sans-serif',
                fontSize: 12,
                color: "var(--amber)",
                letterSpacing: "0.16em",
                fontWeight: 700,
                marginBottom: 4,
              }}
            >
              FOUNDER & CEO
            </div>
            <div
              style={{
                fontFamily: '"Rajdhani", sans-serif',
                fontSize: 11,
                color: "var(--muted)",
                letterSpacing: "0.1em",
                marginBottom: 18,
              }}
            >
              PAF VETERAN · AVIATION PROFESSIONAL
            </div>
            <div
              style={{
                borderTop: "1px solid var(--amber-border)",
                paddingTop: 16,
                fontFamily: '"Cormorant Garamond", serif',
                fontStyle: "italic",
                fontSize: 15,
                color: "rgba(255, 255, 255, 0.55)",
                lineHeight: 1.65,
              }}
            >
              "Linking civilizations through tourism and trade."
            </div>
          </div>
          {/* Corner accents */}
          <div
            style={{
              position: "absolute",
              top: -8,
              right: -8,
              width: 36,
              height: 36,
              border: "2px solid var(--amber)",
              borderLeft: "none",
              borderBottom: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -8,
              left: -8,
              width: 36,
              height: 36,
              border: "2px solid var(--amber)",
              borderRight: "none",
              borderTop: "none",
            }}
          />
        </div>

        {/* Mission points */}
        <div>
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
            ◆ OUR MANDATE
          </div>
          <h2
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: 64,
              color: "#fff",
              lineHeight: 0.9,
              marginBottom: 36,
            }}
          >
            OUR
            <br />
            MISSION
          </h2>
          {pts.map(([t, d], i) => (
            <div key={i} style={{ display: "flex", gap: 20, marginBottom: 28 }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  flexShrink: 0,
                  background: "var(--amber-dim)",
                  border: "1px solid var(--amber)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: '"Rajdhani", sans-serif',
                  fontSize: 13,
                  color: "var(--amber)",
                  fontWeight: 700,
                }}
              >
                0{i + 1}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: '"Rajdhani", sans-serif',
                    fontSize: 13,
                    color: "var(--amber)",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    marginBottom: 5,
                  }}
                >
                  {t}
                </div>
                <div
                  style={{
                    fontFamily: '"Rajdhani", sans-serif',
                    fontSize: 15,
                    color: "rgba(255, 255, 255, 0.6)",
                    lineHeight: 1.6,
                  }}
                >
                  {d}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
