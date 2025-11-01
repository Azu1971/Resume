import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { Billboard, Html } from '@react-three/drei'

import resume from '../assets/resume/Resume.pdf'

const fallbackUrl = new URL('../assets/3DModels/sun.glb', import.meta.url).href

export function Sun({
  url = fallbackUrl,
  scale = 0.1,
  position = [0, 0, 0],
  spinSpeed = 0.5,
  axis = [0, 0, 1],
  // emission + light controls
  glowColor = '#ffd166',
  emissiveIntensity = 2.5,
  lightIntensity = 20,   // increase to light planets more
  lightDistance = 0,     // 0 => no attenuation limit
  lightDecay = 1,
  castShadow = false
}) {
  const ref = useRef()
  const { scene } = useGLTF(url)
  const [hovered, setHovered] = useState()

  const label = "Resume"

  // make model emissive
  useEffect(() => {
    scene.traverse(o => {
      if (o.isMesh && o.material) {
        const m = o.material
        if (m.emissive) m.emissive = new THREE.Color(glowColor)
        if ('emissiveIntensity' in m) m.emissiveIntensity = emissiveIntensity
        if ('metalness' in m && 'roughness' in m) {
          m.metalness = 0.0
          m.roughness = 1.0
        }
      }
    })
  }, [scene, glowColor, emissiveIntensity])

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * spinSpeed * (axis[0] || 0)
    ref.current.rotation.y += delta * spinSpeed * (axis[1] || 0)
    ref.current.rotation.z += delta * spinSpeed * (axis[2] || 0)

    const target = hovered ? 1.1*scale : scale
    const cur = ref.current.scale.x
    const next = THREE.MathUtils.lerp(cur, target, Math.min(1, 8 * delta))
    ref.current.scale.set(next, next, next)
  })

  const handleClick=(e)=> {
    e.stopPropagation()
    window.open(resume, '_blank', 'noopener,noreferrer')
  }

  const s = Array.isArray(scale) ? scale : [scale, scale, scale]
  return (
    <group ref={ref} position={position} scale={s} 
    onPointerOver={()=>(setHovered(true), document.body.style.cursor = 'pointer')}
    onPointerOut={()=>(setHovered(false), document.body.style.cursor = 'auto')}
    onClick={handleClick}>
      <primitive object={scene} />
      <pointLight
        position={[0, 0, 0]}
        color={glowColor}
        intensity={lightIntensity}
        distance={lightDistance}
        decay={lightDecay}
        castShadow={castShadow}
      />
      {label && (
        <Billboard>
          <Html
            position={[0, 12 + 0.35, 0]}
            center
            style={{
              pointerEvents: 'none',
              transition: 'opacity 200ms ease, transform 200ms ease',              // show only on hover
              transform: hovered ? 'translateY(0)' : 'translateY(6px)'
            }}
          >
            <div
              style={{
                color: '#fff',
                background: 'linear-gradient(180deg, rgba(0,0,0,.55), rgba(0,0,0,.65))',
                padding: '6px 10px',
                borderRadius: 999,
                fontSize: 13,
                lineHeight: 1,
                whiteSpace: 'nowrap',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 6px 18px rgba(0,0,0,0.35), inset 0 0 12px rgba(255,255,255,0.06)',
                backdropFilter: 'blur(2px)'
              }}
            >
              {label}
            </div>
          </Html>
        </Billboard>
      )}
    </group>
  )
}

useGLTF.preload(fallbackUrl)
export default Sun