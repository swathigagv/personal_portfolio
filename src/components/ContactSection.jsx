import { useState, useRef } from "react";
import { socialLinks } from "../data/contactdata";
import '../style/Contact.css'

const icons = {
  github: (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  linkedin: (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  email: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    // Simulate sending — replace with your EmailJS / Formspree / API call
    await new Promise((res) => setTimeout(res, 1800));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="section">

      {/* Animated background blobs */}
      <div className="contact-back" />
      <div style={{
        position: "absolute", bottom: -100, right: "10%",
        width: 400, height: 400,
        background: "radial-gradient(ellipse, #5d5de80a 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 960, margin: "0 auto" }}>

        {/* Heading */}
        <div className="eyebrow"
        style={{ textAlign: "center", marginBottom: 64, animation: "fadeUp 0.6s ease forwards" }}>
          <p >
            Let's work together
          </p>
          <h2 >
            Contact Me
          </h2>
          <p >
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid-2">

          {/* LEFT — Info + socials */}
          <div style={{ animation: "fadeUp 0.6s ease 0.1s forwards", opacity: 0 }}>

            {/* Availability badge */}
            <div className="badge">
              <span style={{
                width: 8, height: 8, borderRadius: "50%", background: "#22c55e",
                boxShadow: "0 0 8px #22c55e",
                display: "inline-block",
              }} />
              <span style={{ fontSize: 12, color: "#4ade80", fontWeight: 600, letterSpacing: "0.04em" }}>
                Available for work
              </span>
            </div>

            <h3 >
              Let's build something great
            </h3>
            <p style={{ marginTop:"25",
            }}>
              I'm a React & Frontend Developer based in India, open to freelance projects,
              full-time roles, and collaborations. Feel free to reach out through the form
              or any of the channels below.
            </p>

            {/* Social links */}
            <div 
            style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="social-link-card">
                  <span >{s.icon}</span>
                  <div>
                    <p >
                      {s.label}
                    </p>
                    <p >{s.handle}</p>
                  </div>
                  <svg style={{ marginLeft: "auto", color: "#2a2a3a" }} width="16" height="16"
                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

          </div>

          {/* RIGHT — Contact form */}
          <div 
          className="contact-card"
         >

            {status === "sent" ? (
              <div className="sent-state" style={{
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                minHeight: 340, gap: 16, textAlign: "center",
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: "50%",
                  background: "#0e1f0e", border: "1px solid #22c55e33",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="28" height="28" fill="none" stroke="#22c55e" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif", fontSize: 20,
                  fontWeight: 700, color: "#f1f1f5", margin: 0,
                }}>
                  Message Sent!
                </h3>
                <p style={{ fontSize: 13, color: "#5a5a7a", margin: 0, lineHeight: 1.6 }}>
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    marginTop: 8, fontSize: 13, color: "#e85d5d",
                    background: "none", border: "none", cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                    textDecoration: "underline", textUnderlineOffset: 3,
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                <div>
                  <label className="field-label">Your Name</label>
                  <input
                    className="contact-input"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    required
                  />
                </div>

                <div>
                  <label className="field-label">Email Address</label>
                  <input
                    className="contact-input"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    required
                  />
                </div>

                <div>
                  <label className="field-label">Message</label>
                  <textarea
                    className="contact-input"
                    name="message"
                    rows={5}
                    placeholder="Hi! I'd like to talk about..."
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                      <svg style={{ animation: "spin 0.8s linear infinite" }}
                        width="16" height="16" fill="none" stroke="currentColor"
                        strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" d="M12 2a10 10 0 0110 10" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                      Send Message
                      <svg width="16" height="16" fill="none" stroke="currentColor"
                        strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </span>
                  )}
                </button>

                <p style={{ fontSize: 11, color: "#2e2e4a", textAlign: "center", margin: 0 }}>
                  I typically reply within 24 hours.
                </p>

              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: 80,
          paddingTop: 24,
          borderTop: "1px solid #ffffff08",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          animation: "fadeUp 0.6s ease 0.4s forwards",
          opacity: 0,
        }}>
          <p style={{ fontSize: 14, color: "#2e2e4a", margin: 0 }}>
            © {new Date().getFullYear()} · Built with React
          </p>
          <p style={{ fontSize: 14, color: "#2e2e4a", margin: 0 }}>
            Designed & Developed by <span style={{ color: "#e85d5d" }}>You</span>
          </p>
        </div>
      </div>
    </section>
  );
}