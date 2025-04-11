"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import type { ReactNode } from "react";

interface SmoothScrollingProps {
  children: JSX.Element | JSX.Element[];
}

const SmoothScrolling = ({ children }: SmoothScrollingProps) => {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;