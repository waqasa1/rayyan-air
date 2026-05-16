import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", textDecoration: "none" }}>
      <div style={{ position: "relative", width: 140, height: 140, marginTop: -5 }}>
        <Image
          src="/images/logo_rayan.png"
          alt="Rayyan Air Logo"
          fill
          sizes="140px"
          priority
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="hide-mobile">
        <div style={{ fontFamily: '"Rajdhani", sans-serif', fontSize: 9, color: "var(--muted)", letterSpacing: "0.22em", fontWeight: 700, marginTop: 25 }}>
          PRIVATE CHARTERS · EST. 2000
        </div>
      </div>
    </Link>

  );
}
