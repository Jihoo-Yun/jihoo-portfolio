"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const PROJECTS = [
  {
    id: "shrodin",
    tag: "Branding · UI/UX · App",
    title: "Shrödin Album",
    sub: "AI photo app — sole designer, shipped",
    badge: "Shipped · Solo",
    badgeColor: "#4ade80",
    badgeBg: "rgba(74,222,128,0.12)",
    badgeBorder: "rgba(74,222,128,0.25)",
    bg: "linear-gradient(145deg, #050010, #120030)",
    href: "/shrodin",
    featured: true,
  },
  {
    id: "pixeltone",
    tag: "UI/UX · Research · Accessibility",
    title: "Pixeltone",
    sub: "AI arts app for disabilities · Award winner",
    badge: "Award Winner",
    badgeColor: "#fbbf24",
    badgeBg: "rgba(251,191,36,0.1)",
    badgeBorder: "rgba(251,191,36,0.25)",
    bg: "linear-gradient(145deg, #150010, #2d0020)",
    href: "/pixeltone",
    featured: false,
  },
  {
    id: "modun",
    tag: "UI/UX · Design System · Product",
    title: "Modun-Seonji",
    sub: "EdTech rebrand · Contributed to VC round",
    badge: "VC Funded",
    badgeColor: "#c4b5fd",
    badgeBg: "rgba(167,139,250,0.1)",
    badgeBorder: "rgba(167,139,250,0.25)",
    bg: "linear-gradient(145deg, #001510, #002d1c)",
    href: "/modun",
    featured: false,
  },
  {
    id: "payco",
    tag: "SNS · Promotion · Banner",
    title: "NHN PAYCO",
    sub: "Fintech · Onboarding cut 85%",
    badge: "Fintech",
    badgeColor: "rgba(148,163,184,0.7)",
    badgeBg: "rgba(148,163,184,0.08)",
    badgeBorder: "rgba(148,163,184,0.2)",
    bg: "linear-gradient(145deg, #000510, #000d2e)",
    href: "/payco",
    featured: false,
  },
  {
    id: "cedarstone",
    tag: "Branding · Logo · Web",
    title: "CedarStone",
    sub: "Investment firm · Full brand system",
    badge: "$300K Contract",
    badgeColor: "rgba(148,163,184,0.7)",
    badgeBg: "rgba(148,163,184,0.08)",
    badgeBorder: "rgba(148,163,184,0.2)",
    bg: "linear-gradient(145deg, #001a12, #003d28)",
    href: "/cedarstone",
    featured: false,
  },
];

const STATS = [
  { num: "$300K+", label: "In contracts secured\nvia design strategy" },
  { num: "5", label: "Products designed\nacross 3 industries" },
  { num: "Solo", label: "Live app shipped\nconcept to App Store" },
  { num: "85%", label: "Onboarding time\ncut at NHN PAYCO" },
];

const SKILLS = [
  "Product Design", "Brand Systems", "UI · UX",
  "Design Systems", "Figma", "User Research",
  "Prototyping", "Framer", "Visual Identity", "Strategy",
];

export default function HomePage() {
  return (
    <main style={{
      background: "#080808",
      color: "#fff",
      fontFamily: "'DM Sans', sans-serif",
      minHeight: "100vh",
      overflowX: "hidden",
    }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@300;400;500;700;800&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      {/* NAV */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 48px",
          borderBottom: "0.5px solid rgba(255,255,255,0.07)",
          backdropFilter: "blur(20px)",
          background: "rgba(8,8,8,0.85)",
        }}
      >
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 600, fontSize: 15, color: "#fff",
        }}>
          Jihoo Yoon
        </span>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {["Work", "About"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none",
            }}>
              {item}
            </a>
          ))}
          <a href="/resume.pdf" style={{
            fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none",
          }}>
            Resume
          </a>
        </div>
        <div style={{
          display: "flex", alignItems: "center", gap: 6,
          fontSize: 11, padding: "5px 12px", borderRadius: 20,
          background: "rgba(34,197,94,0.12)", color: "#4ade80",
          border: "0.5px solid rgba(74,222,128,0.25)",
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: "50%",
            background: "#4ade80", display: "inline-block",
            animation: "pulse 2s infinite",
          }} />
          Open to work · SF Bay Area
        </div>
      </motion.nav>

      {/* HERO */}
      <section style={{ padding: "160px 48px 80px" }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}
        >
          <div style={{ width: 22, height: 1, background: "rgba(255,255,255,0.25)" }} />
          <span style={{
            fontFamily: "'DM Mono', monospace", fontSize: 11,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
          }}>
            Product Designer · San Francisco, CA · PR Holder
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 300,
            fontSize: "clamp(40px, 5.5vw, 72px)",
            lineHeight: 1.05, letterSpacing: "-0.025em",
            marginBottom: 8, maxWidth: 800,
          }}
        >
          Design that
          <br />
          <span style={{ color: "rgba(255,255,255,0.38)", fontStyle: "italic" }}>
            doesn&apos;t just look good —
          </span>
          <br />
          <span style={{
            background: "linear-gradient(90deg, #c4b5fd 0%, #a5b4fc 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 400,
          }}>
            moves things forward.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          style={{
            fontSize: 15, color: "rgba(255,255,255,0.42)",
            lineHeight: 1.75, maxWidth: 480, margin: "24px 0 40px",
          }}
        >
          I bridge{" "}
          <strong style={{ color: "rgba(255,255,255,0.72)", fontWeight: 500 }}>brand thinking</strong>
          {" "}and{" "}
          <strong style={{ color: "rgba(255,255,255,0.72)", fontWeight: 500 }}>product craft</strong>.
          From shipping a live AI app solo to securing{" "}
          <strong style={{ color: "rgba(255,255,255,0.72)", fontWeight: 500 }}>$300K in contracts</strong>
          {" "}through design — I design with intent, not decoration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}
        >
          <a href="#work" style={{
            background: "#fff", color: "#080808",
            padding: "11px 22px", borderRadius: 6,
            fontSize: 13, fontWeight: 500, textDecoration: "none",
          }}>
            View my work ↗
          </a>
          <a href="/resume.pdf" style={{
            background: "transparent", color: "rgba(255,255,255,0.5)",
            border: "0.5px solid rgba(255,255,255,0.15)",
            padding: "11px 22px", borderRadius: 6,
            fontSize: 13, textDecoration: "none",
          }}>
            Download resume
          </a>
          <span style={{
            fontSize: 11, color: "rgba(255,255,255,0.22)", marginLeft: 4,
          }}>
            No visa sponsorship needed
          </span>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{
            display: "flex", gap: 0, marginTop: 56,
            paddingTop: 40, borderTop: "0.5px solid rgba(255,255,255,0.07)",
            flexWrap: "wrap",
          }}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 + i * 0.08, duration: 0.5 }}
              style={{
                flex: "1 1 160px",
                paddingRight: i < STATS.length - 1 ? 32 : 0,
                marginRight: i < STATS.length - 1 ? 32 : 0,
                borderRight: i < STATS.length - 1 ? "0.5px solid rgba(255,255,255,0.07)" : "none",
                marginBottom: 16,
              }}
            >
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 26, fontWeight: 400, color: "#fff",
                letterSpacing: "-0.02em", marginBottom: 6,
              }}>
                {s.num}
              </div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10, color: "rgba(255,255,255,0.3)",
                lineHeight: 1.6, whiteSpace: "pre-line",
              }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* MARQUEE */}
      <div style={{
        borderTop: "0.5px solid rgba(255,255,255,0.05)",
        borderBottom: "0.5px solid rgba(255,255,255,0.05)",
        overflow: "hidden", padding: "14px 0",
      }}>
        <div style={{
          display: "flex", gap: 40,
          width: "max-content",
          animation: "marquee 22s linear infinite",
        }}>
          {[...SKILLS, ...SKILLS].map((s, i) => (
            <span key={i} style={{
              fontFamily: "'DM Mono', monospace", fontSize: 10,
              color: "rgba(255,255,255,0.18)", letterSpacing: "0.12em",
              textTransform: "uppercase", whiteSpace: "nowrap",
            }}>
              {s}
              <span style={{
                display: "inline-block", width: 3, height: 3,
                borderRadius: "50%", background: "rgba(255,255,255,0.1)",
                margin: "0 16px", verticalAlign: "middle",
              }} />
            </span>
          ))}
        </div>
      </div>

      {/* WORK */}
      <section id="work" style={{ padding: "64px 0 0" }}>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", padding: "0 48px 20px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 18, height: 1, background: "rgba(255,255,255,0.18)" }} />
            <span style={{
              fontFamily: "'DM Mono', monospace", fontSize: 10,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.28)",
            }}>
              Selected work
            </span>
          </div>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 10, color: "rgba(255,255,255,0.2)",
          }}>
            5 projects
          </span>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 2, padding: "0 2px 2px",
        }}>
          {/* Featured card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            style={{
              gridRow: "1 / 3",
              position: "relative", overflow: "hidden",
              cursor: "pointer", minHeight: 400,
              background: PROJECTS[0].bg,
            }}
          >
            <Link href={PROJECTS[0].href} style={{ textDecoration: "none" }}>
              <div style={{
                position: "absolute", top: 20, right: 20,
                fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "4px 9px", borderRadius: 4,
                background: PROJECTS[0].badgeBg,
                color: PROJECTS[0].badgeColor,
                border: `0.5px solid ${PROJECTS[0].badgeBorder}`,
              }}>
                {PROJECTS[0].badge}
              </div>
              {/* Phone mockups */}
              <div style={{
                position: "absolute", top: 28, right: 28,
                display: "flex", gap: 8, alignItems: "flex-start",
              }}>
                {[
                  { bg: "rgba(0,255,133,0.06)", border: "rgba(0,255,133,0.15)", mt: 0 },
                  { bg: "rgba(128,0,255,0.1)", border: "rgba(128,0,255,0.2)", mt: 12 },
                  { bg: "rgba(0,255,133,0.03)", border: "rgba(255,255,255,0.08)", mt: 6 },
                ].map((p, i) => (
                  <div key={i} style={{
                    width: 40, height: 70, borderRadius: 7,
                    background: p.bg, border: `0.5px solid ${p.border}`,
                    marginTop: p.mt,
                  }} />
                ))}
              </div>
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "24px 28px",
              }}>
                <div style={{
                  fontFamily: "'DM Mono', monospace", fontSize: 10,
                  color: "rgba(255,255,255,0.38)", letterSpacing: "0.08em", marginBottom: 6,
                }}>
                  {PROJECTS[0].tag}
                </div>
                <div style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 22, fontWeight: 500, color: "#fff", lineHeight: 1.2,
                }}>
                  {PROJECTS[0].title}
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", marginTop: 5 }}>
                  {PROJECTS[0].sub}
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Right 4 cards */}
          {PROJECTS.slice(1).map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              style={{
                position: "relative", overflow: "hidden",
                cursor: "pointer", aspectRatio: "16/9",
                background: p.bg,
              }}
            >
              <Link href={p.href} style={{ textDecoration: "none" }}>
                <div style={{
                  position: "absolute", top: 14, right: 14,
                  fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase",
                  padding: "3px 8px", borderRadius: 4,
                  background: p.badgeBg, color: p.badgeColor,
                  border: `0.5px solid ${p.badgeBorder}`,
                }}>
                  {p.badge}
                </div>
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  padding: "16px 20px",
                }}>
                  <div style={{
                    fontFamily: "'DM Mono', monospace", fontSize: 9,
                    color: "rgba(255,255,255,0.38)", letterSpacing: "0.08em", marginBottom: 4,
                  }}>
                    {p.tag}
                  </div>
                  <div style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 15, fontWeight: 500, color: "#fff",
                  }}>
                    {p.title}
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", marginTop: 3 }}>
                    {p.sub}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{
        display: "grid", gridTemplateColumns: "1fr 1.5fr",
        gap: 56, alignItems: "center",
        padding: "80px 48px",
        borderTop: "0.5px solid rgba(255,255,255,0.06)",
      }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 10,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.28)", marginBottom: 18,
            display: "flex", alignItems: "center", gap: 8,
          }}>
            <div style={{ width: 16, height: 1, background: "rgba(255,255,255,0.2)" }} />
            About me
          </div>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 28, fontWeight: 300, color: "#fff",
            lineHeight: 1.3, letterSpacing: "-0.01em",
          }}>
            Strategy first.<br />
            <em style={{ color: "rgba(255,255,255,0.4)" }}>Craft always.</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p style={{
            fontSize: 14, color: "rgba(255,255,255,0.48)",
            lineHeight: 1.85, marginBottom: 24,
          }}>
            I&apos;m Jihoo — a Seoul-trained,{" "}
            <strong style={{ color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>
              San Francisco-based
            </strong>{" "}
            designer who bridges brand thinking and product craft. I spent 1.5 years
            leading brand strategy at a design agency, where I learned that the best
            design starts with a clear business question.
            <br /><br />
            Now I bring that owner&apos;s mindset to product — obsessing over the moments
            where{" "}
            <strong style={{ color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>
              strategy, systems, and story
            </strong>{" "}
            align.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {["Kookmin Univ · Visual Design", "Paris Exchange · ENSAAMA", "Figma · Illustrator · Framer"].map((t) => (
              <span key={t} style={{
                fontSize: 10, color: "rgba(255,255,255,0.4)",
                border: "0.5px solid rgba(255,255,255,0.1)",
                padding: "4px 10px", borderRadius: 20,
              }}>
                {t}
              </span>
            ))}
            <span style={{
              fontSize: 10, color: "#4ade80",
              border: "0.5px solid rgba(74,222,128,0.25)",
              background: "rgba(74,222,128,0.06)",
              padding: "4px 10px", borderRadius: 20,
            }}>
              Permanent Resident · No sponsorship needed
            </span>
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <div style={{
        padding: "40px 48px",
        borderTop: "0.5px solid rgba(255,255,255,0.06)",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: 16,
      }}>
        <div style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 24, fontWeight: 300,
          color: "rgba(255,255,255,0.65)",
        }}>
          Let&apos;s work together.
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{
            fontSize: 11, color: "rgba(255,255,255,0.5)",
            border: "0.5px solid rgba(255,255,255,0.12)",
            padding: "8px 16px", borderRadius: 20, textDecoration: "none",
          }}>
            LinkedIn ↗
          </a>
          <a href="/resume.pdf" style={{
            fontSize: 11, color: "rgba(255,255,255,0.5)",
            border: "0.5px solid rgba(255,255,255,0.12)",
            padding: "8px 16px", borderRadius: 20, textDecoration: "none",
          }}>
            Resume PDF
          </a>
          <a href="mailto:jihooy426@gmail.com" style={{
            fontSize: 11, fontWeight: 500,
            background: "#fff", color: "#080808",
            padding: "8px 16px", borderRadius: 20, textDecoration: "none",
          }}>
            Get in touch →
          </a>
        </div>
      </div>

      <div style={{
        padding: "16px 48px",
        borderTop: "0.5px solid rgba(255,255,255,0.05)",
        display: "flex", justifyContent: "space-between",
      }}>
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.18)" }}>
          © 2026 Jihoo Yoon · San Francisco, CA
        </span>
        <div style={{ display: "flex", gap: 20 }}>
          {["jihoo.design", "jihooy426@gmail.com"].map((l) => (
            <span key={l} style={{ fontSize: 10, color: "rgba(255,255,255,0.22)" }}>{l}</span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        * { box-sizing: border-box; }
      `}</style>
    </main>
  );
}