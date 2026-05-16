import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", textDecoration: "none" }}>
      <div style={{ position: "relative", width: 56, height: 46 }}>
        <Image
          src="/images/logo_rayan.png"
          alt="Rayyan Air Logo"
          fill
          sizes="56px"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div>
        <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 19, fontWeight: 600, color: "#fff", letterSpacing: "0.06em", lineHeight: 1 }}>
          Rayyan <span style={{ color: "var(--amber)" }}>Air</span>
        </div>
        <div style={{ fontFamily: '"Rajdhani", sans-serif', fontSize: 9, color: "var(--muted)", letterSpacing: "0.22em", fontWeight: 700, marginTop: 1 }}>
          PRIVATE CHARTERS · EST. 2000
        </div>
      </div>
    </Link>
  );
}
