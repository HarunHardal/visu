import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { SRGBColorSpace } from 'three';


const TorusMesh = () => {
    const meshRef = useRef(null);
    const { scene } = useThree();
    const [envMap, setEnvMap] = useState(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const loader = new THREE.TextureLoader();
        loader.load('/textures/last-env.png', (texture) => {
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
            meshRef.current.rotation.x = Math.sin(scrollY * speed) * 2;
            meshRef.current.rotation.y = Math.cos(scrollY * speed) * 0.5;
            meshRef.current.rotation.z = Math.sin(scrollY * speed) * 0.3;
        }
    });

    return (
        <>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <mesh ref={meshRef}>
                <torusGeometry args={[2, 1, 64, 128]} />
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

const Torus = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', margin: '0' }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <Suspense fallback={null}>
                    <TorusMesh />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Torus;
