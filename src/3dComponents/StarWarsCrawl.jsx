import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { Vector3 } from 'three'

export default function StarWarsCrawl({
  text = 'Your crawl text goes here.\nLine 2\nLine 3',
  // speed is units per second upward
  speed = 0.5,
  // straight vertical crawl (no tilt / perspective)
  startY = -6,             // starting Y (off-screen bottom)
  resetY = 6,              // reset when above this Y (off-screen top)
  z = 0,                   // fixed Z position for the text
  fontSize = 0.6,
  tilt=100
}) {
  const group = useRef()
    const worldPos = useRef(new Vector3())

  // move along the group's local Y axis
  useFrame((_, delta) => {
    if (!group.current) return

    // translate in local space (respecting the group's rotation)
    group.current.translateY(speed * delta)

    // check world-space Y to know when it's off the top of the screen
    group.current.getWorldPosition(worldPos.current)
    if (worldPos.current.y > resetY) {
      // reset the group's local position to the start
      group.current.position.set(0, startY, z)
    }
  })


  // start position centered in X, fixed Z
  return (
    <group ref={group} position={[0, startY, z]} rotation={[tilt, 0, 0]}>
      <Text
        fontSize={fontSize}
        maxWidth={30}
        lineHeight={1.2}
        textAlign="center"
        color="#ffd86b"
        anchorX="center"
        anchorY="middle"
        material-toneMapped={false}
      >
        {text}
      </Text>
    </group>
  )
}