import * as THREE from 'three';
import { JSX } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: React.ThreeElements['mesh'];
      // Add other three.js elements if needed
    }
  }
}