import React from 'react'
import './ProjectsComp.css'
import youtube from '../assets/projects/Youtube.PNG'
import spotify from '../assets/projects/Spotify.PNG'
import nextCommerce from '../assets/projects/NextCommerce.PNG'
import sarcasm from '../assets/projects/Sarcasm.PNG'
import liarsdice from '../assets/projects/liarsdice.PNG'
import maze from '../assets/projects/Maze.PNG'

const projects = [
  { id: 1, img: youtube, title: 'Youtube clone', tools: 'React', link: 'https://youtube-clone-pi-gules.vercel.app/'},
  { id: 2, img: spotify, title: 'Spotify clone', tools: 'React', link: 'https://spotify-clone-cmf1.vercel.app/'},
  { id: 3, img: nextCommerce, title: 'NextCommerce clone', tools: 'Next.js Stripe', link: 'https://next-commerce-cfnt.vercel.app/' },
  { id: 4, img: sarcasm, title: 'Automated sarcasm detection', tools: 'NLP', link:'https://github.com/Aj1842/Intended-Sarcasm-Detection-in-English'},
  { id: 5, img: liarsdice, title: 'Liars Dice', tools: 'React', link:'https://liarsdice-one.vercel.app/'},
  { id: 6, img: maze, title: 'Maze', tools: 'OpenGL', link:'https://github.com/Azu1971/Maze/tree/main'}
]

const ProjectsComp = () => {
  const dest = '../assets/projects/'
  return (
    <section className="projects-panel" aria-label="Projects gallery">
      {projects.map(p => (
        <article key={p.id} className="project-card">
          <a href={p.link} target='_blank'>
            <div className="thumb">
              <img src={p.img} alt={p.title} />
            </div>
            <div className="meta">
              <h3 className="title">{p.title}</h3>
              <small className="tools">{p.tools}</small>
            </div>
          </a>
        </article>
      ))}
    </section>
  )
}

export default ProjectsComp