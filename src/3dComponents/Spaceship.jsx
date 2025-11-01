import { useRef, useState, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF, useCursor, Billboard, Text } from "@react-three/drei"
import { useNavigate } from "react-router-dom"
import * as THREE from "three"

import spaceShipScene from "../assets/3DModels/spaceship.glb"

// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
export function SpaceShip({ hoverScale = 1.15, ...props }) {
  const ref = useRef()
  const navigate = useNavigate()
  const { scene } = useGLTF(spaceShipScene)
  const [hovered, setHovered] = useState(false)
  useCursor(hovered)

  // support numeric or [x,y,z] scale from props as base
  const baseScale = useMemo(() => {
    const s = props.scale ?? 1
    return Array.isArray(s) ? new THREE.Vector3(...s) : new THREE.Vector3(s, s, s)
  }, [props.scale])

  useFrame((_, delta) => {
    if (!ref.current) return
    // smooth scale towards target (hovered or base)
    const t = hovered ? hoverScale : 1
    const target = baseScale.clone().multiplyScalar(t)
    const k = Math.min(1, 8 * delta)
    ref.current.scale.x = THREE.MathUtils.lerp(ref.current.scale.x || baseScale.x, target.x, k)
    ref.current.scale.y = THREE.MathUtils.lerp(ref.current.scale.y || baseScale.y, target.y, k)
    ref.current.scale.z = THREE.MathUtils.lerp(ref.current.scale.z || baseScale.z, target.z, k)
  })

  const handleClick = (e) => {
    e.stopPropagation()
    navigate("/")
  }

  return (
    <group
      ref={ref}
      {...props}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      <primitive object={scene} />
      {hovered && (
        <Billboard position={[0, -0.5, 0]}>
          <Text
            fontSize={1}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.03}
            outlineColor="black"
            depthTest={false}   // draw on top if the model overlaps
            toneMapped={false}
          >
            Back
          </Text>
        </Billboard>
      )}
    </group>
  )
}

export default SpaceShip