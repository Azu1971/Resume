import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'

function Sphere({position=[0,0,0], color='orange', radius=1, to, logo, label, external=false,
  orbit = false,                  // enable orbiting
  orbitCenter = [0, 0, 0],        // center to orbit around
  orbitRadius = 0,                // distance from center
  orbitSpeed = 0.02,
  orbitInclination = 0,    // vertical wobble amount or fixed offset
  orbitPhase = 0,
  sun=false
  }) {
    const navigate = useNavigate()
    const ref = useRef()
    const angle = useRef(orbitPhase)

    useFrame((_, delta) => {
      if (!ref.current) return

      // local spin
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
    })

    const handleClick = (e) => {
      e.stopPropagation()
      if(external) {
        window.open(to, '_blank', 'noopener')
      } else {
        if (to) navigate(to)
      }
    }
  return (
    <mesh position={position} ref={ref}
        onClick={handleClick}
        onPointerOver={() => (document.body.style.cursor = 'pointer')}
      onPointerOut={() => (document.body.style.cursor = 'auto')}
    >
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color={color} 
      emissive={sun ? color : '#000000'}
      emissiveIntensity={sun ? 1.5 : 0}
      />
      {logo && (
        <Html
          position={[0, 0, 0]}
          center
          style={{ pointerEvents: 'none' }}
        >
          <img src={logo} alt={label || 'logo'} style={{ width: `${50}px`, height: 'auto', display: 'block' }} />
        </Html>
      )}
      {label && (
        <Html
          position={[0, radius, 0]}
          center
          style={{ pointerEvents: 'none', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            color: '#fff',
            background: 'rgba(0,0,0,0.6)',
            padding: '6px 10px',
            borderRadius: 6,
            fontSize: 13,
            whiteSpace: 'nowrap'
          }}>
            {label}
          </div>
        </Html>
      )}
    </mesh>
  )
}

export default Sphere