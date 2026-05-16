export default function Facilities() {
  const items = [
    [
      "$70,000",
      "HEALTH COVERAGE",
      "Comprehensive international medical insurance for every expedition participant.",
    ],
    ["PRIORITY", "VISA ASSISTANCE", "Expert diplomatic handling for smooth Pakistan–China border crossings."],
    ["24/7", "FIRST AID SUPPORT", "Trained guides with first aid kits accompany every high-altitude leg."],
    ["LIVE", "WECHAT SUPPORT", "Constant communication support and real-time translation throughout."],
  ];
  return (
    <section style={{ padding: "100px 44px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}
        >
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
              ◆ CONCIERGE & FACILITIES
            </div>
            <h2
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: 64,
                color: "var(--navy)",
                lineHeight: 0.95,
              }}
            >
              MISSION
              <br />
              SUPPORT
            </h2>
          </div>
          <div
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontStyle: "italic",
              fontSize: 17,
              color: "var(--muted)",
              maxWidth: 300,
              lineHeight: 1.65,
            }}
          >
            Rayyan Air ensures absolute peace of mind through comprehensive support infrastructure designed for the most
            demanding frontiers.
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
          {items.map(([badge, title, desc], i) => (
            <div
              key={i}
              style={{ background: "var(--bg-card)", padding: "34px 26px", borderTop: "3px solid var(--amber)" }}
            >
              <div
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: 30,
                  color: "var(--amber)",
                  letterSpacing: "0.04em",
                  marginBottom: 8,
                }}
              >
                {badge}
              </div>
              <div
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  fontSize: 13,
                  color: "var(--navy)",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  marginBottom: 12,
                }}
              >
                {title}
              </div>
              <div
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  fontSize: 14,
                  color: "var(--muted)",
                  lineHeight: 1.5,
                }}
              >
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
