import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/common/PageMeta'

function NotFoundPage() {
  return (
    <>
      <PageMeta title="Page not found" description="The page you are looking for could not be found." />
      <section className="container not-found">
        <p className="not-found-code">ERROR 404</p>
        <h1 className="page-title">This page wandered off.</h1>
        <p className="page-lede">The page may have moved or the address may be incorrect. Let’s get you back on track.</p>
        <Link className="button button-primary" to="/" style={{ marginTop: 24 }}>
          <ArrowLeft size={14} aria-hidden="true" /> Back home
        </Link>
      </section>
    </>
  )
}

export default NotFoundPage
