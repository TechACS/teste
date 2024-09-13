import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './ModelViewer.scss';

function RotatingModel() {
  const { scene } = useGLTF('/models/wi-fi_router.glb'); // Corrigido o caminho
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      // Gira o modelo em torno do eixo Y (vertical)
      modelRef.current.rotation.y += 0.01; // Ajuste a velocidade da rotação conforme necessário
    }
  });

  return (
    <primitive 
      ref={modelRef} // Referência ao modelo para poder manipulá-lo
      object={scene} 
      position={[0, -5, 0]} 
      scale={2} // Ajusta a escala conforme necessário
    />
  );
}

function ModelViewer() {
  return (
    <div className="canvas-container">
      <Canvas>
        {/* Controles de órbita para permitir rotação do modelo */}
        <OrbitControls />
        {/* Luzes para iluminar o modelo */}
        <ambientLight intensity={8.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        {/* O modelo 3D com rotação infinita */}
        <RotatingModel />
      </Canvas>
    </div>
  );
}

export default ModelViewer;
