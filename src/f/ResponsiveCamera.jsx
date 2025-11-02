import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'

export default function ResponsiveCamera({
  mobileZ = 18,
  desktopZ = 10,
  mobileFov = 90,
  desktopFov = 75,
  breakpoint = 768
}) {
  const { camera, gl } = useThree()

  useEffect(() => {
    const update = () => {
      const isMobile = window.innerWidth <= breakpoint
      camera.position.set(0, 0, isMobile ? mobileZ : desktopZ)
      camera.fov = isMobile ? mobileFov : desktopFov
      camera.updateProjectionMatrix()
      // ensure renderer matches (usually not required, but safe)
      gl.setSize(window.innerWidth, window.innerHeight)
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [camera, gl, mobileZ, desktopZ, mobileFov, desktopFov, breakpoint])

  return null
}