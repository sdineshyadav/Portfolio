import { useState } from 'react'
import PageMeta from '../components/common/PageMeta'
import ProjectCard from '../components/projects/ProjectCard'
import { projects, type ProjectCategory } from '../data/projects'

const filters: Array<'All' | ProjectCategory> = ['All', 'Frontend', 'Full Stack']

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All')
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter)

  return (
    <>
      <PageMeta
        title="Projects"
        description="Selected frontend and full-stack projects by Sathu Dinesh, built with React, TypeScript, Flask, and related technologies."
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow"><span className="eyebrow-dot" />Selected work</p>
          <h1 className="page-title">Projects built to solve real problems.</h1>
          <p className="page-lede">A mix of interface-focused and full-stack work. Each card lists the technologies used; project links are included when available.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="filters" role="group" aria-label="Filter projects by type">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-button${activeFilter === filter ? ' selected' : ''}`}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="project-grid" aria-live="polite">
            {filteredProjects.map((project) => <ProjectCard project={project} key={project.slug} />)}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectsPage
