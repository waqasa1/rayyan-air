export default function StatsBar() {
  const stats = [
    ["25+", "YEARS OPERATIONAL"],
    ["500+", "CHARTER MISSIONS"],
    ["12", "COUNTRIES SERVED"],
    ["100%", "SAFETY RECORD"],
  ];
  return (
    <div style={{ background: "var(--amber)", padding: "24px 20px" }}>
      <div className="stats-grid" style={{ maxWidth: 1200, margin: "0 auto" }}>
        {stats.map(([n, l], i) => (
          <div
            key={i}
            className="stats-item"
            style={{
              textAlign: "center",
              padding: "10px 0",
            }}
          >
            <div
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: 38,
                color: "#fff",
                letterSpacing: "0.04em",
                lineHeight: 1,
              }}
            >
              {n}
            </div>
            <div
              style={{
                fontFamily: '"Rajdhani", sans-serif',
                fontSize: 10,
                color: "rgba(255,255,255,0.85)",
                letterSpacing: "0.18em",
                fontWeight: 700,
                marginTop: 4,
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
