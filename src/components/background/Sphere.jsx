"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Color, IcosahedronGeometry, MeshDepthMaterial, MeshPhysicalMaterial, RGBADepthPacking, Mesh } from "three";
import CustomShaderMaterial from "three-custom-shader-material";
import { mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils";
import fragmentShader from "./fragment.glsl";
import vertexShader from "./vertex.glsl";
import { useMediaQuery } from "usehooks-ts";
import { Environment } from "@react-three/drei";
import GrainEffect from "../grain/GlassEffect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const Experiment = ({ shouldReduceQuality, isMobile, isTablet, meshRef }) => {
  const pathname = usePathname();
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
    uDisplacementStrength: { value: 0.5 },
    uFractAmount: { value: 2 },
  };

  useEffect(() => {
    if (!meshRef?.current) return;


    const id = requestAnimationFrame(() => {


      if (!meshRef.current) return;

      if (pathname === "/iletisim") {
        if (isMobile) { meshRef.current.position.set(0, 0, 2); }
        else if (isTablet) { meshRef.current.position.set(0, 0, 2); }
        else { meshRef.current.position.set(-2.5, 0, 2); }
      } else if (pathname === "/hakkimizda") {

        if (isMobile) {
          meshRef.current.position.set(0, 0, 2);
        }
        else if (isTablet) {
          meshRef.current.position.set(0, 0, 2);
        }
        else {
          meshRef.current.position.set(2.5, 0, 2);
        }

      } else if (pathname === "/hizmetlerimiz") {

        if (isMobile) {
          meshRef.current.position.set(0, 0, 2);
        }
        else if (isTablet) {
          meshRef.current.position.set(0, 0, 1.5);
        }
        else {
          meshRef.current.position.set(0, 0, 1.5);
        }

      } else {

        setTimeout(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: "body",
              start: "0%",
              end: "100%",
              scrub: 1,
            },
          });

          if (isMobile) {
            //  Mobil animasyonu
            tl.to(meshRef.current.position, { x: 1, y: 0, z: 1.5, ease: "power2.out", duration: 0.6 }, "1%")
              .to(meshRef.current.rotation, { y: Math.PI * 0.5, ease: "power2.out", duration: 0.6 }, "1%")
              .to(meshRef.current.position, { x: -1, y: 0, z: 1.5, ease: "power2.out", duration: 0.5 }, "2%")
              .to(meshRef.current.rotation, { y: Math.PI, ease: "power2.out", duration: 0.5 }, "2%")
              .to(meshRef.current.position, { x: 2, y: 0, z: 3, ease: "power2.out", duration: 2 }, "3%")
              .to(meshRef.current.rotation, { y: Math.PI, ease: "power2.out", duration: 2 }, "3%")
              .to(meshRef.current.position, { x: 0, y: 0, z: -1, ease: "power2.out", duration: 2 }, "100%")
              .to(meshRef.current.rotation, { y: Math.PI * 1.5, ease: "power2.out", duration: 2 }, "100%");
          } else if (isTablet) {
            //  Tablet animasyonu
            tl.to(meshRef.current.position, { x: 1.5, y: 0, z: -1.8, ease: "power2.out", duration: 0.6 }, "1%")
              .to(meshRef.current.rotation, { y: Math.PI * 0.5, ease: "power2.out", duration: 0.6 }, "1%")
              .to(meshRef.current.position, { x: -1.5, y: 0, z: -1.8, ease: "power2.out", duration: 0.7 }, "2%")
              .to(meshRef.current.rotation, { y: Math.PI, ease: "power2.out", duration: 0.7 }, "2%")
              .to(meshRef.current.position, { x: 0, y: 0, z: 2, ease: "power2.out", duration: 2 }, "3%")
              .to(meshRef.current.rotation, { y: Math.PI, ease: "power2.out", duration: 2 }, "3%")
              .to(meshRef.current.position, { x: 0, y: 0, z: -1.2, ease: "power2.out", duration: 2 }, "100%")
              .to(meshRef.current.rotation, { y: Math.PI * 1.5, ease: "power2.out", duration: 2 }, "100%");
          } else {
            //  Masaüstü animasyonu
            tl.to(meshRef.current.position, { x: 2, y: 0, z: -2, ease: "power2.out", duration: 0.6 }, "1%")
              .to(meshRef.current.rotation, { y: Math.PI * 0.5, ease: "power2.out", duration: 0.6 }, "1%")
              .to(meshRef.current.position, { x: -2, y: 0, z: -2, ease: "power2.out", duration: 0.7 }, "2%")
              .to(meshRef.current.rotation, { y: Math.PI, ease: "power2.out", duration: 0.7 }, "2%")
              .to(meshRef.current.position, { x: 0, y: 0, z: 2, ease: "power2.out", duration: 2 }, "3%")
              .to(meshRef.current.rotation, { y: Math.PI, ease: "power2.out", duration: 2 }, "3%")
              .to(meshRef.current.position, { x: 0, y: 0, z: -1.5, ease: "power2.out", duration: 2 }, "100%")
              .to(meshRef.current.rotation, { y: Math.PI * 1.5, ease: "power2.out", duration: 2 }, "100%");
          }
        }, 100);

      }
    })

    return () => {
      cancelAnimationFrame(id);
      if (tl) {
        tl.kill();
        ScrollTrigger.getById('home-scroll-animation')?.kill();
      }
    }
  }, [meshRef, isMobile, isTablet]);



  const directionalLightRef = useRef();
  useFrame(({ clock }) => {
    if (
      (pathname === "/hakkimizda" || pathname === "/iletisim") &&
      directionalLightRef.current
    ) {
      const t = clock.getElapsedTime();
      const radius = 4;
      directionalLightRef.current.position.x = Math.cos(t) * radius;
      directionalLightRef.current.position.z = Math.sin(t) * radius;
      directionalLightRef.current.position.y = 2; // sabit yükseklik
    }
  });

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
        position={[0, isMobile ? -1.3 * 1 : -1.5, isMobile ? 1.3 * 2 : 3]}
        scale={isMobile ? 0.8 : 1}
      >
        <CustomShaderMaterial
          ref={materialRef}
          baseMaterial={MeshPhysicalMaterial}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          roughness={0}
          metalness={0.5}
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
      {(pathname === "/hakkimizda" || pathname === "/iletisim") && (
        <directionalLight
          ref={directionalLightRef}
          color="#fff"
          intensity={5}
          position={[-2, 2, 3.5]}
        />
      )}
      <Environment files="/textures/liquid-prism-wallpaper.jpg" background={false} />
    </>
  );
};

const Experience = () => {
  const isTablet = useMediaQuery("(max-width: 1199px)");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const meshRef = useRef(null);

  const pathname = usePathname();

  return (
    <div key={pathname}>
      <GrainEffect />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -9,
          backgroundColor: "#000",
          overflowY: "hidden",
        }}
      >
        <Canvas
          camera={{
            position: [0, 0.5, isMobile ? 6 : isTablet ? 5 : 5],
            fov: isMobile ? 55 : 45,
            near: 0.1,
            far: 1000,
          }}
          gl={{ alpha: true }}
        >
          <Experiment shouldReduceQuality={isTablet} isMobile={isMobile} meshRef={meshRef} />
        </Canvas>
      </div>
    </div>
  );
};

export default Experience;
