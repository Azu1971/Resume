import React, { useEffect } from 'react'
import { useLoader, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { TextureLoader } from 'three'

function SceneBackground({ src }) {
  const texture = useLoader(TextureLoader, src)
  const { scene } = useThree()

  useEffect(() => {
    const prev = scene.background
    if (texture) {
      texture.colorSpace = THREE.SRGBColorSpace
      texture.needsUpdate = true
      scene.background = texture
    }
    return () => { scene.background = prev }
  }, [scene, texture])

  return null
}
export default SceneBackground