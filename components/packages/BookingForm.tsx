"use client";

import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", pax: "2", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email && form.phone) setSubmitted(true);
  };

  return (
    <div
      className="clip-path-card"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--amber-border)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: "var(--amber)",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 22, color: "#fff" }}>
            BOOK THIS EXPEDITION
          </div>
          <div
            style={{
              fontFamily: '"Rajdhani", sans-serif',
              fontSize: 10,
              color: "rgba(255, 255, 255, 0.78)",
              letterSpacing: "0.12em",
            }}
          >
            SECURE YOUR SEAT · LIMITED AVAILABILITY
          </div>
        </div>
        <div style={{ fontSize: 26 }}>✈</div>
      </div>
      <div style={{ padding: 26 }}>
        {submitted ? (
          <div style={{ textAlign: "center", padding: "32px 16px" }}>
            <div style={{ fontSize: 44, marginBottom: 14 }}>✅</div>
            <div
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: 28,
                color: "var(--amber)",
                marginBottom: 8,
              }}
            >
              BOOKING RECEIVED
            </div>
            <div
              style={{
                fontFamily: '"Rajdhani", sans-serif',
                fontSize: 14,
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              Our concierge team will contact you within 24 hours at {form.email} to confirm your expedition details.
            </div>
            <div style={{ marginTop: 18, fontFamily: '"Rajdhani", sans-serif', fontSize: 12, color: "var(--amber)" }}>
              WhatsApp: +92 333 777 9933
            </div>
          </div>
        ) : (
          <>
            {[
              ["FULL NAME", "name", "text", "Your full name"],
              ["EMAIL ADDRESS", "email", "email", "your@email.com"],
              ["WHATSAPP NUMBER", "phone", "tel", "+92 300 000 0000"],
            ].map(([lbl, field, type, ph]) => (
              <div key={field} style={{ marginBottom: 14 }}>
                <div
                  style={{
                    fontFamily: '"Rajdhani", sans-serif',
                    fontSize: 10,
                    color: "var(--amber)",
                    letterSpacing: "0.2em",
                    fontWeight: 700,
                    marginBottom: 5,
                  }}
                >
                  {lbl}
                </div>
                <input
                  type={type}
                  placeholder={ph}
                  value={(form as any)[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  style={{
                    width: "100%",
                    background: "#fff",
                    border: "1px solid var(--amber-border)",
                    color: "var(--navy)",
                    padding: "9px 13px",
                    fontFamily: '"Rajdhani", sans-serif',
                    fontSize: 14,
                  }}
                />
              </div>
            ))}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
              <div>
                <div
                  style={{
                    fontFamily: '"Rajdhani", sans-serif',
                    fontSize: 10,
                    color: "var(--amber)",
                    letterSpacing: "0.2em",
                    fontWeight: 700,
                    marginBottom: 5,
                  }}
                >
                  DEPARTURE DATE
                </div>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  style={{
                    width: "100%",
                    background: "#fff",
                    border: "1px solid var(--amber-border)",
                    color: "var(--navy)",
                    padding: "9px 13px",
                    fontFamily: '"Rajdhani", sans-serif',
                    fontSize: 13,
                  }}
                />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: '"Rajdhani", sans-serif',
                    fontSize: 10,
                    color: "var(--amber)",
                    letterSpacing: "0.2em",
                    fontWeight: 700,
                    marginBottom: 5,
                  }}
                >
                  PASSENGERS
                </div>
                <select
                  value={form.pax}
                  onChange={(e) => setForm({ ...form, pax: e.target.value })}
                  style={{
                    width: "100%",
                    background: "#fff",
                    border: "1px solid var(--amber-border)",
                    color: "var(--navy)",
                    padding: "9px 13px",
                    fontFamily: '"Rajdhani", sans-serif',
                    fontSize: 13,
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "10+"].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div style={{ marginBottom: 18 }}>
              <div
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  fontSize: 10,
                  color: "var(--amber)",
                  letterSpacing: "0.2em",
                  fontWeight: 700,
                  marginBottom: 5,
                }}
              >
                SPECIAL REQUIREMENTS
              </div>
              <textarea
                rows={3}
                placeholder="Dietary needs, mobility requirements, special requests..."
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                style={{
                  width: "100%",
                  background: "#fff",
                  border: "1px solid var(--amber-border)",
                  color: "var(--navy)",
                  padding: "9px 13px",
                  fontFamily: '"Rajdhani", sans-serif',
                  fontSize: 14,
                  resize: "vertical",
                }}
              />
            </div>
            <button
              onClick={handleSubmit}
              className="clip-path-btn"
              style={{
                width: "100%",
                background: "var(--amber)",
                color: "#fff",
                fontFamily: '"Rajdhani", sans-serif',
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.16em",
                padding: "13px",
              }}
            >
              SUBMIT BOOKING REQUEST
            </button>
            <div
              style={{ marginTop: 14, textAlign: "center", fontFamily: '"Rajdhani", sans-serif', fontSize: 12, color: "var(--muted)" }}
            >
              Or contact:{" "}
              <a href="mailto:tours@rayyanair.com.pk" style={{ color: "var(--amber)" }}>
                tours@rayyanair.com.pk
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
