import React, { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';

const ModelViewer = () => {
  const gltf = useLoader(GLTFLoader, './lptshirt.glb');
  const modelRef = useRef();

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={0.1}
      rotation={[0, Math.PI / 2, 0]}
    />
    
  );
};

export default ModelViewer;
