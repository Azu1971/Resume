import {Canvas} from '@react-three/fiber'
import { Suspense } from 'react'
import galaxy from '../assets/background/galaxy.jpg'
import SceneBackground from '../3dComponents/SceneBackground.jsx'
import Sphere from '../3dComponents/Sphere.jsx'
import './Common.css'
import './Projects.css'
import ContactComp from '../Components/ContactComp.jsx'
import SpaceShip from '../3dComponents/Spaceship.jsx'

import p3 from '../assets/3DModels/P3.glb?url'

const Contact = () => {
  return (
    <div className="fullpage">
      <Canvas camera={{near:0.1, far:2000, fov:75, position:[0,0,10]}}>
            <Suspense fallback={null}>
                <SceneBackground src={galaxy} />
                <directionalLight intensity={2} position={[5, 1, 2]}/>
                <ambientLight intensity={0.5} />
                <Sphere position={[0,-17,0]} modelUrl={p3} modelScale={12} rotation={[2,0,0]}/>
                {/* <Sphere position={[0,-5,0]} modelUrl={p10} modelScale={.01} rotation={[0,0,0]}/> */}
                {/* <Sphere position={[0,-15,0]} modelUrl={p9} modelScale={2} rotation={[0,-4,0]}/> */}
                <SpaceShip position={[-13, 6, 0]} rotation={[0, -Math.PI / 2, -0.25]} scale={0.3} />
            </Suspense>
            
        </Canvas>
        <div>
              <ContactComp />
            </div>
    </div>
  )
}

export default Contact