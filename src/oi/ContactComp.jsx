import './ContactComp.css'
import { useState } from 'react'

import insta from '../assets/contact/instagram.png'
import fb from '../assets/contact/facebook.png'
import wa from '../assets/contact/whatsapp.png'
import gmail from '../assets/contact/gmail.png'
import linkedin from '../assets/contact/linkedin.png'

const social = [
  { id: 1, img: insta, alt: 'Instagram', link: 'https://www.instagram.com/mahtab.ajmain/', show:'instagram.com/mahtab.ajmain/' },
  { id: 2, img: fb, alt: 'Facebook', link: 'https://www.facebook.com/ajmain.mahtab.52', show:'facebook.com/ajmain.mahtab.52' },
  { id: 3, img: wa, alt: 'WhatsApp', link: 'https://wa.me/01798242619', show:'01798242619' },
  { id: 4, img: gmail, alt: 'Email', link: 'mailto:ajmain1234@gmail.com', show:'ajmain1234@gmail.com' },
  { id: 5, img: linkedin, alt: 'LinkedIn', link: 'https://www.linkedin.com/in/ajmain-mahtab-9754a828b/', show:'linkedin.com/in/ajmain-mahtab-9754a828b/' }
]

function SocialCard({ s }) {
  const [copied, setCopied] = useState(false)

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch {
      // fallback
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    }
  }

  const handleCopy = (e) => {
    e.preventDefault()
    e.stopPropagation()
    copyText(s.show)
  }

  return (
    <div className="social-card">
      <a
        className="social-link"
        href={s.link}
        target="_blank"
        rel="noopener noreferrer"
        title={s.alt}
        aria-label={s.alt}
      >
        <img src={s.img} alt={s.alt} />
      </a>

      {/* Overlay label + copy button (not inside the link) */}
      <div className="link-label" aria-hidden="true">
        {s.show}
        <button
          type="button"
          className="copy-btn"
          onMouseDown={(e) => { e.preventDefault(); e.stopPropagation() }}
          onClick={handleCopy}
          title="Copy to clipboard"
          aria-label="Copy to clipboard"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  )
}

const ContactComp = () => {
  return (
    <div className="contact-overlay">
      <div className="social-grid" role="navigation" aria-label="Social links">
        {social.map((s) => (
          <SocialCard key={s.id} s={s} />
        ))}
      </div>
    </div>
  )
}

export default ContactComp