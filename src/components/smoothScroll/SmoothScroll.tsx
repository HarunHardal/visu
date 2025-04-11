"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import type { JSX } from "react";  // ReactNode yerine JSX.Element kullanıyoruz

interface SmoothScrollingProps {
  children: JSX.Element | JSX.Element[];  // JSX.Element ile sınırlı tutuyoruz
}

const SmoothScrolling = ({ children }: SmoothScrollingProps) => {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
