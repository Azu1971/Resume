import {Canvas, useLoader, useThree } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
// import {UltraHDRLoader} from 'three-stdlib'
import { OrbitControls, OrthographicCamera } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'


import galaxy from '../assets/background/galaxy.jpg'

import './Common.css'

import Sphere from '../3dComponents/Sphere.jsx'
import Sun from '../3dComponents/Sun.jsx'
// import SunUrl from '../assets/3DModels/sun.glb?url'
import p1 from '../assets/3DModels/P1.glb?url'
import p2 from '../assets/3DModels/P2.glb?url'
import p3 from '../assets/3DModels/P3.glb?url'
import p4 from '../assets/3DModels/P4.glb?url'
import p5 from '../assets/3DModels/P5.glb?url'
import p6 from '../assets/3DModels/P6.glb?url'
import p7 from '../assets/3DModels/P7.glb?url'
import p8 from '../assets/3DModels/P8.glb?url'

import SceneBackground from '../3dComponents/SceneBackground.jsx'
import ResponsiveCamera from '../d/ResponsiveCamera.jsx'

import * as THREE from 'three'

import Loader from '../d/Loader.jsx'

const Home = () => {
  // detect mobile and update on resize
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false)
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // tune multipliers for mobile
  const orbitMultiplier = isMobile ? 0.55 : 1.0
  const modelScaleMultiplier = isMobile ? 0.6 : 1.0

  return (
    <div className="fullpage">
        <Canvas className='fullpage' camera={{ near: 0.1, far: 2000, fov: 75, position: [0, 0, 10] }}
          onCreated={({ gl }) => {
            gl.outputColorSpace = THREE.SRGBColorSpace
            gl.toneMapping = THREE.NoToneMapping
          }}
        >
          <ResponsiveCamera mobileZ={18} desktopZ={10} mobileFov={90} desktopFov={75} breakpoint={768} />
          <Suspense fallback={<Loader />}>
            {/* <OrthographicCamera makeDefault position={[0, 0, 20]} zoom={50} near={0.1} far={2000} /> */}
            {/* <Delay ms={2}> */}
            <SceneBackground src={galaxy} />
            <directionalLight intensity={0} />
            <ambientLight intensity={0} />
            {/* <pointLight intensity={100} /> */}
            <Sun  glowColor="#ffd166" castShadow phoneScale={modelScaleMultiplier}/>
            {/* <Sphere sun={true} color='#ffd166'/> */}
            <Sphere color="red" radius={0.4} to='/skills' label={'Skills'} orbit={true} orbitPhase={1.25} orbitRadius={2.5 * orbitMultiplier} orbitSpeed={0.1} modelUrl={p1} modelScale={0.6 * modelScaleMultiplier} labelVisible/>
            <Sphere color="red" radius={0.6} to='/projects' label={'Projects'} orbit={true} orbitPhase={0.5} orbitRadius={4 * orbitMultiplier} orbitSpeed={0.05} modelUrl={p2} modelScale={0.5 * modelScaleMultiplier} labelVisible/>
            {/* <Sphere color="lightblue" radius={0.7} to='/about' label={'About'} orbit={true} orbitPhase={1} orbitRadius={5}/> */}
            <Sphere color="red" radius={0.5} to='/contact' label={'Contact'} orbit={true} orbitPhase={2.5} orbitRadius={5.5 * orbitMultiplier} modelUrl={p3} modelScale={0.75 * modelScaleMultiplier} labelVisible/>
            <Sphere color="red" radius={0.7} to='https://www.instagram.com/azu4rt/' label={'Artwork'} external={true} orbit={true} orbitPhase={2} orbitRadius={7.5 * orbitMultiplier} modelUrl={p4} modelScale={0.7 * modelScaleMultiplier} labelVisible/>
            <Sphere color="red" radius={0.5} to='/research' label={'Research'} orbit={true} orbitPhase={-.7} orbitRadius={9.7 * orbitMultiplier} modelUrl={p8} modelScale={1 * modelScaleMultiplier} labelVisible/>
            <Sphere color="red" radius={0.4} to='/awards' label={'Achievements'} orbit={true} orbitPhase={-.25} orbitRadius={12.1 * orbitMultiplier} modelUrl={p6} modelScale={0.6 * modelScaleMultiplier} labelVisible/>
            <Sphere color="red" radius={0.6} to='/education' label={'Education'} orbit={true} orbitPhase={3} orbitRadius={10 * orbitMultiplier} orbitSpeed={0.008} modelUrl={p7} modelScale={0.15 * modelScaleMultiplier} labelVisible/>
            <Sphere color='red' radius={0.4} to='/experience' label={'Experience'} orbit={true} orbitPhase={-.5} orbitRadius={14.2 * orbitMultiplier} orbitSpeed={0.005} modelUrl={p5} modelScale={0.6 * modelScaleMultiplier} labelVisible/>
            {/* <Sphere color="red" radius={0.5} orbit={true} orbitPhase={3} orbitRadius={14.5} orbitSpeed={0.01} modelUrl={p10} modelScale={.001} hover={false}/> */}
            <EffectComposer>
              <Bloom intensity={1.1} luminanceThreshold={0.2} luminanceSaturation={0.9} radius={0.8} />
            </EffectComposer>
            
            <OrbitControls />
            {/* </Delay> */}
          </Suspense>
        </Canvas>
    </div>
  )
}

export default Home