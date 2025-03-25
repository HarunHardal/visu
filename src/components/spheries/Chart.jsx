"use client"

import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { Suspense } from "react";

const Model = () => {
  // GLTF Modelini Yükle
  const gltf = useLoader(GLTFLoader, "three/scene.gltf");

  // HDR Environment Map'i Yükle
  const hdrTexture = useLoader(RGBELoader, "textures/chart.jpg");

  // PMREM Generator ile HDR'i çevresel harita olarak kullan
  const pmremGenerator = new THREE.PMREMGenerator(new THREE.WebGLRenderer());
  const envMap = pmremGenerator.fromEquirectangular(hdrTexture).texture;

  // Modeldeki tüm Mesh'lere Env Map uygula
  gltf.scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.envMap = envMap;
      child.material.envMapIntensity = 1;
      child.material.needsUpdate = true;
    }
  });

  return <primitive object={gltf.scene} />;
};

export default function Chart() {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <Model />
    </Suspense>
  );
}