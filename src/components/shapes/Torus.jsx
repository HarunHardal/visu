import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

const Torus = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const rotationSpeed = 0.002;

    const torusRotation = [
        Math.sin(scrollY * rotationSpeed) * 2,
        Math.cos(scrollY * rotationSpeed) * 0.5,
        Math.sin(scrollY * rotationSpeed) * 0.3,
    ];

    return (
        <>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={0.7} />
            <mesh scale={1} position={[0, 0, 0]} rotation={torusRotation}>
                <torusGeometry args={[2, 1, 64, 128]} />
                <meshStandardMaterial color='#fff' metalness={1} roughness={0} envMapIntensity={5} />
            </mesh>
            <Suspense fallback={null}>
                <Environment files="/textures/torus-texture.jpg" background={false} />
            </Suspense>
        </>
    );
};

const TorusGeo = () => {
    return (
        <Canvas
            camera={{ position: [0, 0, 6], fov: 40 }} style={{ position: 'relative', width: '100%', height: '100%' }}
        >
            <Torus />
        </Canvas>
    )
}

export default TorusGeo;
