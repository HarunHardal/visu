declare module '*.glsl' {
  const value: string;
  export default value;
}

import { ThreeElements } from '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

export {}; 