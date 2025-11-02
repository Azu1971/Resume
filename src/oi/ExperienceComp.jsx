// ...existing code...
import React from 'react'
import './ExperienceComp.css'

import bracLogo from '../assets/experience/bracu.png'
import iubLogo from '../assets/experience/iub.png'
import rtLogo from '../assets/experience/rt.png'
// replace these with your actual logos or move files to public and use '/companies/...'
const binaryLogo = new URL('../assets/companies/binary.png', import.meta.url).href

const experiences = [
  {
    id: 1,
    role: 'Adjunct Faculty',
    period: 'July 2025 — Present',
    org: 'BRAC University',
    location: 'Dhaka, Bangladesh',
    logo: bracLogo,
    bullets: [
      'Teaching 7 sections (~280 students total) of Programming Language 1 (CSE110), Programming Language 2 (CSE111), Data Structures (CSE220), and Compiler Design (CSE420).',
      'Developed a novel AI model to classify red blood cells.'
    ]
  },
  {
    id: 2,
    role: 'Coaching Teacher',
    period: 'September 2025 — Present',
    org: 'Binary Institute',
    location: 'Dhaka, Bangladesh',
    logo: binaryLogo,
    bullets: ['Teaching an IBDP mathematics batch.']
  },
  {
    id: 3,
    role: 'Research Assistant',
    period: 'Mar 2025 — Present',
    org: 'Independent University, Bangladesh',
    location: 'Dhaka, Bangladesh',
    logo: iubLogo,
    bullets: [
      'Developed a novel AI model to detect tuberculosis using histopathological data (accepted at CCE conference).',
      'Supported various thesis projects across departments.'
    ]
  },
  {
    id: 4,
    role: 'Student Tutor - Game Theory',
    period: 'Oct 2024 — Jan 2025',
    org: 'BRAC University',
    location: 'Dhaka, Bangladesh',
    logo: bracLogo,
    bullets: [
      'Assisted students via 1-on-1 sessions and graded assignments.',
      'Led consultations for two Game Theory sections.'
    ]
  },
  {
    id: 5,
    role: 'Blender Instructor',
    period: 'June 2021',
    org: 'BRACU Robotics Club',
    location: 'Dhaka, Bangladesh',
    logo: bracLogo,
    bullets: [
      'Taught Blender covering modeling, modifiers, shaders, particle system, and rendering.',
      'Guided students in creating and submitting their own scenes.'
    ]
  },
  {
    id: 6,
    role: 'App Developer',
    period: 'Oct 2018 — Apr 2019',
    org: 'Raphael Teaches',
    location: 'Remote',
    logo: rtLogo,
    bullets: [
      'Developed an educational mobile application for O/A Level students with features such as MCQ interface, study materials, and videos.',
      'Built the front-end using Java and XML for a responsive user experience.',
      'Integrated Firebase for authentication, push notifications, and real-time database support.'
    ]
  }
]

export default function ExperienceComp() {
  return (
    <section className="exp-list" aria-label="Experience list">
      {experiences.map(exp => (
        <article key={exp.id} className="exp-card">
          <div className="exp-logo">
            <img src={exp.logo} alt={`${exp.org} logo`} />
          </div>

          <div className="exp-content">
            <header className="exp-header">
              <div>
                <h3 className="exp-role">{exp.role}</h3>
                <div className="exp-org">{exp.org}</div>
                <div className="exp-location">{exp.location}</div>
              </div>
              <time className="exp-period" dateTime={exp.period}>{exp.period}</time>
            </header>

            <ul className="exp-bullets">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  )
}
// ...existing code...