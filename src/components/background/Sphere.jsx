"use client"

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Color, IcosahedronGeometry, MeshDepthMaterial, MeshPhysicalMaterial, RGBADepthPacking, Mesh } from "three";
import CustomShaderMaterial from "three-custom-shader-material";
import { mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils";
import fragmentShader from "./fragment.glsl";
import vertexShader from "./vertex.glsl";
import { useMediaQuery } from "usehooks-ts";
import { Environment } from '@react-three/drei';

const Experiment = ({ shouldReduceQuality, isMobile, meshRef }) => {
  const materialRef = useRef(null);
  const depthMaterialRef = useRef(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = elapsedTime;
    }
    if (depthMaterialRef.current) {
      depthMaterialRef.current.uniforms.uTime.value = elapsedTime;
    }
  });

  const uniforms = {
    uTime: { value: 1 },
    uColor: { value: new Color("#e76eff") },
    uGradientStrength: { value: 1 },
    uSpeed: { value: 1 },
    uNoiseStrength: { value: 1 },
    uDisplacementStrength: { value: 0.50},
    uFractAmount: { value: 2 },
  };

  return (
    <>
      <mesh
        ref={meshRef}
        geometry={useMemo(() => {
          const geometry = mergeVertices(new IcosahedronGeometry(1.3, shouldReduceQuality ? 128 : 200));
          geometry.computeTangents();
          return geometry;
        }, [shouldReduceQuality])}
        frustumCulled={false}
        position={[0, isMobile ? -1.3 * 0 : -1.5, isMobile ? 1.3 * 2 : 3]}
        scale={isMobile ? 0.8 : 1}
      >
        <CustomShaderMaterial
          ref={materialRef}
          baseMaterial={MeshPhysicalMaterial}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          roughness={0}
          metalness={0.50}
          reflectivity={1}
          clearcoat={1}
          ior={0}
          iridescence={1}
          uniforms={uniforms}
        />
        <CustomShaderMaterial
          ref={depthMaterialRef}
          baseMaterial={MeshDepthMaterial}
          vertexShader={vertexShader}
          uniforms={uniforms}
          depthPacking={RGBADepthPacking}
          attach="customDepthMaterial"
        />
      </mesh>
      <ambientLight color="#fff" intensity={1} />
      <directionalLight color="#fff" intensity={5} position={[-2, 2, 3.5]} />
       <Environment files="/textures/liquid-prism-wallpaper.jpg" background={false} /> 
    </>
  );
};

const Experience = ({ meshRef }) => {
  const isTablet = useMediaQuery("(max-width: 1199px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -999,
        backgroundColor: "#000",
      }}
    >
      <Canvas
        camera={{
          position: [0, .5, isMobile ? 6 : isTablet ? 5 : 5], // Mobil ve tablet için kamera konumunu ayarla
          fov: isMobile ? 55 : 45, // Mobil cihazlarda daha geniş bir görüş açısı
          near: 0.1,
          far: 1000,
        }}
        gl={{ alpha: true }}
      >
        
        <Experiment shouldReduceQuality={isTablet} isMobile={isMobile} meshRef={meshRef} />
      </Canvas>
    </div>
  );
};

export default Experience;