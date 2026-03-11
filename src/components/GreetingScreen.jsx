import React, { useState, useEffect } from "react";

const greetings = [
  { text: "Hello", lang: "English", sub: "Welcome to my portfolio" },
  { text: "नमस्ते", lang: "Hindi", sub: "मेरे पोर्टफोलियो में आपका स्वागत है" },
  { text: "Hola", lang: "Spanish", sub: "Bienvenido a mi portafolio" },
  { text: "Bonjour", lang: "French", sub: "Bienvenue dans mon portfolio" },
  { text: "こんにちは", lang: "Japanese", sub: "ポートフォリオへようこそ" },
  { text: "مرحبا", lang: "Arabic", sub: "أهلاً بك في معرض أعمالي" },
  { text: "Ciao", lang: "Italian", sub: "Benvenuto nel mio portfolio" },
];

export default function GreetingScreen({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState("enter"); // enter | hold | exit
  const [finished, setFinished] = useState(false);

  const TOTAL_DURATION = 10000; // total ms
  const GREETING_COUNT = greetings.length;
  const CYCLE_TIME = Math.floor(TOTAL_DURATION / GREETING_COUNT); // ~785ms each
  const ENTER_TIME = 200;
  const EXIT_TIME = 200;

  useEffect(() => {
    if (finished) return;

    // enter phase
    const enterTimer = setTimeout(() => setPhase("hold"), ENTER_TIME);

    // exit phase
    const exitTimer = setTimeout(() => setPhase("exit"), CYCLE_TIME - EXIT_TIME);

    // next greeting
    const nextTimer = setTimeout(() => {
      if (currentIndex < GREETING_COUNT - 1) {
        setCurrentIndex((i) => i + 1);
        setPhase("enter");
      } else {
        setFinished(true);
        setTimeout(() => onComplete && onComplete(), 400);
      }
    }, CYCLE_TIME);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(nextTimer);
    };
  }, [currentIndex, finished]);

  if (finished && phase === "exit") return null;

  const greeting = greetings[currentIndex];
  const progress = ((currentIndex + (phase === "hold" ? 0.5 : 0)) / GREETING_COUNT) * 100;

  const isRTL = greeting.lang === "Arabic";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      {/* Ambient blobs */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", width: 500, height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(167,139,250,0.18) 0%, transparent 70%)",
          top: "-10%", left: "-10%",
          animation: "pulse1 4s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", width: 400, height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.14) 0%, transparent 70%)",
          bottom: "-5%", right: "-5%",
          animation: "pulse2 5s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", width: 300, height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 70%)",
          top: "40%", right: "20%",
          animation: "pulse3 6s ease-in-out infinite",
        }} />
      </div>

      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(167,139,250,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(167,139,250,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }} />

      {/* Language label top */}
      <div style={{
        position: "absolute", top: "28%",
        opacity: phase === "hold" ? 1 : 0,
        transform: phase === "enter" ? "translateY(-12px)" : phase === "exit" ? "translateY(12px)" : "translateY(0)",
        transition: "all 0.25s ease",
        fontSize: "0.75rem",
        letterSpacing: "4px",
        textTransform: "uppercase",
        color: "rgba(167,139,250,0.7)",
        fontWeight: 600,
      }}>
        {greeting.lang}
      </div>

      {/* Main greeting word */}
      <div
        dir={isRTL ? "rtl" : "ltr"}
        style={{
          fontSize: "clamp(4rem, 14vw, 9rem)",
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: "-2px",
          background: "linear-gradient(135deg, #a78bfa 0%, #22d3ee 50%, #ec4899 100%)",
          backgroundSize: "200% 200%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          opacity: phase === "hold" ? 1 : 0,
          transform: phase === "enter"
            ? "translateY(40px) scale(0.9)"
            : phase === "exit"
            ? "translateY(-40px) scale(1.05)"
            : "translateY(0) scale(1)",
          transition: "opacity 0.22s ease, transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1)",
          position: "relative",
          zIndex: 1,
          textShadow: "0 0 80px rgba(167,139,250,0.3)",
          animation: phase === "hold" ? "gradientShift 2s ease infinite" : "none",
        }}
      >
        {greeting.text}
      </div>

      {/* Subtitle */}
      <div
        dir={isRTL ? "rtl" : "ltr"}
        style={{
          marginTop: "1.5rem",
          fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
          color: "rgba(255,255,255,0.45)",
          fontWeight: 400,
          letterSpacing: "1px",
          opacity: phase === "hold" ? 1 : 0,
          transform: phase === "enter" ? "translateY(20px)" : phase === "exit" ? "translateY(-20px)" : "translateY(0)",
          transition: "all 0.25s ease 0.08s",
        }}
      >
        {greeting.sub}
      </div>

      {/* Dot indicators */}
      <div style={{
        position: "absolute",
        bottom: "22%",
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}>
        {greetings.map((_, i) => (
          <div key={i} style={{
            width: i === currentIndex ? 28 : 8,
            height: 8,
            borderRadius: 4,
            background: i === currentIndex
              ? "linear-gradient(90deg, #a78bfa, #22d3ee)"
              : "rgba(255,255,255,0.15)",
            transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
            boxShadow: i === currentIndex ? "0 0 12px rgba(167,139,250,0.6)" : "none",
          }} />
        ))}
      </div>

      {/* Progress bar */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0,
        height: 3,
        background: "rgba(255,255,255,0.05)",
      }}>
        <div style={{
          height: "100%",
          width: `${((currentIndex + 1) / GREETING_COUNT) * 100}%`,
          background: "linear-gradient(90deg, #a78bfa, #22d3ee)",
          transition: `width ${CYCLE_TIME}ms linear`,
          boxShadow: "0 0 12px rgba(167,139,250,0.7)",
        }} />
      </div>

      <style>{`
        @keyframes pulse1 {
          0%, 100% { transform: scale(1) translate(0,0); }
          50% { transform: scale(1.15) translate(20px, 20px); }
        }
        @keyframes pulse2 {
          0%, 100% { transform: scale(1) translate(0,0); }
          50% { transform: scale(1.1) translate(-15px, -15px); }
        }
        @keyframes pulse3 {
          0%, 100% { transform: scale(1) translate(0,0); }
          50% { transform: scale(1.2) translate(10px, -20px); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}