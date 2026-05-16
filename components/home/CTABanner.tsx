import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      style={{ padding: "72px 44px", background: "var(--amber)", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.08,
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <h2
          style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: "clamp(36px, 5vw, 64px)",
            color: "#fff",
            marginBottom: 12,
          }}
        >
          RESERVE YOUR SEAT ON THE SILK ROAD
        </h2>
        <div
          style={{
            fontFamily: '"Rajdhani", sans-serif',
            fontSize: 16,
            color: "rgba(255, 255, 255, 0.85)",
            marginBottom: 32,
          }}
        >
          Limited availability for our next expedition. Submit your itinerary request to begin your journey.
        </div>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/packages"
            className="clip-path-btn"
            style={{
              display: "inline-block",
              background: "#fff",
              color: "var(--amber)",
              fontFamily: '"Rajdhani", sans-serif',
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.16em",
              padding: "13px 36px",
              textDecoration: "none",
            }}
          >
            BOOK EXPEDITION
          </Link>
          <a
            href="tel:+923337779933"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "transparent",
              color: "#fff",
              border: "2px solid rgba(255, 255, 255, 0.55)",
              fontFamily: '"Rajdhani", sans-serif',
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.1em",
              padding: "11px 36px",
            }}
          >
            CALL +92 333 777 9933
          </a>
        </div>
      </div>
    </section>
  );
}
