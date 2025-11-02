import React from 'react'
import './ProjectsComp.css'
import youtube from '../assets/projects/Youtube.PNG'
import spotify from '../assets/projects/Spotify.PNG'
import nextCommerce from '../assets/projects/NextCommerce.PNG'
import sarcasm from '../assets/projects/Sarcasm.PNG'
import liarsdice from '../assets/projects/liarsdice.PNG'
import maze from '../assets/projects/Maze.PNG'

const projects = [
  { id: 1, img: youtube, title: 'Youtube clone', tools: 'React' },
  { id: 2, img: spotify, title: 'Spotify clone', tools: 'React' },
  { id: 3, img: nextCommerce, title: 'NextCommerce clone', tools: 'Next.js Stripe' },
  { id: 4, img: sarcasm, title: 'Automated sarcasm detection', tools: 'NLP' },
  { id: 5, img: liarsdice, title: 'Liars Dice', tools: 'React' },
  { id: 6, img: maze, title: 'Maze', tools: 'OpenGL' }
]

const ProjectsComp = () => {
  const dest = '../assets/projects/'
  return (
    <section className="projects-panel" aria-label="Projects gallery">
      {projects.map(p => (
        <article key={p.id} className="project-card">
          <div className="thumb">
            <img src={p.img} alt={p.title} />
          </div>
          <div className="meta">
            <h3 className="title">{p.title}</h3>
            <small className="tools">{p.tools}</small>
          </div>
        </article>
      ))}
    </section>
  )
}

export default ProjectsComp