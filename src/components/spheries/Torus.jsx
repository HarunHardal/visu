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
        Math.cos(scrollY * rotationSpeed) * .5,
        Math.sin(scrollY * rotationSpeed) * .3,
    ];

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', margin: '0' }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }} style={{ position: 'relative', width: 'auto', height: '100%' }}>
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <mesh scale={1} position={[0, 0, 0]} rotation={torusRotation}>
                    <torusGeometry args={[2, 1, 64, 128]} />
                    <meshStandardMaterial color='#fff' metalness={1} roughness={0} envMapIntensity={55} />
                </mesh>
                <Suspense fallback={null}>
                    <Environment files="textures\liquid-prism-wallpaper3.jpg" background={false} />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Torus