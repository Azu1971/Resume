import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import tvScene from "../assets/3DModels/old_tv.glb";

// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
export function TV({...props}) {
  const ref = useRef();
  // Load the 3D model and its animations
  
  const { scene, animations } = useGLTF(tvScene);
    
  return (
    <mesh ref={ref} {...props}>
      <primitive object={scene} />
    </mesh>
  );
}

export default TV;