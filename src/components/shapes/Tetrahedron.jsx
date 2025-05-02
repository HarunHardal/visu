import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

const Tetrahedron = () => {
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
        <>
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <mesh scale={1} position={[0, 0, 0]} rotation={cylinderRotation}>
                    <tetrahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial color='#fff' metalness={1} roughness={0} envMapIntensity={55} />
                </mesh>
                <Suspense fallback={false}>
                    <Environment files="/textures/tetrahedron-texture.jpg" background={false} />
                </Suspense>
          
        </>
    )
}

const TetrGeo =()=>{
       return (
            <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }} style={{ position: 'relative', width: '100%', height: '100%' }}
            >
                <Tetrahedron />
            </Canvas>
        )
}

export default TetrGeo

