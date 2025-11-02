import React from 'react'
import {Canvas} from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import galaxy from '../assets/background/galaxy.jpg'
import SceneBackground from '../3dComponents/SceneBackground.jsx'
import Sphere from '../3dComponents/Sphere.jsx'
import './Common.css'
import ProjectsComp from '../components/ProjectsComp.js'
import './Projects.css'
import SpaceShip from '../3dComponents/Spaceship.jsx'

import p2 from '../assets/3DModels/P2.glb?url'

import Loader from '../components/Loader.jsx'

const Projects = () => {
  return (
    <div className="fullpage">
      <Canvas camera={{near:0.1, far:2000, fov:75, position:[0,0,10]}}>
            <Suspense fallback={<Loader />}>
                <SceneBackground src={galaxy} />
                <directionalLight intensity={2} position={[5, 1, 2]}/>
                <ambientLight intensity={0.5} />
                <Sphere  position={[0,-26,0]} modelUrl={p2} modelScale={20} rotation={[1,0,0]}/>
                <SpaceShip/>
                
                {/* <OrbitControls /> */}
            </Suspense>
        </Canvas>
        <div className="overlay-ui">
          <h1>Projects</h1>
        <ProjectsComp />
      </div>
    </div>
  )
}

export default Projects