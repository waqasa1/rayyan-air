import GridBg from "../../components/GridBg";
import Crosshair from "../../components/Crosshair";

export default function AboutPage() {
  return (
    <div>
      <div
        style={{
          background: "var(--bg)",
          padding: "90px 44px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <GridBg opacity={0.03} />
        <Crosshair top={60} right={100} opacity={0.1} />
        <div className="max-w-[1200px] mx-auto relative z-[1]">
          <div
            style={{
              fontFamily: '"Rajdhani", sans-serif',
              fontSize: 11,
              color: "var(--amber)",
              letterSpacing: "0.2em",
              fontWeight: 700,
              marginBottom: 12,
            }}
          >
            ◆ THE COMMAND
          </div>
          <h1
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: "clamp(52px, 9vw, 90px)",
              color: "var(--navy)",
              marginBottom: 50,
            }}
          >
            ABOUT RAYYAN AIR
          </h1>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
            <div>
              <div
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: 21,
                  color: "var(--cream)",
                  lineHeight: 1.8,
                  marginBottom: 24,
                }}
              >
                Rayyan Air (Pvt.) Ltd. is a Pakistani aviation company established in 2000 by Captain F.S. Bhatti, a
                former Pakistan Air Force officer with extensive experience in international aviation operations and
                specialized aviation solutions.
              </div>
              <div
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  fontSize: 15,
                  color: "var(--muted)",
                  lineHeight: 1.8,
                  marginBottom: 24,
                }}
              >
                The company has led transformative charter projects worldwide, including UNHCR relief operations and
                strategic joint ventures with PIA and Airblue — playing a key role in establishing these airlines as
                major UN logistics partners.
              </div>
              <div
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  fontSize: 15,
                  color: "var(--muted)",
                  lineHeight: 1.8,
                }}
              >
                Captain Bhatti also founded Al-Rayyan Aviation Services (UAE) in 2000. Currently focused on land and air
                connectivity initiatives for CPEC, fostering Pakistan-China bilateral tourism, and strengthening links
                between China and the Arab world, positioning Pakistan as a strategic bridge in regional trade.
              </div>
            </div>
            <div>
              {[
                [
                  "OFFICE ADDRESS",
                  "5th Floor, Peace Tower, Plot 9-10\nBusiness Square, Gulberg Green\nIslamabad, Pakistan",
                ],
                ["EMAIL", "tours@rayyanair.com.pk\nrayyanair@gmail.com"],
                ["CALL / WHATSAPP / WECHAT", "+92 333 777 9933\n+92 317 777 9933\n+92 317 588 5657"],
              ].map(([label, value]) => (
                <div key={label} style={{ marginBottom: 28 }}>
                  <div
                    style={{
                      fontFamily: '"Rajdhani", sans-serif',
                      fontSize: 11,
                      color: "var(--amber)",
                      letterSpacing: "0.2em",
                      fontWeight: 700,
                      marginBottom: 8,
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: '"Rajdhani", sans-serif',
                      fontSize: 15,
                      color: "var(--navy)",
                      lineHeight: 1.8,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
              <div
                style={{
                  marginTop: 32,
                  padding: 24,
                  background: "var(--bg-card)",
                  border: "1px solid var(--amber-border)",
                  borderLeft: "4px solid var(--amber)",
                }}
              >
                <div
                  style={{
                    fontFamily: '"Rajdhani", sans-serif',
                    fontSize: 11,
                    color: "var(--amber)",
                    letterSpacing: "0.2em",
                    fontWeight: 700,
                    marginBottom: 8,
                  }}
                >
                  CERTIFICATIONS
                </div>
                {[
                  "PCAA Licensed Air Operator Certificate",
                  "UNHCR Logistics Partner",
                  "Joint Ventures with PIA & Airblue",
                  "Cargo Operations: Pakistan, UAE, China, Africa",
                ].map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", padding: "6px 0" }}>
                    <div style={{ color: "var(--amber)", fontSize: 14 }}>◆</div>
                    <div
                      style={{
                        fontFamily: '"Rajdhani", sans-serif',
                        fontSize: 14,
                        color: "var(--muted)",
                      }}
                    >
                      {c}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
