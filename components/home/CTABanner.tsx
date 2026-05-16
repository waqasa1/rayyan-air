import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      style={{ padding: "80px 20px", background: "var(--amber)", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.1,
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <h2
          style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: "clamp(32px, 8vw, 64px)",
            color: "var(--navy)",
            marginBottom: 16,
            lineHeight: 1,
          }}
        >
          RESERVE YOUR SEAT ON THE SILK ROAD
        </h2>
        <div
          style={{
            fontFamily: '"Rajdhani", sans-serif',
            fontSize: "clamp(14px, 4vw, 18px)",
            color: "rgba(13, 27, 46, 0.75)",
            marginBottom: 40,
            maxWidth: 600,
            margin: "0 auto 40px",
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
              background: "var(--navy)",
              color: "#fff",
              fontFamily: '"Rajdhani", sans-serif',
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.16em",
              padding: "13px 40px",
              textDecoration: "none",
              minWidth: 200,
            }}
          >
            BOOK EXPEDITION
          </Link>
          <a
            href="tel:+923337779933"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              color: "var(--navy)",
              border: "2px solid var(--navy)",
              fontFamily: '"Rajdhani", sans-serif',
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.1em",
              padding: "11px 40px",
              minWidth: 200,
            }}
          >
            CALL +92 333 777 9933
          </a>
        </div>
      </div>
    </section>

  );
}
