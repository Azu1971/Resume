import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import galaxy from '../assets/background/galaxy.jpg'
import Sphere from '../3dComponents/Sphere.jsx'
import SceneBackground from '../3dComponents/SceneBackground.jsx'
import { OrbitControls, Billboard, Text } from '@react-three/drei'


import python from '../assets/skills/python.png'
import java from '../assets/skills/java.svg'
import cpp from '../assets/skills/c++.png'
import csharp from '../assets/skills/csharp.png'
import r from '../assets/skills/R.png'
import javascript from '../assets/skills/javascript.png'
import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import sql from '../assets/skills/sql.png'
import pytorch from '../assets/skills/pytorch.png'
import tensorflow from '../assets/skills/tensorflow.png'
import keras from '../assets/skills/keras.png'
import nodejs from '../assets/skills/nodejs.png'
import react from '../assets/skills/react.svg'
import express from '../assets/skills/express.png'
import n8n from '../assets/skills/n8n.png'
import langflow from '../assets/skills/langflow.png'
import firebase from '../assets/skills/firebase.png'
import mongodb from '../assets/skills/mongodb.png'
import blender from '../assets/skills/blender.png'
import unrealengine from '../assets/skills/unrealengine.png'
import unity from '../assets/skills/unity.png'

import next from '../assets/skills/next.png'

import p1 from '../assets/3DModels/P1.glb?url'
import SpaceShip from '../3dComponents/Spaceship.jsx'

import moon from '../assets/3DModels/Moon.glb?url'

import Loader from '../components/Loader.jsx'

const CENTER = [0, -40, 0]

// clustered skills
const skills = [
  // Programming Languages
  { key: 'python', label: 'Python', logo: python, category: 'languages' },
  { key: 'java', label: 'Java', logo: java, category: 'languages' },
  { key: 'cpp', label: 'C++', logo: cpp, category: 'languages' },
  { key: 'csharp', label: 'C#', logo: csharp, category: 'languages' },
  { key: 'r', label: 'R', logo: r, category: 'languages' },
  { key: 'javascript', label: 'JavaScript', logo: javascript, category: 'languages' },
  { key: 'html', label: 'HTML', logo: html, category: 'languages' },
  { key: 'css', label: 'CSS', logo: css, category: 'languages' },
  { key: 'sql', label: 'SQL', logo: sql, category: 'languages' },
  // Frameworks & Libraries
  { key: 'tensorflow', label: 'TensorFlow', logo: tensorflow, category: 'frameworks' },
  { key: 'keras', label: 'Keras', logo: keras, category: 'frameworks' },
  { key: 'pytorch', label: 'PyTorch', logo: pytorch, category: 'frameworks' },
  { key: 'nodejs', label: 'Node.js', logo: nodejs, category: 'frameworks' },
  { key: 'react', label: 'React', logo: react, category: 'frameworks' },
  { key: 'express', label: 'Express', logo: express, category: 'frameworks' },
  { key: 'next', label: 'Next.js', logo: next, category: 'frameworks' },
  // Tools & Platforms
  { key: 'n8n', label: 'n8n', logo: n8n, category: 'tools' },
  { key: 'langflow', label: 'Langflow', logo: langflow, category: 'tools' },
  { key: 'firebase', label: 'Firebase', logo: firebase, category: 'tools' },
  { key: 'mongodb', label: 'MongoDB', logo: mongodb, category: 'tools', size: 0.1 },
  // AI & ML Domains (text-only labels)
  { key: 'nlp', label: 'NLP', logo: null, category: 'domains' },
  { key: 'cv', label: 'Computer Vision', logo: null, category: 'domains' },
  { key: 'xai', label: 'Explainable AI', logo: null, category: 'domains' },
  // Software
  { key: 'blender', label: 'Blender', logo: blender, category: 'software' },
  { key: 'unrealengine', label: 'Unreal Engine', logo: unrealengine, category: 'software' },
  { key: 'unity', label: 'Unity', logo: unity, category: 'software' }
]

// Ring layout: centers and radii (languages in the middle)
const CLUSTERS = {
  languages:  { title: 'Programming\n  Languages', center: [  0,  3, 0], rX: 2.5, rY: 2.5, start: Math.PI / 2 },
  frameworks: { title: 'Frameworks\n&Libraries', center: [ 10,  2, 0], rX: 2.2, rY: 2.2, start: Math.PI / 6 },
  tools:      { title: 'Tools & Platforms',      center: [-10,  2, 0], rX: 2, rY: 2, start: -Math.PI / 6 },
  domains:    { title: 'ML Domains',        center: [  -6,  -4, 0], rX: 1.8, rY: 1.8, start: 0 },
  software:   { title: 'Software',               center: [  6, -4, 0], rX: 1.8, rY: 1.8, start: 0 }
}

// compute ring positions in the XY plane (constant z)
const ringPositions = (count, [cx, cy, cz], rX, rY, start = 0) =>
  Array.from({ length: count }, (_, i) => {
    const a = start + (i / count) * Math.PI * 2
    return [cx + Math.cos(a) * rX, cy + Math.sin(a) * rY, cz]
  })

const Skills = () => {
  return (
    <div className="fullpage">
      <Canvas camera={{ near: 0.1, far: 2000, fov: 75, position: [0, 0, 10] }}>
        <Suspense fallback={<Loader />}>
          <SceneBackground src={galaxy} />
          <directionalLight intensity={2} position={[5, 1, 2]} />
          <ambientLight intensity={0.5} />

          {/* main planet at y = -40 (unchanged) */}
          <Sphere radius={300} position={[0, -40, 0]} modelUrl={p1} modelScale={30} rotation={[-1, 0, -0.2]} />

          <OrbitControls />

          {/* Cluster cores and ring moons */}
          {Object.entries(CLUSTERS).map(([key, cfg]) => {
            const items = skills.filter(s => s.category === key)
            const positions = ringPositions(items.length, cfg.center, cfg.rX, cfg.rY, cfg.start)
            return (
              <group key={key}>
                {/* World-anchored label that only rotates to face the camera */}
                <Billboard position={cfg.center} follow={false}>
                  <Text
                    fontSize={0.35}
                    color="#ffffff"
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.02}
                    outlineColor="black"
                  >
                    {cfg.title}
                  </Text>
                </Billboard>

                {/* Items arranged in a ring around the center */}
                {items.map((s, i) => (
                  <Sphere
                    key={s.key}
                    position={positions[i]}
                    color="#555555"
                    logo={s.logo}
                    label={s.label}
                    orbit={false}
                    modelUrl={moon}
                    modelScale={0.6}
                    rotation={[0,Math.random()*10,0]}
                    size={s.size || 0.7}
                  />
                ))}
              </group>
            )
          })}

          <SpaceShip/>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Skills