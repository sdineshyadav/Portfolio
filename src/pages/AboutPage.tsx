import { Download } from 'lucide-react'
import PageMeta from '../components/common/PageMeta'
import { personal } from '../data/personal'
import { skills } from '../data/skills'

function AboutPage() {
  return (
    <>
      <PageMeta
        title="About"
        description="Learn about Sathu Dinesh's frontend development background, education, work experience, and technical skills."
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow"><span className="eyebrow-dot" />About me</p>
          <h1 className="page-title">Curious about how the details come together.</h1>
          <p className="page-lede">{personal.summary}</p>
        </div>
      </section>
      <section className="section">
        <div className="container about-grid">
          <div>
            <div className="prose">
              <p>I’m a frontend developer and MCA graduate who enjoys turning ideas into clear, reliable web experiences. My work focuses on responsive interfaces, reusable UI components, and bringing product designs to life with modern frontend tools.</p>
              <p>As a Trainee Developer at Prove it Catalysts, I developed responsive interfaces, contributed to theme consistency and the Yuvpreneur school portal, and integrated REST API data into frontend experiences.</p>
            </div>
            <div className="section-heading" style={{ marginTop: 38, marginBottom: 0 }}>
              <div>
                <p className="section-kicker">Experience</p>
                  <h2 className="section-title">Professional experience</h2>
              </div>
            </div>
            <div className="timeline">
              <article className="timeline-card">
                <p className="timeline-meta">{personal.experience.dates}</p>
                <h3>{personal.experience.title}</h3>
                <p className="timeline-company">{personal.experience.company}</p>
                <div className="prose">
                  {personal.experience.highlights.map((highlight) => <p key={highlight}>{highlight}</p>)}
                </div>
              </article>
            </div>
          </div>
          <aside className="about-side" aria-label="Education and professional interests">
            <div className="info-card">
              <p className="section-kicker">Education</p>
              <h3>{personal.education}</h3>
            </div>
            <div className="info-card">
              <p className="section-kicker">Interests</p>
              <h3>Thoughtful frontend craft</h3>
              <p>Responsive interfaces, reusable components, UI consistency, and practical API integration.</p>
            </div>
            <div className="info-card">
              <p className="section-kicker">Resume</p>
              <h3>Resume</h3>
              <p>Download my resume for a concise overview of my experience and skills.</p>
              <a className="button button-secondary" href={personal.resumePath} download style={{ marginTop: 16 }}>
                <Download size={14} aria-hidden="true" /> Download resume
              </a>
            </div>
          </aside>
        </div>
      </section>
      <section className="section section-compact">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">My toolkit</p>
              <h2 className="section-title">Skills & technologies</h2>
            </div>
          </div>
          <div className="skills-grid">
            {skills.map(({ category, items }) => (
              <div className="skill-card" key={category}>
                <h3>{category}</h3>
                <div className="tag-list">{items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
