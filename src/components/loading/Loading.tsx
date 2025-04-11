"use client"

import { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const bodyStyle = document.body.style;
    const scrollY = window.scrollY;

    bodyStyle.overflow = 'hidden';
    bodyStyle.position = 'absolute';
    bodyStyle.top = `${scrollY}px`;
    bodyStyle.width = '100%';
    bodyStyle.top= "0";
    bodyStyle.bottom= "0";
    bodyStyle.left= "0";
    bodyStyle.right= "0";

    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 10);

    if (progress === 100) {
      clearInterval(interval);
      setTimeout(() => {
        setIsVisible(false);

        bodyStyle.overflow = 'auto';
        bodyStyle.position = '';
        bodyStyle.top = '';
        window.scrollTo(0, scrollY);
      }, 10)
    }
    return () => {
      clearInterval(interval);

      bodyStyle.overflow = 'auto';
      bodyStyle.position = '';
      bodyStyle.top = '';
      window.scrollTo(0, scrollY);
    }
  }, [progress])

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        zIndex: "999999",
        backgroundColor: "#00000A",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        opacity: progress === 100 ? 0 : 1,
        transition: "opacity 5s ease",
      }}
    >
      <div
        style={{
          zIndex: "10000",
          clipPath: "polygon(0 30%, 100% 0, 100% 100%, 0% 100%)",
          width: "100%",
          height: "55vh",
          position: "absolute",
          bottom: "0%",
          backdropFilter: "blur(15px)",
        }}
      ></div>
      <div
        style={{
          zIndex: "10001",
          position: "absolute",
          width: "100%",
          height: "100vh",
          top: "0",
          left: "0",
        }}
      >
      </div>
      <p
        style={{
          fontSize: "150px",
          fontFamily: `bodoni moda`,
          color:'#fff'
        }}
      >
        {progress}%
      </p>
    </div>
  );
};

export default Loader;