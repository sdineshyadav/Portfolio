import { ArrowUpRight, CodeXml as Github } from 'lucide-react'
import type { Project } from '../../data/projects'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div
        className={`project-art project-art-${project.slug.toLowerCase().replace(/\s+/g, '-')}`}
        role="img"
        aria-label={`Abstract preview artwork for ${project.title}`}
      >
        <div className="art-window" aria-hidden="true">
          <span className="art-window-top" />
          <span className="art-window-project">{project.title}</span>
          <span className="art-window-tech">{project.technologies.slice(0, 2).join(' · ')}</span>
        </div>
      </div>
      <div className="project-body">
        <div className="project-heading">
          <h3>{project.title}</h3>
          <span className="project-category">{project.category}</span>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="tag-list" aria-label="Technologies">
          {project.technologies.map((technology) => (
            <span className="tag" key={technology}>{technology}</span>
          ))}
        </div>
        <div className="project-actions">
          {project.repository ? (
            <a className="project-action" href={project.repository} target="_blank" rel="noreferrer">
              <Github size={14} aria-hidden="true" />
              Source
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          ) : (
            <span className="project-action-unavailable" aria-label="Repository link not provided">
              <Github size={14} aria-hidden="true" />
              Source unavailable
            </span>
          )}
          {project.demo ? (
            <a className="project-action" href={project.demo} target="_blank" rel="noreferrer">
              Live demo
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          ) : (
            <span className="project-action-unavailable">Demo unavailable</span>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
