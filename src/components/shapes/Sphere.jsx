import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

const Sphere = () => {
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

    const cylinderRotation = [
        Math.sin(scrollY * rotationSpeed) * .5,
        Math.cos(scrollY * rotationSpeed) * .9,
        Math.sin(scrollY * rotationSpeed) * .5,
    ];

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', margin: '0' }}>
            <Canvas camera={{ position: [0, 0, 35], fov: 50 }} style={{ position: 'relative', width: 'auto', height: '100%' }}>
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <mesh scale={1} position={[0, 0, 0]} rotation={cylinderRotation}>
                    <torusKnotGeometry args={[5, 1.5, 128, 64, 2, 3]} />
                    <meshStandardMaterial color='#fff' metalness={1} roughness={0} envMapIntensity={55} />
                </mesh>
                <Suspense fallback={null}>
                    {/* <Environment files="/textures/sphere-texture.jpg" background={false} /> */}
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Sphere