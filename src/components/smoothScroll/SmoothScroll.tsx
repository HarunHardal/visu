"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import type { ReactNode } from "react"; // React'ten direkt import ettik

interface SmoothScrollingProps {
  children: ReactNode;
}

const SmoothScrolling: React.FC<SmoothScrollingProps> = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;