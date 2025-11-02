import React from 'react'
import './EducationComp.css'

// replace these with your actual images or move files to public and use '/images/..'
const bracImg = new URL('../assets/education/BRAC.jpg', import.meta.url).href
const akImg = new URL('../assets/education/AKA.jpg', import.meta.url).href


export default function EducationComp() {
  return (
    <section className="education-list">
      <article className="edu-item">
        <div className="edu-image">
          <a href="https://www.bracu.ac.bd/" target='_blank'>
            <img src={bracImg} alt="BRAC University" />
          </a>
        </div>
        <div className="edu-body">
          <h3 className="edu-title">
            BRAC University
            <span className="edu-period">Sept 2020 — Jan 2025</span>
          </h3>
          <p className="edu-degree">
            B.S. Computer Science, Mathematics minor 
            <br />
             <strong>GPA: 3.95/4.0</strong>
             <br />
             Credits: 151.0
          </p>
            <p><strong>Honors</strong>: Graduated with highest honors, Vice Chancellor's List</p>
        </div>
      </article>

      <article className="edu-item">
        
        <div className="edu-body">
          <h3 className="edu-title">
            <span className="edu-period">July 2003 — May 2020</span>
            The Aga Khan School, Dhaka
          </h3>
          <p className="edu-degree right">
            O Levels: GPA: 5.0/5.0
            <br />
            A Levels: GPA: 4.25/5.0</p>
        </div>
        <div className="edu-image">
          <a href="https://www.agakhanacademies.org/dhaka" target='_blank'>
          <img src={akImg} alt="The Aga Khan School, Dhaka" />
          </a>
        </div>
      </article>
    </section>
  )
}