import React, { useEffect, useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const OctahedronMesh = ({ scrollY }) => {
    const meshRef = useRef(null);
    const { scene } = useThree();
    const [envMap, setEnvMap] = useState(null);

    useEffect(() => {
        new THREE.TextureLoader().load('/textures/last.jpg', (texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            texture.colorSpace = THREE.SRGBColorSpace;
            setEnvMap(texture);
            scene.environment = texture;
        });
    }, [scene]);

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
                <octahedronGeometry args={[1, 0]} />
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

export default OctahedronMesh;



/*
import React, { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { SRGBColorSpace } from 'three';


const OctahedronMesh = () => {
    const meshRef = useRef(null);
    const { scene } = useThree();
    const [envMap, setEnvMap] = useState(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        new THREE.TextureLoader().load('/textures/last-env.png', (texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            texture.colorSpace = SRGBColorSpace
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
                <octahedronGeometry args={[1, 0]} />
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

const Octahedron = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 30 }}>
                <Suspense fallback={null}>
                    <OctahedronMesh />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Octahedron;
*/