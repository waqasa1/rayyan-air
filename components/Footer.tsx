import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "HOME", path: "/" },
    { name: "PACKAGES", path: "/packages" },
    { name: "GALLERY", path: "/gallery" },
    { name: "ABOUT", path: "/about" },
  ];

  const services = ["Private Charters", "Cargo Services", "UNHCR Relief Ops", "Aircraft Management"];
  const connect = ["Privacy Policy", "Press Office", "Terms of Service", "Cargo Tracking"];

  return (
    <footer
      style={{
        background: "#F3F4F6",
        borderTop: "1px solid var(--amber-border)",
        padding: "60px 44px 30px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 60, marginBottom: 48 }}>
          <div>
            <Logo />
            <div
              style={{
                fontFamily: '"Rajdhani", sans-serif',
                fontSize: 14,
                color: "var(--muted)",
                lineHeight: 1.75,
                marginTop: 16,
                maxWidth: 280,
              }}
            >
              Specializing in innovative aviation solutions since 2000. Building Pakistan's future through strategic tourism and trade corridors along the Silk Road.
            </div>
          </div>

          <div>
            <div style={{ fontFamily: '"Rajdhani", sans-serif', fontSize: 11, color: "var(--amber)", letterSpacing: "0.2em", fontWeight: 700, marginBottom: 18 }}>
              QUICK LINKS
            </div>
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="footlink"
                style={{ display: "block", marginBottom: 10, fontFamily: '"Rajdhani", sans-serif', fontSize: 14, color: "var(--muted)" }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: '"Rajdhani", sans-serif', fontSize: 11, color: "var(--amber)", letterSpacing: "0.2em", fontWeight: 700, marginBottom: 18 }}>
              SERVICES
            </div>
            {services.map((item) => (
              <div
                key={item}
                className="footlink"
                style={{ marginBottom: 10, fontFamily: '"Rajdhani", sans-serif', fontSize: 14, color: "var(--muted)" }}
              >
                {item}
              </div>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: '"Rajdhani", sans-serif', fontSize: 11, color: "var(--amber)", letterSpacing: "0.2em", fontWeight: 700, marginBottom: 18 }}>
              CONNECT
            </div>
            {connect.map((item) => (
              <div
                key={item}
                className="footlink"
                style={{ marginBottom: 10, fontFamily: '"Rajdhani", sans-serif', fontSize: 14, color: "var(--muted)" }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--amber-border)",
            paddingTop: 22,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ fontFamily: '"Rajdhani", sans-serif', fontSize: 12, color: "var(--muted)" }}>
            © 2025 Rayyan Air (Pvt.) Ltd. All Rights Reserved.
          </div>
          <div style={{ fontFamily: '"Rajdhani", sans-serif', fontSize: 12, color: "var(--muted)" }}>
            PCAA Licensed · AOC Certified · UNHCR Partner
          </div>
        </div>
      </div>
    </footer>
  );
}
