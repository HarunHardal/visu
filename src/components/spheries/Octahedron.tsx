import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { ambientLight } from '@react-three/fiber';

type Props = {};

const Octahedron = (props: Props) => {
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

    const octahedron1Position: [number, number, number] = [0, 0 + Math.sin(scrollY * 0.0005) * 5, 0];

    const rotationSpeed = 0.002;

    const octahedron1Rotation: [number, number, number] = [
        Math.sin(scrollY * rotationSpeed) * 2,
        Math.cos(scrollY * rotationSpeed) * .5,
        Math.sin(scrollY * rotationSpeed) * .3,
    ];

    return (
        <div style={{width:'100%', height:'100%', position:'relative', margin:'0'}}>
            <Canvas camera={{ position: [0, 0, 10], fov: 20 }} style={{position:'relative', width:'auto',height:'100%'}}>
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <mesh scale={1} position={[0,0,0]} rotation={octahedron1Rotation}>
                    <octahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial color='#fff' metalness={1} roughness={0} envMapIntensity={55} />
                </mesh>
                <Environment files="textures\liquid-prism-wallpaper.jpg" background={false}/>
            </Canvas>
        </div>
    )
}

export default Octahedron