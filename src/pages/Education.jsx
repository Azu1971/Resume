import {Canvas} from '@react-three/fiber'
import { Suspense } from 'react'
import galaxy from '../assets/background/galaxy.jpg'
import SceneBackground from '../3dComponents/SceneBackground.jsx'
import Sphere from '../3dComponents/Sphere.jsx'
import EducationComp from '../components/EducationComp.jsx'
import SpaceShip from '../3dComponents/Spaceship.jsx'

import p7 from '../assets/3DModels/P7.glb?url'

import Loader from '../components/Loader.jsx'

const Education = () => {
  return (
    <div className="fullpage">
      <Canvas camera={{near:0.1, far:2000, fov:75, position:[0,0,10]}}>
            <Suspense fallback={<Loader />}>
                <SceneBackground src={galaxy} />
                <directionalLight intensity={2} position={[5, 1, 2]}/>
                <ambientLight intensity={0.5} />
                <Sphere position={[0,-22,0]} modelUrl={p7} modelScale={4} rotation={[2,0,0]}/>
                <SpaceShip/>
            </Suspense>
        </Canvas>
        <div className="overlay-ui">
          <h1>Education</h1>
          <EducationComp />
        </div>
    </div>
  )
}

export default Education