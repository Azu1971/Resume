import {Canvas} from '@react-three/fiber'
import { Suspense } from 'react'
import galaxy from '../assets/background/galaxy.jpg'
import SceneBackground from '../3dComponents/SceneBackground.jsx'
import Sphere from '../3dComponents/Sphere.jsx'
import ExperienceComp from '../components/ExperienceComp.jsx'
import './Experience.css'
import SpaceShip from '../3dComponents/Spaceship.jsx'

import p5 from '../assets/3DModels/P5.glb?url'
import { OrbitControls } from '@react-three/drei'

import Loader from '../components/Loader.jsx'

const Experience = () => {
  return (
    <div className="fullpage experience-page">
      <Canvas camera={{near:0.1, far:2000, fov:75, position:[0,0,10]}}>
            <Suspense fallback={<Loader />}>
                <SceneBackground src={galaxy} />
                <directionalLight intensity={2} position={[5, 1, 2]}/>
                <ambientLight intensity={0.5} />
                <Sphere position={[0,-20,0]} modelUrl={p5} modelScale={15} rotation={[2.2,0,0]}/>
                <SpaceShip/>
            </Suspense>
        </Canvas>
        <div className="overlay-ui experience-overlay">
          <h1>Experience</h1>
            <ExperienceComp />
        </div>
    </div>
  )
}

export default Experience