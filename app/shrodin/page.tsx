"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number): { opacity: number; y: number; transition: { delay: number; duration: number; ease: [number, number, number, number] } } => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function ShrodinPortfolio() {
  return (
    <main style={{ background: "#0a0a0a", color: "#fff", fontFamily: "'DM Sans', sans-serif", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "3rem 2rem 6rem" }}>

        {/* HERO */}
        <motion.div initial="hidden" animate="visible" style={{ paddingBottom: "4rem", borderBottom: "1px solid rgba(255,255,255,.08)", marginBottom: "4rem" }}>
          <motion.div custom={0} variants={fadeUp} style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            {["Brand Identity", "UX Strategy", "2024"].map((tag) => (
              <span key={tag} style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,.2)", padding: "4px 10px", borderRadius: 2, color: "rgba(255,255,255,.5)" }}>{tag}</span>
            ))}
          </motion.div>
          <motion.h1 custom={1} variants={fadeUp} style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(3rem,8vw,6rem)", lineHeight: .95, letterSpacing: "-.02em", marginBottom: "1.5rem" }}>
            Shrödin<br /><span style={{ color: "#00FF85" }}>Album</span>
          </motion.h1>
          <motion.p custom={2} variants={fadeUp} style={{ maxWidth: 500, fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,.55)", marginBottom: "2rem" }}>
            A concept-driven brand system for an AI-powered photo management app — built around the idea that unobserved memories exist in a state between meaningful and meaningless.
          </motion.p>
          <motion.div custom={3} variants={fadeUp} style={{ display: "flex", gap: "2rem", flexWrap: "wrap", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,.08)" }}>
            {[["Role", "Brand Strategist · Visual Designer"], ["Scope", "Strategy · Identity · UI Design"], ["Duration", "Mar – Nov 2024"], ["Contribution", "100% Solo"]].map(([label, val]) => (
              <div key={label}>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.3)", marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.7)" }}>{val}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* SECTION HELPER */}
        {[
          {
            num: "01", title: "Project at a Glance",
            content: (
              <>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,.65)", marginBottom: "1.5rem" }}>Shrödin Album is a cross-platform photo management service that helps users rediscover, organize, and meaningfully engage with their photo libraries through AI categorization and gamified interaction.</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 8, overflow: "hidden" }}>
                  {[["40K+", "Avg. photos per user going unreviewed"], ["3", "Core user pain points identified via research"], ["6", "In-depth interviews (3 intl., 3 Korean users)"], ["1", "Unified brand metaphor driving all decisions"]].map(([num, desc]) => (
                    <div key={num} style={{ background: "#0a0a0a", padding: "1.5rem" }}>
                      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "2.5rem", fontWeight: 800, color: "#00FF85", lineHeight: 1 }}>{num}</div>
                      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, color: "rgba(255,255,255,.4)", marginTop: ".25rem" }}>{desc}</div>
                    </div>
                  ))}
                </div>
              </>
            )
          },
          {
            num: "02", title: "Why Photos Go Unnoticed",
            content: (
              <div>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,.65)", marginBottom: "1.5rem" }}>User research revealed a consistent pattern: people take hundreds of photos, rarely revisit them, and struggle with disorganized libraries.</p>
                {[["01", "Organizing feels overwhelming", `"I don't even know where to start — it's too tedious."`], ["02", "Photos are out of sight, out of mind", `"I forget what I've even taken. I'd love something that nudges me."`], ["03", "Sharing across devices is a pain", `"Moving photos between devices one by one is exhausting."`]].map(([n, h, q]) => (
                  <div key={n} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1.2rem 0", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
                    <div style={{ width: 36, height: 36, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "'DM Mono',monospace", fontSize: 11, background: "rgba(128,0,255,.15)", color: "#8000FF", border: "1px solid rgba(128,0,255,.3)" }}>{n}</div>
                    <div>
                      <div style={{ color: "#fff", fontSize: 14, fontWeight: 500, marginBottom: 4 }}>{h}</div>
                      <div style={{ fontSize: 13, color: "rgba(255,255,255,.5)" }}>{q}</div>
                    </div>
                  </div>
                ))}
              </div>
            )
          },
          {
            num: "03", title: "Schrödinger's Photo",
            content: (
              <div style={{ padding: "2rem", border: "1px solid rgba(255,255,255,.08)", borderRadius: 8, background: "rgba(128,0,255,.04)" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                  <div style={{ width: 60, height: 60, border: "2px solid rgba(128,0,255,.5)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Syne',sans-serif", fontSize: "1.5rem", fontWeight: 800, color: "#8000FF" }}>?</div>
                  <span style={{ color: "rgba(255,255,255,.3)", fontSize: "1.5rem" }}>→</span>
                  <div style={{ display: "flex", gap: ".5rem" }}>
                    {[["Dead", "rgba(128,0,255,.15)", "#8000FF", "rgba(128,0,255,.3)"], ["+", "rgba(255,255,255,.05)", "rgba(255,255,255,.5)", "rgba(255,255,255,.1)"], ["Alive", "rgba(0,255,133,.1)", "#00FF85", "rgba(0,255,133,.25)"]].map(([label, bg, color, border]) => (
                      <span key={label} style={{ padding: "4px 12px", borderRadius: 20, fontFamily: "'DM Mono',monospace", fontSize: 11, background: bg, color, border: `1px solid ${border}` }}>{label}</span>
                    ))}
                  </div>
                </div>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,.65)", lineHeight: 1.75, marginBottom: "1rem" }}>In quantum mechanics, Schrödinger's cat exists in a superposition — simultaneously alive and dead until observed. Unviewed photos share this same duality.</p>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,.65)", lineHeight: 1.75 }}>The moment of observation collapses the superposition. <strong style={{ color: "#fff", fontWeight: 500 }}>Shrödin Album is the act of opening the box.</strong></p>
                <div style={{ marginTop: "2rem", padding: "2rem", borderLeft: "2px solid #00FF85", background: "rgba(0,255,133,.04)" }}>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.1rem", fontWeight: 500, color: "#fff", lineHeight: 1.5, marginBottom: ".75rem" }}>"Before you look, your photos are neither meaningful nor meaningless. Shrödin helps you observe."</div>
                  <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "rgba(255,255,255,.3)", letterSpacing: ".08em", textTransform: "uppercase" }}>Brand Positioning Statement</div>
                </div>
              </div>
            )
          },
          {
            num: "04", title: "From Dead to Alive",
            content: (
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "1rem", alignItems: "center" }}>
                <div style={{ padding: "1.5rem", border: "1px solid rgba(128,0,255,.3)", borderRadius: 8 }}>
                  <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "#8000FF", marginBottom: "1rem" }}>As-Is · Dead 死</div>
                  {["Forgotten & unobserved", "Cluttered & overwhelming", "Static, rarely revisited", "Takes up space, adds no value"].map(t => <div key={t} style={{ fontSize: 13, color: "rgba(255,255,255,.55)", padding: "5px 0", borderBottom: "1px solid rgba(255,255,255,.05)" }}>{t}</div>)}
                </div>
                <div style={{ fontSize: "1.5rem", color: "rgba(255,255,255,.2)", textAlign: "center" }}>→</div>
                <div style={{ padding: "1.5rem", border: "1px solid rgba(0,255,133,.3)", borderRadius: 8 }}>
                  <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "#00FF85", marginBottom: "1rem" }}>To-Be · Alive 生</div>
                  {["Actively surfaced & seen", "Organized & navigable", "Woven into daily life", "Emotionally meaningful"].map(t => <div key={t} style={{ fontSize: 13, color: "rgba(255,255,255,.55)", padding: "5px 0", borderBottom: "1px solid rgba(255,255,255,.05)" }}>{t}</div>)}
                </div>
              </div>
            )
          },
          {
            num: "05", title: "My Nearest Reminder",
            content: (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" }}>
                {[["Pillar 01", "My", "개인맞춤형", "AI-powered, deeply personalized to each user's memories, behaviors, and preferences."], ["Pillar 02", "Nearest", "일상과 밀접한", "Integrated into everyday life — not something you visit once a year to clear storage."], ["Pillar 03", "Reminder", "기억보관함", "A living archive that resurfaces the moments you didn't know you missed."]].map(([label, word, kr, desc]) => (
                  <div key={label} style={{ padding: "1.5rem", border: "1px solid rgba(255,255,255,.08)", borderRadius: 8 }}>
                    <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.3)", marginBottom: ".5rem" }}>{label}</div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginBottom: ".5rem" }}>{word}</div>
                    <div style={{ fontSize: 13, color: "#00FF85", marginBottom: ".75rem" }}>{kr}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,.45)", lineHeight: 1.6 }}>{desc}</div>
                  </div>
                ))}
              </div>
            )
          },
          {
            num: "06", title: "From Schrödinger to Shrödin",
            content: (
              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "2rem", alignItems: "center", padding: "2rem", border: "1px solid rgba(255,255,255,.1)", borderRadius: 8 }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "2rem", fontWeight: 800, lineHeight: 1.1, color: "#00FF85" }}>Shrödin<br />Album</div>
                <div>
                  <p style={{ fontSize: 14, marginBottom: ".75rem", color: "rgba(255,255,255,.65)" }}><strong style={{ color: "#fff", fontWeight: 500 }}>Schrödinger's cat</strong> → <strong style={{ color: "#00FF85", fontWeight: 500 }}>Shrödin</strong> Album</p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,.5)", lineHeight: 1.7 }}>The umlaut (ö) is a visual anchor — it nods to the scientific origin and adds distinctiveness in a category full of generic app names like "Photos," "Gallery," and "Memories."</p>
                </div>
              </div>
            )
          },
          {
            num: "07", title: "Poison Palette",
            content: (
              <>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,.65)", marginBottom: "1.5rem" }}>Green and purple are oppositional on the color wheel — alive and dead, observed and unobserved. Neither color is "safe." That's intentional.</p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {[["#00FF85", "Green Poison", "Primary"], ["#8000FF", "Purple Poison", "Primary"], ["#D9D9D9", "Light Gray", "Secondary"], ["#808080", "Dark Gray", "Secondary"], ["#000000", "Black", "Foundation"]].map(([hex, name, role]) => (
                    <div key={hex} style={{ flex: 1, minWidth: 100, borderRadius: 6, overflow: "hidden" }}>
                      <div style={{ height: 80, background: hex, border: hex === "#000000" ? "1px solid rgba(255,255,255,.1)" : "none" }} />
                      <div style={{ padding: ".6rem .75rem", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", borderTop: "none", borderRadius: "0 0 6px 6px" }}>
                        <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 12, fontWeight: 500, color: "#fff" }}>{name}</div>
                        <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: "rgba(255,255,255,.4)", marginTop: 2 }}>{hex} · {role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )
          },
          {
            num: "08", title: "What Made This Work",
            content: (
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {[["Concept first", "Every visual decision traces back to Schrödinger — the name, colors, logo, motion, and IA all share one origin."], ["Research-grounded", "Six in-depth user interviews shaped the problem framing before a single pixel was designed."], ["System thinking", "The brand scales from a 16px app icon to a full marketing surface — tested at every scale."]].map(([head, val]) => (
                  <div key={head} style={{ flex: 1, minWidth: 180, padding: "1.2rem", background: "rgba(255,255,255,.03)", borderRadius: 6, border: "1px solid rgba(255,255,255,.06)" }}>
                    <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.3)", marginBottom: ".5rem" }}>{head}</div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 500, color: "#fff" }}>{val}</div>
                  </div>
                ))}
              </div>
            )
          },
        ].map(({ num, title, content }, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ marginBottom: "5rem" }}
          >
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, letterSpacing: ".15em", textTransform: "uppercase", color: "#00FF85", marginBottom: "1.5rem" }}>{num} —</div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.6rem", letterSpacing: "-.01em", marginBottom: "1rem", color: "#fff" }}>{title}</h2>
            {content}
          </motion.div>
        ))}

      </div>
    </main>
  );
}