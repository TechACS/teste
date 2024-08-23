import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './ModelViewer.scss';

function RotatingModel() {
  const { scene } = useGLTF('/models/wifi-icon_1.glb'); // Corrigido o caminho
  const modelRef = useRef();

  useFrame(({ clock }) => {
    if (modelRef.current) {
      // Gira o modelo em torno do eixo Y (vertical)
      modelRef.current.rotation.y += 0.01; // Ajuste a velocidade da rotação conforme necessário
    }
  });

  return (
    <primitive 
      ref={modelRef} // Referência ao modelo para poder manipulá-lo
      object={scene} 
      position={[0, 0, 0]} 
      rotation={[0, 0, 0]} 
      scale={[1, 3, 0]} // Escala uniforme em todos os eixos
    />
  );
}

function ModelViewer() {
  return (
    <div className="canvas-container">
      <Canvas>
        {/* Controles de órbita para permitir rotação do modelo */}
        <OrbitControls />
        {/* Luz ambiente para iluminar o modelo */}
        <ambientLight color="#ffffff" intensity={100.5} /> {/* Ajuste a intensidade e a cor */}
        {/* Luz pontual para adicionar destaque */}
        <pointLight color="#ffffff" position={[1000, 1000, 100]} intensity={1} />
        {/* O modelo 3D com rotação infinita */}
        <RotatingModel />
      </Canvas>
    </div>
  );
}

export default ModelViewer;
