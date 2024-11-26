import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { HemisphereLight, PointLight } from 'three'; // Import lights from three.js
import CanvasLoader from '../Loader';

const Computers = () => {
  const { scene } = useGLTF('./desktop_pc/scene.gltf', false); // This prevents caching the model
  return (
    <mesh>
      {/* Lighting */}
      <primitive object={new HemisphereLight(0x555555, 0.01, 100)} />{/* HemisphereLight from three.js */}
      <primitive object={new PointLight(0xffffff, 1, 100)} position={[10, 10, 10]} /> {/* PointLight from three.js */}
      {/* Rendering the 3D model */}
      <primitive
        object={scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Controls to move and rotate the model */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
