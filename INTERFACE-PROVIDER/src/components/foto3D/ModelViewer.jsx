import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './ModelViewer.scss';

function ModelViewer() {
  const { scene } = useGLTF('/models/wifi-icon_1.glb'); // Corrigido o caminho

  return (
    <div className="canvas-container">
      <Canvas>
        {/* Controles de órbita para permitir rotação do modelo */}
        <OrbitControls />
        {/* Luz ambiente para iluminar o modelo */}
        <ambientLight color="#ffffff" intensity={1000.5} /> {/* Ajuste a intensidade e a cor */}
        {/* Luz pontual para adicionar destaque */}
        <pointLight color="#ffffff" position={[1000, 1000, 100]} intensity={1} />
        {/* O modelo 3D */}
        <primitive 
          object={scene} 
          position={[0, 0, 1]} 
          rotation={[0, 0, 0]} 
          scale={[1, 1, 0.1]} // Escala uniforme em todos os eixos
        />
      </Canvas>
    </div>
  );
}

export default ModelViewer;
