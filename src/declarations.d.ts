declare module '*.glsl' {
  const value: string;
  export default value;
}

import { JSX } from 'react-jsx';
import { elements } from '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements extends elements { }
  }
}