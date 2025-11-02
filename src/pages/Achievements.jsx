import {Canvas, useLoader, useThree } from '@react-three/fiber'
import { Suspense, useEffect } from 'react'
import galaxy from '../assets/background/galaxy.jpg'
import Sphere from '../3dComponents/Sphere.jsx'
import SceneBackground from '../3dComponents/SceneBackground.jsx'

import p6 from '../assets/3DModels/P6.glb?url'
import SpaceShip from '../3dComponents/Spaceship.jsx'

import StarWarsCrawl from '../3dComponents/StarWarsCrawl.jsx'
import Loader from '../components/Loader.jsx'

const Achievements = () => {
  return (
    <div className="fullpage">
        <Canvas camera={{near:0.1, far:2000, fov:75, position:[0,0,10]}}>
            <Suspense fallback={<Loader />}>
                <SceneBackground src={galaxy} />
                <directionalLight intensity={2} position={[5, 1, 2]}/>
                <ambientLight intensity={0.5} />
                <Sphere position={[0,-35,-10]} modelUrl={p6} modelScale={25} rotation={[7,0,0]}/>
                {/* <OrbitControls /> */}
                <StarWarsCrawl
                text={
                `
                Runners-up - NLP Hackathon by BdOSN and Bangla.gov.bd (2023)

                Country Highest - AS IT (2019)
                
                IGCSE Computer Science (2018)

                Duke of Edinburgh's Award - Silver Standard (2017)

                Merit and Academic Scholarships - BRAC University (2020–2024)

                Third - Bangladesh Math Olympiad Regional Round (2018)

                Daily Star Award (2018)

                Qualified - Bangladesh Informatics Olympiad National Round (2020)

                Qualified - Bangladesh Math Olympiad (2017–2019)
                `}
                />
                <SpaceShip />
            </Suspense>
        </Canvas>
    </div>
  )
}

export default Achievements