import React, { useEffect, useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const TorusMesh = ({ scrollY }) => {
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

export default TorusMesh;