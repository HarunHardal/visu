"use client";

import { useGLTF } from '@react-three/drei';

interface ModelPartProps {
  index: number;
  position: [number, number, number];  // Modelin pozisyonunu alıyoruz
}

const ModelPart: React.FC<ModelPartProps> = ({ index, position }) => {
  // GLTF dosyasını yükleme
  const { nodes } = useGLTF('/models/scene.gltf');
  
  // Modelin isimlerini alıyoruz
  const modelKeys = Object.keys(nodes);

  // Seçilen modeli index'e göre alıyoruz
  const selectedModel = nodes[modelKeys[index]];

  return <primitive object={selectedModel} position={position} />;
};

export default ModelPart;