export type ProjectCategory = 'Frontend' | 'Full Stack'

export type Project = {
  slug: string
  title: string
  description: string
  technologies: string[]
  category: ProjectCategory
  repository?: string
  demo?: string
}

export const projects: Project[] = [
  {
    slug: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    description:
      'A responsive portfolio website presenting professional experience, selected projects, technical skills, and contact information.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    category: 'Frontend',
  },
  {
    slug: 'sdy-bank',
    title: 'SDY Bank Credit Card Approval System',
    description:
      'A credit card application and eligibility management system with application status tracking and administrative features.',
    technologies: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    category: 'Full Stack',
  },
  {
    slug: 'Taara Decors',
    title: 'Taara Decors Event Planner',
    description:
      'An event booking application for browsing events and managing booking information.',
    technologies: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    category: 'Full Stack',
  },
  {
    slug: 'SV Stores',
    title: 'SV Stores shopping website',
    description:
      'An e-commerce platform for browsing and purchasing products online.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    category: 'Frontend',
  },
  {
    slug: 'TalentBridge',
    title: 'TalentBridge Recruitment & staffing Platform',
    description:
      'A platform for connecting job seekers with employers and managing the recruitment process.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind Css'],
    category: 'Frontend',
  },

]
