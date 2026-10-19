import { BriefcaseBusiness as Linkedin, CodeXml as Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { personal } from '../../data/personal'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <p className="footer-copy">© {new Date().getFullYear()} {personal.name}. Built with care.</p>
        <nav className="footer-links" aria-label="Social links">
          <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <Github size={15} aria-hidden="true" />
          </a>
          <a href={personal.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <Linkedin size={15} aria-hidden="true" />
          </a>
          <Link to="/contact">Get in touch</Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
