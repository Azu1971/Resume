import {Canvas} from '@react-three/fiber'
import { Suspense } from 'react'
import galaxy from '../assets/background/galaxy.jpg'
import SceneBackground from '../3dComponents/SceneBackground.jsx'
import Sphere from '../3dComponents/Sphere.jsx'
import ResearchComp from '../components/ResearchComp.jsx'
import SpaceShip from '../3dComponents/Spaceship.jsx'

import p8 from '../assets/3DModels/P8.glb?url'

import './Common.css'

import Loader from '../components/Loader.jsx'

const Research = () => {
  return (
    <div className="fullpage">
      <Canvas camera={{near:0.1, far:2000, fov:75, position:[0,0,10]}} className="scene-canvas">
            <Suspense fallback={<Loader />}>
                <SceneBackground src={galaxy} />
                <directionalLight intensity={2} position={[5, 1, 2]}/>
                <ambientLight intensity={0.5} />
                <Sphere position={[0,-17,0]} modelUrl={p8} modelScale={13} rotation={[2,0,0]}/>
                <SpaceShip/>
            </Suspense>
        </Canvas>
        <div className="overlay-ui">
          <h1>Research</h1>
          <ResearchComp />
        </div>
    </div>
  )
}

export default Research