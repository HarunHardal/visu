import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Environment } from '@react-three/drei';
const Octahedron = () => {
    const texture = useLoader(TextureLoader, '/textures/liquid-texture.png')
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

    const octahedron1Rotation = [
        Math.sin(scrollY * rotationSpeed) * 2,
        Math.cos(scrollY * rotationSpeed) * .5,
        Math.sin(scrollY * rotationSpeed) * .3,
    ];

    return (
        <>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <mesh scale={1} position={[0, 0, 0]} rotation={octahedron1Rotation}>
                <octahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color='#fff' metalness={1} roughness={0} envMapIntensity={55} />
            </mesh>
            <Suspense>
                <Environment files="/textures/octahedron-texture.jpg" background={false} />
            </Suspense>
        </>
    )
}

const OctaGeo = () => {

    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }} style={{ position: 'relative', width: 'auto', height: '100%' }}
        >
            <Octahedron />
        </Canvas>
    )

}

export default OctaGeo