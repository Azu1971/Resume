import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, Billboard } from '@react-three/drei'
import { useGLTF, Clone } from "@react-three/drei";
import * as THREE from 'three';

function Sphere({position=[0,0,0], color='orange', radius=1, to, logo, label, external=false,
  orbit = false,                  // enable orbiting
  orbitCenter = [0, 0, 0],        // center to orbit around
  orbitRadius = 0,                // distance from center
  orbitSpeed = 0.02,
  orbitInclination = 0,    // vertical wobble amount or fixed offset
  orbitPhase = 0,
  sun=false,
  modelUrl=null,
  modelScale=1,
  spinSpeed=0.1,
  spinAxis=[1,1,0],
  hoverScale=1,
  rotation=[0,0,0],
  labelVisible=false
  }) {
    const navigate = useNavigate()
    const ref = useRef()
    const angle = useRef(orbitPhase)

    if (orbitRadius) {
      hoverScale = 1.2
    }

    const [hovered, setHovered] = useState(false)

    useFrame((_, delta) => {
      if (!ref.current) return

      // local spin
      if (spinSpeed !== 0 && orbitRadius) {
        const [ax=0, ay=1, az=0] = spinAxis
        ref.current.rotation.x += delta * spinSpeed * ax
        ref.current.rotation.y += delta * spinSpeed * ay
        ref.current.rotation.z += delta * spinSpeed * az
      }
      // ref.current.rotation.y += 0.2 * delta

      if (orbit) {
        angle.current += orbitSpeed * delta
        const a = angle.current
        const cx = orbitCenter[0] || 0
        const cy = orbitCenter[1] || 0
        const cz = orbitCenter[2] || 0

        const x = cx + orbitRadius * Math.cos(a)
        const y = cy + orbitRadius * Math.sin(a)
        const z = cz + (Array.isArray(orbitInclination) ? orbitInclination[1] || orbitInclination[0] || 0 : orbitInclination || 0)

        ref.current.position.set(x, y, z)
      } else {
        // ensure static position prop is applied
        ref.current.position.set(position[0], position[1], position[2])
      }

      const target = hovered ? hoverScale : 1
      const cur = ref.current.scale.x
      const next = THREE.MathUtils.lerp(cur, target, Math.min(1, 8 * delta))
      ref.current.scale.set(next, next, next)
    })

    const handleClick = (e) => {
      e.stopPropagation()
      if(external) {
        window.open(to, '_blank', 'noopener')
      } else {
        if (to) navigate(to)
      }
    }

    function Model({ url, scale=1, rotation=[0,0,0] }) {
      const { scene } = useGLTF(url)
      const s = Array.isArray(scale) ? scale : [scale, scale, scale]
      const r = Array.isArray(rotation) ? rotation : [0, 0, 0]
      return (
        <group rotation={r}>
          <Clone object={scene} scale={s} />
        </group>
      )
    }
    
  return (
    <group
      ref={ref}
      position={position}
      onClick={handleClick}
      onPointerOver={() => (setHovered(true), document.body.style.cursor = 'pointer')}
      onPointerOut={() => (setHovered(false), document.body.style.cursor = 'auto')}
    >
      {modelUrl ? (
        <Model url={modelUrl} 
        scale={modelScale}
        rotation={rotation}
        />
      ) : (
        <mesh>
          <sphereGeometry args={[radius, 32, 32]} />
          <meshStandardMaterial
            color={color}
            emissive={sun ? color : '#000000'}
            emissiveIntensity={sun ? 1.5 : 0}
          />
        </mesh>
      )}

      {logo && (
        <Html position={[0, 0, 0]} center style={{ pointerEvents: 'none' }}>
          <img src={logo} alt={label || 'logo'} style={{ width: `${50}px`, height: 'auto', display: 'block' }} />
        </Html>
      )}
      {label && (
        <Billboard>
          <Html
            position={[0, radius + 0.35, 0]}
            center
            style={{
              pointerEvents: 'none',
              transition: 'opacity 200ms ease, transform 200ms ease',
              opacity: (labelVisible || hovered) ? 1 : 0,                 // show only on hover
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

export default Sphere