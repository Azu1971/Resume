import React from 'react'
import './ResearchComp.css'

const projects = [
  {
    id: 'sensanet',
    title: 'SensaNet: A Lightweight DL Model for Tuberculosis Detection in Histopathological Images',
    bullets: [
      'Developed SensaNet, a novel light-weight deep model optimized for reliable detection of AFB in microscopic images — suitable for low-resource clinics',
      'Exhaustive comparison vs DenseNet, ResNet, VGG19, MobileNetV2, EfficientNetB0 across multiple metrics',
      'Applied SensaNet to other datasets (lung cancer, parasite classification) demonstrating strong performance for binary, multi-class, and complex histopathology tasks'
    ]
  },
  {
    id: 'rainet',
    title: 'RAINet',
    bullets: [
      'Proposed RAINet, an involution-architecture based model optimised for red blood cell classification',
      'Achieved 98.5% accuracy, 0.985 F1-score, and 0.983 Matthews correlation on the Blood Cells dataset — outperforming ResNet50, VGG19 and MobileNetV2',
      'Very efficient: 1.76M parameters (≈6.3 MB), compared to ResNet50 (23.6M / ~90 MB)',
      'Validated generalisation on multiple datasets (Malaria, ALL cancer, Leishmania/Plasmodium/Babesia) — up to 99.0% accuracy on 8-class parasite classification'
    ]
  },
  {
    id: 'bnli',
    title: 'Bangla Natural Language Inference',
    bullets: [
      'Created the first human-annotated Bengali NLI dataset to aid semantic understanding for Bangla',
      'Trained state-of-the-art models and evaluated performance on the dataset',
      'Analyzed for spurious patterns to confirm semantic learning rather than heuristic exploitation'
    ]
  }
]

export default function ResearchComp() {
  return (
    <section className="research-list" aria-label="Research projects">
      {projects.map(p => (
        <article key={p.id} className="research-card">
          <header className="research-header">
            <h3 className="research-title">{p.title}</h3>
            {/* add date or external link here if needed */}
          </header>

          <ul className="research-bullets">
            {p.bullets.map((b, i) => (
              <li key={i} className="research-bullet" dangerouslySetInnerHTML={{ __html: b }} />
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}