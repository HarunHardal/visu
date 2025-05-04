import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { SRGBColorSpace } from 'three';


const TetrahedronMesh = () => {
    const meshRef = useRef(null);
    const { scene } = useThree();
    const [envMap, setEnvMap] = useState(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const loader = new THREE.TextureLoader();
        loader.load('/textures/liquid-prism-wallpaper2.jpg', (texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            texture.colorSpace = SRGBColorSpace;
            setEnvMap(texture);
            scene.environment = texture;
        });
    }, [scene]);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useFrame(() => {
        if (meshRef.current) {
            const speed = 0.002;
            meshRef.current.rotation.x = Math.sin(scrollY * speed) * 0.5;
            meshRef.current.rotation.y = Math.cos(scrollY * speed) * 0.9;
            meshRef.current.rotation.z = Math.sin(scrollY * speed) * 0.5;
        }
    });

    return (
        <>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <mesh ref={meshRef}>
                <tetrahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color="#ffffff"
                    metalness={1}
                    roughness={0}
                    envMap={envMap ?? undefined}
                    envMapIntensity={1}
                />
            </mesh>
        </>
    );
};

const Tetrahedron = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', margin: '0' }}>
            <Canvas gl={{ antialias: true }} camera={{ position: [0, 0, 4], fov: 50 }}>
                <Suspense fallback={null}>
                    <TetrahedronMesh />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Tetrahedron;
