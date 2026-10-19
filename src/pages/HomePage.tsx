import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  BriefcaseBusiness as Linkedin,
  CodeXml as Github,
  CodeXml,
  GraduationCap,
  Mail,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/common/PageMeta'
import ProjectCard from '../components/projects/ProjectCard'
import { personal } from '../data/personal'
import { projects } from '../data/projects'

const featuredSkills = [
  { label: 'React', mark: 'R', style: 'cyan' },
  { label: 'Next.js', mark: 'N', style: 'slate' },
  { label: 'TypeScript', mark: 'TS', style: 'blue' },
  { label: 'JavaScript', mark: 'JS', style: 'yellow' },
  { label: 'Tailwind CSS', mark: 'TW', style: 'cyan' },
]

const supportingSkills = ['HTML', 'CSS', 'Git', 'GitHub', 'REST API integration']

function HomePage() {
  const homePageRef = useRef<HTMLDivElement>(null)
  const [portraitStatus, setPortraitStatus] = useState<'loading' | 'loaded' | 'unavailable'>('loading')

  useEffect(() => {
    const homePage = homePageRef.current
    if (
      !homePage ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    const revealSections = homePage.querySelectorAll<HTMLElement>('.home-reveal')
    homePage.classList.add('home-reveal-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-revealed', 'true')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    revealSections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
      homePage.classList.remove('home-reveal-ready')
    }
  }, [])

  return (
    <div className="home-page" ref={homePageRef}>
      <PageMeta
        title="Frontend Developer"
        description="Portfolio of Sathu Dinesh, a frontend developer building responsive web experiences with React, TypeScript, and modern frontend technologies."
      />

      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <p className="home-eyebrow"><span />Frontend Developer</p>
            <h1>
              Hi, I’m
              <span className="home-name">{personal.name}</span>
            </h1>
            <h2>{personal.headline}</h2>
            <p className="home-summary">
              I build responsive, user-focused web experiences with React, Next.js, and TypeScript.
            </p>
            <div className="home-hero-actions">
              <Link className="home-button home-button-primary" to="/projects">
                View My Projects <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link className="home-button home-button-outline" to="/contact">
                Contact Me <Mail size={14} aria-hidden="true" />
              </Link>
            </div>
            <div className="home-socials" aria-label="Professional profiles">
              <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <Github size={15} aria-hidden="true" /> GitHub <ArrowUpRight size={11} aria-hidden="true" />
              </a>
              <a href={personal.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <Linkedin size={15} aria-hidden="true" /> LinkedIn <ArrowUpRight size={11} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="home-portrait-wrap">
            <div className="home-portrait-glow" aria-hidden="true" />
            <div className={`home-portrait${portraitStatus === 'loaded' ? ' has-photo' : ''}`}>
              <img
                className={`home-portrait-image${portraitStatus === 'unavailable' ? ' is-unavailable' : ''}`}
                src="/images/profile.jpg"
                alt={`Portrait of ${personal.name}`}
                fetchPriority="high"
                decoding="async"
                onLoad={() => setPortraitStatus('loaded')}
                onError={() => setPortraitStatus('unavailable')}
              />
              <div className="portrait-orbit portrait-orbit-one" aria-hidden="true" />
              <div className="portrait-orbit portrait-orbit-two" aria-hidden="true" />
              <div className="home-monogram">{personal.initials}</div>
              <div className="home-portrait-caption">
                <span>{personal.name}</span>
                <small>{personal.role}</small>
              </div>
            </div>
            <div className="home-float-card home-float-card-code">
              <span className="home-float-mark">&lt;/&gt;</span>
              <span>Thoughtful<br />frontend craft</span>
            </div>
            <div className="home-float-card home-float-card-build">
              <span className="home-build-dot" />
              <span>Responsive<br />by design</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-skills home-reveal" aria-labelledby="home-skills-title">
        <div className="container">
          <div className="home-section-heading">
            <div>
              <p className="home-section-label">My toolkit</p>
              <h2 id="home-skills-title">Core Skills</h2>
              <p>Technologies I use to build responsive web experiences.</p>
            </div>
            <Link to="/about" className="home-inline-link">Explore all skills <ArrowRight size={13} aria-hidden="true" /></Link>
          </div>
          <div className="home-core-skills" role="list" aria-label="Core technologies">
            {featuredSkills.map((skill) => (
              <div className="home-skill-tile" key={skill.label} role="listitem">
                <span className={`home-skill-mark ${skill.style}`} aria-hidden="true">{skill.mark}</span>
                <span>{skill.label}</span>
              </div>
            ))}
          </div>
          <div className="home-supporting-skills" aria-label="Supporting skills">
            <span className="home-supporting-label">Also working with</span>
            <ul>
              {supportingSkills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="home-section home-projects home-reveal" aria-labelledby="home-projects-title">
        <div className="container">
          <div className="home-section-heading">
            <div>
              <p className="home-section-label">Selected work</p>
              <h2 id="home-projects-title">Featured Projects</h2>
              <p>Selected frontend and full-stack projects.</p>
            </div>
            <Link to="/projects" className="home-inline-link">View all projects <ArrowRight size={13} aria-hidden="true" /></Link>
          </div>
          <div className="project-grid home-project-grid">
            {projects.slice(0, 3).map((project) => <ProjectCard project={project} key={project.slug} />)}
          </div>
        </div>
      </section>

      <section className="home-section home-about home-reveal" aria-labelledby="home-about-title">
        <div className="container home-about-grid">
          <div className="home-about-copy">
            <p className="home-section-label">A little about me</p>
            <h2 id="home-about-title">About Me</h2>
            <p>
              I’m an MCA graduate and frontend developer focused on building clear,
              responsive interfaces. My experience includes reusable components,
              theme development, portal features, and REST API integration.
            </p>
            <Link className="home-button home-button-outline" to="/about">
              Learn More About Me <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div className="home-about-facts">
            <div><BriefcaseBusiness size={17} aria-hidden="true" /><span><strong>Experience</strong><small>{personal.experience.title} · {personal.experience.company}</small></span></div>
            <div><GraduationCap size={17} aria-hidden="true" /><span><strong>Education</strong><small>{personal.education}</small></span></div>
            <div><CodeXml size={17} aria-hidden="true" /><span><strong>Focus</strong><small>React · TypeScript · Responsive UI</small></span></div>
          </div>
        </div>
      </section>

      <section className="home-contact-band home-reveal" aria-labelledby="home-contact-title">
        <div className="container home-contact-inner">
          <div className="home-contact-symbol" aria-hidden="true"><Mail size={20} /></div>
          <div>
            <h2 id="home-contact-title">Let’s Work Together</h2>
            <p>Have a project or opportunity in mind? I’d be glad to hear from you.</p>
          </div>
          <Link className="home-button home-button-light" to="/contact">
            Get in Touch <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
