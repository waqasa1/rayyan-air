export default function StatsBar() {
  const stats = [
    ["25+", "YEARS OPERATIONAL"],
    ["500+", "CHARTER MISSIONS"],
    ["12", "COUNTRIES SERVED"],
    ["100%", "SAFETY RECORD"],
  ];
  return (
    <div style={{ background: "var(--amber)", padding: "18px 44px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {stats.map(([n, l], i) => (
          <div
            key={i}
            style={{
              textAlign: "center",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.28)" : "none",
              padding: "6px 0",
            }}
          >
            <div
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: 38,
                color: "#fff",
                letterSpacing: "0.04em",
              }}
            >
              {n}
            </div>
            <div
              style={{
                fontFamily: '"Rajdhani", sans-serif',
                fontSize: 11,
                color: "rgba(255,255,255,0.78)",
                letterSpacing: "0.18em",
                fontWeight: 700,
              }}
            >
              {l}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
