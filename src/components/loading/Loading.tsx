"use client";

import { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1); // 👈 fade için

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Scroll'u kilitle

    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 10);

    if (progress === 100) {
      clearInterval(interval);

      setOpacity(0);

      setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = ""; // Scroll'u aç
        window.scrollTo(0, 0);
      }, 1000); // fade süresiyle eşleşmeli
    }

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 999999,
        backgroundColor: "#00000A",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        opacity: opacity, // 👈 fade kontrolü burada
        transition: "opacity 1s ease", // 👈 fade animasyonu
      }}
    >
      <div
        style={{
          zIndex: 10000,
          clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0% 100%)",
          width: "100%",
          height: "60vh",
          position: "absolute",
          bottom: "0%",
          backdropFilter: "blur(15px)",
        }}
      />
      <div
        style={{
          zIndex: 10001,
          position: "absolute",
          width: "100%",
          height: "100vh",
          top: "0",
          left: "0",
        }}
      />
      <p
        style={{
          fontSize: "10vw",
          fontFamily: `bodoni moda`,
          color: "#fff",
        }}
      >
        {progress}%
      </p>
    </div>
  );
};

export default Loader;
