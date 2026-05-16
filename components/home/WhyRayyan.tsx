import GridBg from "../GridBg";

export default function WhyRayyan() {
  const reasons = [
    [
      "VIP LUXURY",
      "var(--amber)",
      "Every detail caters to the highest standards. Handpicked 5-star accommodations, private transfers and personalized services throughout.",
    ],
    [
      "SEAMLESS TRANSITIONS",
      "var(--gold)",
      "Zero-friction border crossings. Our regional expertise and VIP assistance handles logistics while you enjoy the journey.",
    ],
    [
      "CULTURAL IMMERSION",
      "var(--green)",
      "Exclusive access to heritage sites and authentic culinary experiences not available to the general public.",
    ],
  ];
  return (
    <section
      style={{
        padding: "100px 44px",
        position: "relative",
        overflow: "hidden",
        background: `radial-gradient(ellipse at center top, rgba(26, 92, 56, 0.18) 0%, transparent 55%), var(--bg-card)`,
      }}
    >
      <GridBg opacity={0.025} />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: "clamp(44px, 7vw, 82px)",
              color: "#fff",
            }}
          >
            WHY RAYYAN AIR?
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {reasons.map(([title, color, desc]) => (
            <div
              key={title}
              style={{
                padding: "38px 30px",
                border: `1px solid ${color === "var(--amber)" ? "rgba(232,130,26,0.15)" : color === "var(--gold)" ? "rgba(201,168,76,0.15)" : "rgba(26,92,56,0.15)"}`,
                borderTop: `3px solid ${color}`,
                background: color === "var(--amber)" ? "rgba(232,130,26,0.03)" : color === "var(--gold)" ? "rgba(201,168,76,0.03)" : "rgba(26,92,56,0.03)",
              }}
            >
              <div
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: 28,
                  color,
                  marginBottom: 16,
                  letterSpacing: "0.04em",
                }}
              >
                {title}
              </div>
              <div
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  fontSize: 15,
                  color: "rgba(255, 255, 255, 0.58)",
                  lineHeight: 1.75,
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
